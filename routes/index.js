const express = require("express");
const router = express.Router();
const questions = require("./questions");
const modals = require("./modals");
const mongoose = require("mongoose");

// 챕터 변수
let current_chapter = 0;
// 정답 배열
const answers = ["start", "Sunday", "bcd", "nashot", "wing", "cowork", "3"];
// 2번 정답 wednesday도 추가해야 함

// mongoDB 연결
mongoose.connect(
  "mongodb+srv://dbuser:dbuser@cluster0.okza5.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected");
});

// Schema 생성
const Schema = mongoose.Schema;

const User = new Schema({
  id: String,
  name: String,
  date: Date,
  solved: Number,
  try: Number,
});

const userModel = mongoose.model("User", User);
// var userdb = new userModel();

const libKakaoWork = require("../libs/kakaoWork");

router.get("/", async (req, res, next) => {
  // 유저 목록 검색 (1)
  const users = await libKakaoWork.getUserList();

  // 검색된 모든 유저에게 각각 채팅방 생성 (2)
  const conversations = await Promise.all(
    users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
  );

  // 생성된 채팅방에 메세지 전송 (3)
  const messages = await Promise.all([
    conversations.map((conversation) =>
      libKakaoWork.sendMessage({
        conversationId: conversation.id,
        text: "소마탈출 넘버원!!",
        blocks: questions["chapter1_blocks"],
      })
    ),
  ]);

  // 응답값은 자유롭게 작성하셔도 됩니다.
  res.json({
    result: true,
  });
});

router.post("/request", async (req, res, next) => {
  console.log(req.body);
  const { message, value } = req.body;

  switch (value) {
    case "start":
      // 설문조사용 모달 전송 (3)
      return res.json({
        view: modals.chapter1_modals,
      });
      break;
    default:
      return res.json({
        view: modals.chapter2_modals,
      });
  }

  res.json({});
});

router.post("/callback", async (req, res, next) => {
  console.log(req.body);
  const { message, actions, action_time, value } = req.body;

  // 설문조사 응답 결과 메세지 전송 (3)
  userModel.find({ id: message.user_id }, async function (err, docs) {
    var user;
	  if (docs.length === 0) {
      var newUser = new userModel({
        id: message.user_id,
        name: actions.name,
        date: new Date(),
        solved: 0,
        try: 0,
      });
	  user = newUser;
      newUser.save(function (err) {});
		current_chapter = 0;
    }
	  // 이미 유저 정보가 db에 있다면 solved 값을 기준으로
	else {
		user = docs[0];
		current_chapter = user.solved;
	}
  // 현재 풀고 있는 챕터일 경우에만 try 증가 
  //if (actions.value === `Chapter {current_chapter}`)
  // try 증가
  user.try++;
  //정답이 맞으면 current_chapter 증가
  if (
    actions.answer === answers[current_chapter] &&
    current_chapter < answers.length
  ) {
	user.solved++;
    current_chapter++;
  }
	  // try 동률을 순위매기기 위해서 마지막 문제를 푼 시간을 저장
  if (current_chapter === answers.length){
	  user.date = new Date();
  }
  // try, solved 저장
  user.save(function(err) {
	  if (err){
		  throw err;
	  }
  })
	  
  // 마지막 문제 풀이 시
  if (user.solved === answers.length){
	  // solved 가 7개인 유저들을 찾아서
	  userModel.find({solved: answers.length}, async function(err, docs){
		  // try 숫자 오름차순으로 정렬 후 (두 번째 정렬 조건으로 문제를 푼 date)
		  docs.sort((a, b) => {
					return a.try < b.try ? -1 : a.try > b.try ? -1 : 0;
					})
		  // ranking 정보 문자열로 변환 추후 예쁘게 가독성 좋게
		  var ranking = docs.reduce((a, b) => a + "\n" + `${b.name}   ${b.try}   ${b.date}`, "");
		  ranking_blocks = questions['ranking_blocks'];
		  ranking_blocks[1]["text"] = ranking;
		  console.log(ranking_blocks);
		  await libKakaoWork.sendMessage({
			  conversationId: message.conversation_id,
			  text: "Ranking",
			  blocks: ranking_blocks,
		  });
	  });
	  // 오류가 나서 일단 주석 처리, res.json은 하나만 있어야 함.
	  // res.json({ result: true});
	  return;
  }

  const idx = current_chapter + 1;
  const temp_text = `Chapter ${idx}`;
  const temp_blocks = questions[`chapter${idx}_blocks`];
  console.log(temp_blocks);
  await libKakaoWork.sendMessage({
    conversationId: message.conversation_id,
    text: temp_text,
    blocks: temp_blocks,
  });
	});
  res.json({ result: true });
});

module.exports = router;
