// 기존 text 값으로 넣기에는 가독성이 좋지 않아 추가한 코드
// text의 값으로 기존 textArray를 각 줄마다 개행문자를 추가하고
// values 값을 리턴(기존 blocks에 header, text, button 추가함)
const appendTextFromObject = (obj) => {
  obj.text.text = obj.text.textArray.reduce((a, b) => a + "\n" + b);
  delete obj.text.textArray;
  return [...Object.values(obj)];
};

// text 대신 textArray 추가
const chapter1_blocks = {
  header: {
    type: "header",
    text: "Chapter #1 시작",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "안녕하세요!",
      "미니프로젝트 1팀 “소마탈출 넘버원” 입니다!",
      "우리 “소마탈출 넘버원”팀은 단계별로 주어지는 넌센스 문제를 해결하는",
      "챗봇을 제작하였습니다!",
      "주인공 캐릭터에 몰입하실수록 즐겁게 즐기실 수 있을것 같아요 !",
      "정답은 a-z | 0-9로 구성하였습니다.",
      "자 *시작*해 볼까요?",
    ],
    markdown: true,
  },
  button: {
    type: "button",
    action_type: "call_modal",
    value: "start_game",
    text: "시작하기",
    style: "default",
  },
};
exports.chapter1_blocks = appendTextFromObject(chapter1_blocks);

const chapter2_blocks = {
  header: {
    type: "header",
    text: "Chapter #2 오늘은 무슨 요일?",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "내 이름은 김소마!",
      "13:1 의 경쟁률을 뚫고 당당하게 소마 12기의 연수생이 되었어.",
      "평소 궁금한 기술을 이것 저것 공부하고 싶어, 자율 멘토링들을 신청했어.",
      "오전부터 멘토링을 들어왔던 탓일까,  지금 너무 피곤한걸?...",
      "멘토링이 끝난 시간에 버스를 타고 집에 가면 앉을 자리가 없어 분명 서서 졸게 될꺼야... ",
      "나는 아직 카드키를 수령받지 못했으니까 옆에 있는 이마소에게 부탁을 해야겠다.",
      "“마소야.. 나 카드가 없는데 혹시 6층 계단문 열어놓고 가줄 수있어? 나 조금 쉬었다 가려고!”",
      "자 그럼 마음 놓고 조금만 쉬었다 갈까?",
      "너무 피곤하다.. 하암..",
      "*어제가 내일이었으면 좋겠다.. 그럼 오늘이 금요일일텐데..*",
      "(스르륵)",
    ],
    markdown: true,
  },
  button: {
    type: "button",
    action_type: "call_modal",
    value: "chapter2",
    text: "정답",
    style: "default",
  },
};
exports.chapter2_blocks = appendTextFromObject(chapter2_blocks);

const chapter3_blocks = {
  header: {
    type: "header",
    text: "Chapter #3 카드키 수령",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "음냐.. 오늘이 수요일이였던가.. 일요일이였던가…..",
      "……",
      "어?!! 뭐야!! ",
      "6층 12회의실에서 깜빡 잠이든 나는 부리나케 짐을 싸고,  시계를 올려다 보았다.",
      "헉..새벽 세시야?.. 빨리 가야겠다. 일단 7층으로 올라 가보자.",
      "일단 엘리베이터를 타려면… 카드키가 필요하니까.. 먼저 프론트데스크에서 내 카드키를 찾아보자!",
      "7층에 올라온 나는 프론트 책상에서 카드키라고 적혀있는 서랍을 발견하였다.",
      "서랍은 자물쇠가 걸려있었고 그 옆에는 문제로 보여지는 그림이 붙혀져 있었다.",
      "ㅇㅇ???ㅇㅇㅍㅈㅇㅇㅊㅇㅇ …….",
    ],
    markdown: true,
  },
  type: {
    type: "button",
    action_type: "call_modal",
    value: "chapter3",
    text: "정답",
    style: "default",
  },
};
exports.chapter3_blocks = appendTextFromObject(chapter3_blocks);

const chapter4_blocks = {
  header: {
    type: "header",
    text: "Chapter #4 씨앗방",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "“에이.. 비.. 씨.. 디.. 이.. 어! 알파벳을 한글로 써놓은 거구나!”",
      "자물쇠를 열고 카드키를 찾은 나는 엘리베이터 앞까지 갈 수 있었다. 하지만 엘리베이터는 전원이 꺼져있었다.",
      "다시 엘리베이터를 작동시키기 위해서는 5자리의 암호를 입력해야만 했다.",
      "[   엘리베이터 옆에 있는 키패드 사진   ]",
      "“START = D ?....  소마 1기 부터 내려오는 전설에 의하면,",
      "밤을 새다 건물에 갖힌 연수생을 위해 7층 곳곳에 암호를 숨겨놓았다 했는데 이게 그건가?….”",
      "“먼저 씨앗방부터 가보자!”",
      "씨앗방에 도착한 나는 곳곳을 살펴 보았고, ",
      "3D 프린터 위에서 엘리베이터 관련 문제에 대한 답이 있을 것 같은 작은 상자를 발견하였다.",
      "“자물쇠가 걸려있는 상자를 열기 위해서는 상자 옆 놓여진 종이에 적힌 문제를 풀어야 겠군!”",
      "문제는 다음과 같았다.",
      "11th .  golf coach . 3D =  ??????",
      "“엥?? 뜬금없이 무슨 골프코치? 아! 나 이거 본적있어!”",
      "띡띡..",
    ],
    markdown: true,
  },
  type: {
    type: "button",
    action_type: "call_modal",
    value: "chapter4",
    text: "정답",
    style: "default",
  },
};
exports.chapter4_blocks = appendTextFromObject(chapter4_blocks);

const chapter5_blocks = {
  header: {
    type: "header",
    text: "Chapter #2 오늘은 무슨 요일?",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "내 이름은 김소마!",
      "13:1 의 경쟁률을 뚫고 당당하게 소마 12기의 연수생이 되었어.",
      "평소 궁금한 기술을 이것 저것 공부하고 싶어, 자율 멘토링들을 신청했어.",
      "오전부터 멘토링을 들어왔던 탓일까,  지금 너무 피곤한걸?...",
      "멘토링이 끝난 시간에 버스를 타고 집에 가면 앉을 자리가 없어 분명 서서 졸게 될꺼야... ",
      "나는 아직 카드키를 수령받지 못했으니까 옆에 있는 이마소에게 부탁을 해야겠다.",
      "“마소야.. 나 카드가 없는데 혹시 6층 계단문 열어놓고 가줄 수있어? 나 조금 쉬었다 가려고!”",
      "자 그럼 마음 놓고 조금만 쉬었다 갈까?",
      "너무 피곤하다.. 하암..",
      "*어제가 내일이었으면 좋겠다.. 그럼 오늘이 금요일일텐데..*",
      "(스르륵)",
    ],
    markdown: true,
  },
  type: {
    type: "button",
    action_type: "call_modal",
    value: "chapter2",
    text: "정답",
    style: "default",
  },
};
exports.chapter5_blocks = appendTextFromObject(chapter5_blocks);

const chapter6_blocks = {
  header: {
    type: "header",
    text: "Chapter #2 오늘은 무슨 요일?",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "내 이름은 김소마!",
      "13:1 의 경쟁률을 뚫고 당당하게 소마 12기의 연수생이 되었어.",
      "평소 궁금한 기술을 이것 저것 공부하고 싶어, 자율 멘토링들을 신청했어.",
      "오전부터 멘토링을 들어왔던 탓일까,  지금 너무 피곤한걸?...",
      "멘토링이 끝난 시간에 버스를 타고 집에 가면 앉을 자리가 없어 분명 서서 졸게 될꺼야... ",
      "나는 아직 카드키를 수령받지 못했으니까 옆에 있는 이마소에게 부탁을 해야겠다.",
      "“마소야.. 나 카드가 없는데 혹시 6층 계단문 열어놓고 가줄 수있어? 나 조금 쉬었다 가려고!”",
      "자 그럼 마음 놓고 조금만 쉬었다 갈까?",
      "너무 피곤하다.. 하암..",
      "*어제가 내일이었으면 좋겠다.. 그럼 오늘이 금요일일텐데..*",
      "(스르륵)",
    ],
    markdown: true,
  },
  type: {
    type: "button",
    action_type: "call_modal",
    value: "chapter2",
    text: "정답",
    style: "default",
  },
};
exports.chapter6_blocks = appendTextFromObject(chapter6_blocks);

const chapter7_blocks = {
  header: {
    type: "header",
    text: "Chapter #2 오늘은 무슨 요일?",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "내 이름은 김소마!",
      "13:1 의 경쟁률을 뚫고 당당하게 소마 12기의 연수생이 되었어.",
      "평소 궁금한 기술을 이것 저것 공부하고 싶어, 자율 멘토링들을 신청했어.",
      "오전부터 멘토링을 들어왔던 탓일까,  지금 너무 피곤한걸?...",
      "멘토링이 끝난 시간에 버스를 타고 집에 가면 앉을 자리가 없어 분명 서서 졸게 될꺼야... ",
      "나는 아직 카드키를 수령받지 못했으니까 옆에 있는 이마소에게 부탁을 해야겠다.",
      "“마소야.. 나 카드가 없는데 혹시 6층 계단문 열어놓고 가줄 수있어? 나 조금 쉬었다 가려고!”",
      "자 그럼 마음 놓고 조금만 쉬었다 갈까?",
      "너무 피곤하다.. 하암..",
      "*어제가 내일이었으면 좋겠다.. 그럼 오늘이 금요일일텐데..*",
      "(스르륵)",
    ],
    markdown: true,
  },
  type: {
    type: "button",
    action_type: "call_modal",
    value: "chapter2",
    text: "정답",
    style: "default",
  },
};
exports.chapter7_blocks = appendTextFromObject(chapter7_blocks);
