const express = require("express");
const router = express.Router();
const questions = require("./questions");
const hints = require("./hints");
const modals = require("./modals");
const mongoose = require("./database");
const moment = require("moment");
// 정답 배열
const answers = require("./answers")["answers"];
const answersBlock = require("./answers");

// 챕터 변수


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
        view: modals.other_chapter_modals,
      });
  }

  res.json({});
});

router.post("/callback", async (req, res, next) => {
  const {
    message,
    react_user_id,
    actions,
    action_time,
    value,
    action_type,
    action_name,
  } = req.body;
  

  await mongoose.userEnroll(react_user_id, actions).then(async (user) => {
	var current_chapter = 0;
    console.log("name: ", user.name, "solved: ", user.solved);
    current_chapter = user.solved;
	  
	// 아직 문제 풀이 중인 유저는 0, 다 푼 유저는 1
  var flag = 0;
  var readHintOrAnswer = 0;
  
  console.log(action_name);
  
  switch (action_name){
	  case "hint":
		  if (action_name == "hint") {
			console.log(value + "_blocks");
			await libKakaoWork.sendMessage({
			  conversationId: message.conversation_id,
			  text: "힌트",
			  blocks: hints[value + "_blocks"],
			});
			  readHintOrAnswer = 3;
		  }
		  break;
	  case "answer":
		  if (action_name == "answer") {
			  console.log(value);
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: "정답",
					blocks: answersBlock[value + "_blocks"],
				});
				readHintOrAnswer = 10;
		  }
		  break;
	  default:
		  user.solved === answers.length ? (flag = 1) : 0;
			// 현재 풀고 있는 챕터일 경우에만 try 증가
			//if (actions.value === `Chapter {current_chapter}`)
			// try 증가
			flag === 1 ? 0 : readHintOrAnswer++;

			if (flag !== 1 && current_chapter === 0) {
				actions.answer = "start";
			  }

			//정답이 맞으면 current_chapter 증가 flag 없으면 새로고침에 answer항목 없어서 에러남

			// 2번 문제 답 2개 부분
			if (
			  flag === 0 &&
			  current_chapter === 1 &&
			  answers[current_chapter].includes(actions.answer) &&
			  current_chapter < answers.length
			) {
			  user.solved++;
			  current_chapter++;
			}
			// 2번 문제 제외한 기타 문제
			if (
			  flag === 0 &&
			  current_chapter !== 1 &&
			  actions.answer == answers[current_chapter] &&
			  current_chapter < answers.length
			) {
			  user.solved++;
			  current_chapter++;
			}
			// try 동률을 순위매기기 위해서 마지막 문제를 푼 시간을 저장
			if (current_chapter == answers.length && flag === 0) {
			  var curr = new Date();
			  var utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
			  var kr_curr = new Date(utc + 9 * 60 * 60 * 1000);
			  // var temp = moment(kr_curr).format("MM/DD HH:MM:ss");
			  user.date = kr_curr;
			  console.log(`new finished user: ${user.name} try: ${user.try}`);
			  flag = 1;
			}
  }
  
	user.try += readHintOrAnswer;
	  //readHintOrAnswer = 0;
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
              return a.try < b.try
                ? -1
                : a.try > b.try
                ? 1
                : a.date < b.date
                ? -1
                : a.date > b.date
                ? 1
                : 0;
            });
			var myRanking=0;
			var rankingFlag=0;
			var rankingList = JSON.parse(JSON.stringify(questions.rankingHeader));
			for (let i=0;i<10 && i<docs.length;i++){
				if(docs[i].name===user.name){
					myRanking=i+1;
					rankingFlag=1;
				}
				var tempList =  questions.ranking_blocks;
				tempList.content.text = `${docs[i].try}회   ${moment(docs[i].date).format("MM/DD HH:mm")}\n*${docs[i].name}*`;
				tempList.image.url = questions.rankingImages[i];
				rankingList.push(JSON.parse(JSON.stringify(tempList)));
			}
			if(rankingFlag===0){
				for(let i=10;i<docs.length;i++){
				if(docs[i].name===user.name){
					myRanking=i+1;
					break;
				}
			  }
			}
			var myList =  questions.ranking_blocks;
			myList.content.text = `*${myRanking}등!!*\n${user.try}회   ${moment(user.date).format("MM/DD HH:mm")}\n*${user.name}*`;
			myList.image.url = questions.myRanking.accessory.url;
            rankingList.push(JSON.parse(JSON.stringify(myList)));
			  
			rankingList.push(questions.refreshButton);
			await libKakaoWork.sendMessage({
              conversationId: message.conversation_id,
              text: "Ranking",
              blocks: rankingList,
            });
			rankingList = questions.rankingHeader;
          }
        );
        // 오류가 나서 일단 주석 처리, res.json은 하나만 있어야 함.
      }
    });
	  
		// 아직 다 못 푼 유저일 경우에만 다음 문제 보냄
	  if (flag === 0 && action_name !== "hint" && action_name !== "answer") {
		await libKakaoWork.sendMessage({
		  conversationId: message.conversation_id,
		  text: `Chapter ${current_chapter + 1}`,
		  blocks: questions[`chapter${current_chapter + 1}_blocks`],
		});
	  }
  });

  res.json({ result: true });
});

module.exports = router;