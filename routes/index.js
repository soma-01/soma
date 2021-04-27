const express = require("express");
const router = express.Router();
const questions = require("./questions");
const modals = require("./modals");
const mongoose = require("./database");
const moment = require('moment');

// 챕터 변수
let current_chapter = 0;
// 정답 배열
const answers = ["start", "sunday", "bcd", "nashot", "wing", "cowork", "3"];
// 2번 정답 wednesday도 추가해야 함

mongoose.databaseInit();

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
  const { message, react_user_id, actions, action_time, value } = req.body;
  // 아직 문제 풀이 중인 유저는 0, 다 푼 유저는 1
  var flag = 0;
  await mongoose.userEnroll(react_user_id, actions).then((user) => {
    console.log("name: ", user.name, "solved: ",user.solved);
    current_chapter = user.solved;

    user.solved === answers.length ? (flag = 1) : 0;
    // 현재 풀고 있는 챕터일 경우에만 try 증가
    //if (actions.value === `Chapter {current_chapter}`)
    // try 증가
    flag === 1 ? 0 : user.try++;

    //정답이 맞으면 current_chapter 증가 flag 없으면 새로고침에 answer항목 없어서 에러남
    if (
      flag === 0 &&
      actions.answer === answers[current_chapter] &&
      current_chapter < answers.length
    ) {
      user.solved++;
      current_chapter++;
    }
    // try 동률을 순위매기기 위해서 마지막 문제를 푼 시간을 저장
    if (current_chapter == answers.length && flag === 0) {
      var curr = new Date();
	  var utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
	  var kr_curr = new Date(utc + (9*60*60*1000));
		// var temp = moment(kr_curr).format("MM/DD HH:MM:ss");
      user.date = kr_curr;
		console.log(`new finished user: ${user.name} try: ${user.try}`);
      flag = 1;
    }
    // try, solved 저장
    new Promise(function (resolve, reject) {
      user.save(function (err) {
        if (err) {
          throw err;
        } else {
          console.log("suc");
          resolve();
        }
      });
    }).then(() => {
      // 마지막 문제 풀이 시
      if (user.solved == answers.length) {
        console.log("pass");
        // solved 가 7개인 유저들을 찾아서
        mongoose.userModel.find(
          { solved: answers.length },
          async function (err, docs) {
            // try 숫자 오름차순으로 정렬 후 (두 번째 정렬 조건으로 문제를 푼 date)
            docs.sort((a, b) => {
              return a.try < b.try ? -1 : a.try > b.try ? 1 : a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            // ranking 정보 문자열로 변환 추후 예쁘게 가독성 좋게
			function makeName(name){
				var nameStr = "";
				if (name.length<=7){
					for (var i=0;i<name.length;i++) nameStr += name[i];
					for (i=0;i<10-name.length;i++) nameStr += "  ";
				} else{
					nameStr = name.slice(0,10);
				}
				console.log(nameStr);
				return nameStr;
			}
			var j = 1;
			console.log(user.date);
            var ranking = docs.reduce(
              (a, b) => a + "\n" + `${j++}위  ${makeName(b.name)}  ${b.try}   ${moment(b.date).format("MM/DD HH:MM")}`,
              "*이름*                        *try*      *완료 시각*      \n"
            );
			var myRanking=await mongoose.userModel.find({$and : [{solved: 7},{try : { $lte : user.try }},
																 {date :{ $lt :new Date(`${user.date}`)}}]}).count();
			myRanking++
			
            ranking_blocks = questions["ranking_blocks"];
            ranking_blocks[1]["text"] = ranking;
			ranking_blocks[3]["content"]["text"] = `${user.name}`;
			ranking_blocks[4]["content"]["text"] = `${user.try}`;
			ranking_blocks[5]["content"]["text"] = `${myRanking}위`;
            await libKakaoWork.sendMessage({
              conversationId: message.conversation_id,
              text: "Ranking",
              blocks: ranking_blocks,
            });
          }
        );
        // 오류가 나서 일단 주석 처리, res.json은 하나만 있어야 함.
        
      }
    });
  });
  // 아직 다 못 푼 유저일 경우에만 다음 문제 보냄
  if (flag === 0) {
    await libKakaoWork.sendMessage({
      conversationId: message.conversation_id,
      text: `Chapter ${current_chapter + 1}`,
      blocks: questions[`chapter${current_chapter + 1}_blocks`],
    });
  }

  res.json({ result: true });
});

module.exports = router;
