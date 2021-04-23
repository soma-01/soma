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
  userModel.find({ id: message.user_id }, function (err, docs) {
    if (docs.length === 0) {
      var newUser = new userModel({
        id: message.user_id,
        name: actions.name,
        date: new Date(),
        solved: 0,
        try: 0,
      });
      newUser.save(function (err) {});
    }
  });

  //정답이 맞으면 current_chapter 증가
  if (
    actions.answer === answers[current_chapter] &&
    current_chapter < answers.length
  ) {
    current_chapter++;
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

  res.json({ result: true });
});

module.exports = router;
