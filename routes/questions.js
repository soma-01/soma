// 기존 text 값으로 넣기에는 가독성이 좋지 않아 추가한 코드
// text의 값으로 기존 textArray를 각 줄마다 개행문자를 추가하고
// values 값을 리턴(기존 blocks에 header, text, button 추가함)
const appendTextFromObject = (obj) => {
  const texts = ["text", "text2", "text3"];
  iter = 0;
  Object.keys(obj).map((k) => {
    if (k.includes("text")) {
      iter++;
    }
  });
  texts.slice(0, iter).map((t) => {
    obj[t].text = obj[t].textArray.reduce((a, b) => a + "\n" + b);
    delete obj[t].textArray;
  });
  return [...Object.values(obj)];
};

// text 대신 textArray 추가
const chapter1_blocks = {
  header: {
    type: "header",
    text: "#1 시작",
    style: "blue",
  },
  image: {
    type: "image_link",
    url: "https://drive.google.com/uc?id=1ff8GJ7-bgs9Pv0j6OzVLBe0Dq9cnkxRx",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "“소마탈출 넘버원”!!(1팀)",
      "",
      "우리 “소마탈출 넘버원”팀은 단계별로 주어지는 넌센스 문제를 해결하는",
      "",
      "챗봇을 제작하였습니다!",
      "",
      "주인공 캐릭터에 몰입하실수록 즐겁게 즐기실 수 있을것 같아요 !",
      "",
      "정답은 a-z | 0-9로 구성하였습니다.",
      "",
      "*정답 입력*은 *정답* 버튼을 클릭 후 입력해주시면 됩니다.",
      "",
      "정답을 제출 하였을 때 같은 문제가 다시 나오면 틀린 정답이고 다음 챕터가 나올 경우에 옳은 정답입니다!",
      "",
      "*주의*: *힌트*나 *정답보기*를 많이 보실시에는 랭킹 산정에 *지장*이 갈 수 있습니다.",
      "",
      "자 *시작*해 볼까요?",
      "",
    ],
    markdown: true,
  },
  button: {
    type: "button",
    action_type: "call_modal",
    value: "start",
    text: "시작하기",
    style: "default",
  },
};
exports.chapter1_blocks = appendTextFromObject(chapter1_blocks);

const chapter2_blocks = {
  header: {
    type: "header",
    text: "#2 오늘은 무슨 요일?",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "내 이름은 김소마!",
      "",
      "13:1 의 경쟁률을 뚫고 당당하게 소마 12기의 연수생이 되었어.",
      "",
      "평소 궁금한 기술을 이것 저것 공부하고 싶어, 자율 멘토링들을 신청했어.",
      "",
      "오전부터 멘토링을 들어왔던 탓일까,  지금 너무 피곤한걸?...",
      "",
      "멘토링이 끝난 시간에 버스를 타고 집에 가면 앉을 자리가 없어 분명 서서 졸게 될꺼야... ",
      "",
      "나는 아직 카드키를 수령받지 못했으니까 옆에 있는 이마소에게 부탁을 해야겠다.",
      "",
      "“마소야.. 나 카드가 없는데 혹시 6층 계단문 열어놓고 가줄 수있어? 나 조금 쉬었다 가려고!”",
      "",
      "자 그럼 마음 놓고 조금만 쉬었다 갈까?",
      "",
      "너무 피곤하다.. 하암..",
      "",
    ],
    markdown: true,
  },
  image: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=17A9XiI-alQAo0fB4bcopE4jYpOgJcpKL",
  },
  text2: {
    type: "text",
    textArray: ["(스르륵)"],
    markdown: true,
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint2",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter2",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter2_blocks = appendTextFromObject(chapter2_blocks);

const chapter3_blocks = {
  header: {
    type: "header",
    text: "#3 카드키 수령",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "음냐.. 오늘이 수요일이였던가.. 일요일이였던가…..",
      "",
      "……",
      "",
      "어?!! 뭐야!! ",
      "",
      "6층 12회의실에서 깜빡 잠이든 나는 부리나케 짐을 싸고,  시계를 올려다 보았다.",
      "",
      "“헉..새벽 세시야?.. 빨리 가야겠다. 일단 7층으로 올라 가보자.”",
      "",
      "“일단 엘리베이터를 타려면… 카드키가 필요하니까.. 먼저 프론트데스크에서 내 카드키를 찾아보자!”",
      "",
      "7층에 올라온 나는 프론트 책상에서 카드키라고 적혀있는 서랍을 발견하였다.",
      "",
      "서랍은 자물쇠가 걸려있었고 그 옆에는 문제로 보여지는 그림이 붙혀져 있었다.",
      "",
    ],
    markdown: true,
  },
  image: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=1XSShn340prDAvues7Qdy6ZwGAOzQG5-p",
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint3",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter3",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter3_blocks = appendTextFromObject(chapter3_blocks);

const chapter4_blocks = {
  header: {
    type: "header",
    text: "#4 씨앗방",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "“에이.. 비.. 씨.. 디.. 이.. 어! 알파벳을 한글로 써놓은 거구나!”",
      "",
      "자물쇠를 열고 카드키를 찾은 나는 엘리베이터 앞까지 갈 수 있었다. 하지만 엘리베이터는 전원이 꺼져있었다.",
      "",
      "다시 엘리베이터를 작동시키기 위해서는 5자리의 암호를 입력해야만 했다.",
      "",
    ],
    markdown: true,
  },
  image: {
    type: "image_link",
    url: "https://drive.google.com/uc?id=18MOyhM-lrBhk-vHBph4OW1uWLh8v1Cjl",
  },
  text2: {
    type: "text",
    textArray: [
      "",
      "“START = D ?....  소마 1기 부터 내려오는 전설에 의하면,",
      "",
      "밤을 새다 건물에 갖힌 연수생을 위해 7층 곳곳에 암호를 숨겨놓았다 했는데 이게 그건가?….”",
      "",
      "“먼저 씨앗방부터 가보자!”",
      "",
      "씨앗방에 도착한 나는 곳곳을 살펴 보았고, ",
      "",
      "3D 프린터 위에서 엘리베이터 관련 문제에 대한 답이 있을 것 같은 작은 상자를 발견하였다.",
      "",
      "“자물쇠가 걸려있는 상자를 열기 위해서는 상자 옆 놓여진 종이에 적힌 문제를 풀어야 겠군!”",
      "",
      "문제는 다음과 같았다.",
      "",
    ],
    markdown: true,
  },
  image2: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=1OhAPo-Vq4fqFks3Uhe858kEjMPCZHpZA",
  },
  text3: {
    type: "text",
    textArray: [
      "",
      "“엥?? 뜬금없이 무슨 골프코치? 아! 나 이거 본적있어!”",
      "",
      "띡띡..",
      "",
    ],
    markdown: true,
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint4",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter4",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter4_blocks = appendTextFromObject(chapter4_blocks);

const chapter5_blocks = {
  header: {
    type: "header",
    text: "#5 미팅룸",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "소마를 준비하며 이전 진행한 다양한 프로젝트를 살펴본 덕분에, 쉽게 풀 수 있었다. ",
      "",
      "“정말 멋진 프로젝트던데, 나도 꼭 인증받을 수 있도록 노력해야겠다!”",
      "",
      "상자를 열어보니, ↙↙3 라고 적힌 종이와 다음 문제를 발견할 수 있었다. ",
      "",
      "↙↙3은 엘리베이터를 동작시키기 위한 암호임이 분명했다.",
      "",
      "“너무 순조롭다! 다음은 미팅룸으로 가보자!”",
      "",
      "미팅룸의 책상에는 회의용 모니터와, 알파벳이 입력가능한 리모콘이 놓여져 있었다.",
      "",
      "나는 모니터를 작동 시켰다. 켜진 모니터에는 다음과 같은 그림이 보여졌다.",
      "",
    ],
    markdown: true,
  },
  image: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=1T_1C6RYyPUQ162lBPbJlmMuFqL5X3F07",
  },
  image2: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=1U3T6emRdYEesFgONqL6WATJmBoQxYZ_3",
  },
  image3: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=1q4GOekIvSvF7pBtTyD-GyrXwbIGJYNMI",
  },
  text2: {
    type: "text",
    textArray: ["“이건 또 뭐야!!ㅠㅠ”", ""],
    markdown: true,
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint5",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter5",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter5_blocks = appendTextFromObject(chapter5_blocks);

const chapter6_blocks = {
  header: {
    type: "header",
    text: "#6 오픈미팅룸",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "“ㄱ에서 ㅅ까지…. “",
      "",
      "순서대로 하다보니 WING 이라는 단어를 찾을 수 있었다.",
      "",
      "리모콘에 WING을 입력하니 스크린에 ↗↗2, 오픈미팅룸으로 가시오.이라는 문자가 나타났다.",
      "",
      "“오케이! 좋았어! 다음은 오픈미팅룸에 한번 가보자. ",
      "",
      "너무 쉽잖아?! 오픈 미팅룸에, 분명 다음 문제의 내용이 숨겨져 있을 거야..!”“",
      "",
      "오픈 미팅룸 책상 위에는 전원이 켜진 노트북이 놓여져 있었다. ",
      "",
    ],
    markdown: true,
  },
  image: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=1dW0rlu3GzSpWPmgB6TUU6h_y5LgYYXpE",
  },
  text2: {
    type: "text",
    textArray: [
      "“어라?? 홈페이지가 왜 이러지???”",
      "",
      "노트북에는 이상해진 소마 홈페이지의 로그인창이 띄워져 있었고, 아이디만 입력된 상태로 있었다.",
      "",
      "뭔가 비밀번호만 찾아서 로그인한다면 다음 단서를 얻을 수 있을 것 같았다.",
      "",
      "“어.. 문제는 어디있지?”",
      "",
      "조금 시간이 걸려서 오픈미팅룸의 쇼파 밑에서 새로운 문제를 발견할 수 있었다.",
      "",
    ],
    markdown: true,
  },
  image2: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=18qkv2dGJnLFz32KRClnLpHayq1b7dlz3",
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint6",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter6",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter6_blocks = appendTextFromObject(chapter6_blocks);

const chapter7_blocks = {
  header: {
    type: "header",
    text: "#7 테스트베드룸",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "5월에는 HACKATHON",
      "7월에는 WORKSHOP",
      "10월에는 TOPCIT",
      "",
      "“정말 중요한 일정이니깐 절대 잊지 말아야겠다.”",
      "",
      "“Co-Work. 소마에서 협업은 정말 중요한 것 같아. ",
      "",
      "팀과 멘토님께 부끄럽지 않은 프로젝트를 열심히 진행해 보이겠어!”",
      "",
      "로그인에 성공하니  *←1, 테스트베드룸으로 가시오*  라는 메세지가 나타났다.",
      "",
      "“우와…! 끝내 주는데?..”",
      "",
      "테스트배드룸에는 고성능 장비들이 놓여져 있었다. ",
      "",
      "코로나로 인해 이 멋진 장비들을 자유롭게 사용하지 못하는 상황이 너무 아쉬울 따름이었다.",
      "",
      "여러 장비들 중 마지막 문제에 대한 정보가 담겨져 있을 거라고 생각하여 모든 장비들을 켜기로 하였다.",
      "",
      "아니나 다를까 유일하게 전원이 켜지는 컴퓨터가 있었고 엘리베이터 암호에 대한 정보가 있음을 직감하였다.",
      "",
      "“역시! 한번 풀어볼까?~”",
      "",
      "*[3, 5, -1, -2, 4, 4, 3, -2, -3, -2]*",
      "",
    ],
    markdown: true,
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint7",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter7",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter7_blocks = appendTextFromObject(chapter7_blocks);

const chapter8_blocks = {
  header: {
    type: "header",
    text: "#8 엘리베이터",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "“어디서 많이 본 배열인가 했더니 가장 긴 무한 루프의 길이를 구하는 코딩테스트 문제였구나!”",
      "",
      "장비에 연결된 키보드에 3을 입력하고 엔터를 누르니, 웅장한 데스크탑의 소리와 함께 깜깜했던 7층 건물의 불이 환하게 비추어 졌다. 전설로 내려오던 문제들을 모두 풀었다는 것을 의미하는 것 같았다.",
      "",
      "불이 켜짐과 동시에 뒷편에 놓아진 프린터가 작동하기 시작하였고, 불과 몇 분후 ↘1  가 적혀있는 종이가 출력되었다.",
      "",
      "“이제 엘리베이터 앞으로 가자”",
      "",
      "이전에 봤던 디지털 잠금장치에 도착했다.",
      "",
    ],
    markdown: true,
  },
  image: {
    type: "image_link",
    url: "https://drive.google.com/uc?id=18MOyhM-lrBhk-vHBph4OW1uWLh8v1Cjl",
  },
  image2: {
    type: "image_link",
    url:
      "https://docs.google.com/uc?export=download&id=1ywklb3SSv2PTDs0MFB7QDTbZInvBaQb8",
  },
  text2: {
    type: "text",
    textArray: [
      "",
      "내가 찾은 힌트는 이게 전부다. 이제 잘 조합하는 수 밖에 없을 것 같다.",
      "",
      "하지만 입력장치에는 숫자뿐인데 대체 어떻게 하라는거지….??",
      "",
      "암호를 분석해, 엘리베이터를 작동시킬 수 있는 패스워드를 입력하자.",
      "",
    ],
    markdown: true,
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint8",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter8",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter8_blocks = appendTextFromObject(chapter8_blocks);

const chapter9_blocks = {
  header: {
    type: "header",
    text: "#9 탈출?",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "D.. R..E..A..M….",
      "",
      "철컹! 휘이이이이이잉!!!!",
      "",
      "엘리베이터가 가동하는 소리가 들린다. 엄청난 굉음과 함께 갑자기 천장이 무너져 내리기 시작했다.",
      "",
      "건물이 무너져 내리는 공포감에 드디어 탈출할 수 있다는 기쁨을 누릴 틈이 없었다.",
      "",
      "나는 급하게 탑승해 1층을 눌렀다.",
      "",
      "어라? 1층이 눌리지 않는 엘리베이터. 점점 빠른 속도로 무너져 내려가는 건물. ",
      "",
      "나는 엘리베이터 문이 닫힐때 까지 1층을 눌러보지만 꼼짝도 하지 않는다. 다른 버튼도 전혀 동작하지 않는다.",
      "",
      "“왜이래 이거!! 아 제발…..!!! 누가 나좀 도와줘..!!”",
      "",
      "다시 나가보려고 엘리베이터 문을 열어보지만 문도 더이상 움직이지 않는다. 꼼짝없이 갇혔다.",
      "",
      "한참을 고민하고 있을때 갑자기 엘리베이터가 혼자 내려가기 시작하더니 가속도가 붙어서 마치 추락할 것 같은 공포심을 유발했다.",
      "",
      "“으아아아아아아아아아아아아아아아아아!!!”",
      "",
      "(*소마*야…  *소마*야…!)",
      "",
    ],
    markdown: true,
  },
  text2: {
    type: "text",
    textArray: [
      "어디선가 나를 부르는 소리가 들린다. 나는 허무하게 죽어버린 것일까?",
      "",
    ],
    markdown: true,
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint9",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter9",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter9_blocks = appendTextFromObject(chapter9_blocks);

const chapter10_blocks = {
  header: {
    type: "header",
    text: "#10 Finish",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "“소마야!!!!!!!!”",
      "",
      "“악!!!!”",
      "",
      "소리를 지르며 벌떡 일어난 나는 주변을 빠르게 둘러보았다.",
      "",
      "어라?.. 여기는… 6층 12회의실?...",
      "",
      "“너 금새 꿈꿨어? 멘토링 받다가 조는것도 모자라, 꿈까지 꾸니?”",
      "",
      "얼굴이 화끈하게 달아올랐다.",
      "",
      "“죄…. 죄송합니다!!!!!”",
      "",
      "...",
      "",
      "밤 10시, 멘토링이 끝나고, 방명록 작성을 위해 다같이 7층 프론트데스크로  올라갔다.",
      "",
      "“온김에 카드키를 받아야 겠다.”",
      "",
      "카드키를 수령하기 위해 앞에 계신 경비아저씨께 내 이름을 말하며 카드키를 아직 수령받지 못하고 말하였다.",
      "",
      "경비아저씨께서는 “카드키”라고 적혀있는 자물쇠가 걸린 서랍에서, BCD를 입력하고 카드키를 꺼내고 있었다.",
      "",
      "“어?...”",
      "",
      "*answer : finish*",
      "",
    ],
    markdown: true,
  },
  active: {
    type: "action",
    elements: [
      {
        type: "button",
        action_type: "submit_action",
        action_name: "hint",
        value: "hint10",
        text: "힌트",
        style: "primary",
      },
      {
        type: "button",
        action_type: "call_modal",
        value: "chapter10",
        text: "정답",
        style: "danger",
      },
    ],
  },
};
exports.chapter10_blocks = appendTextFromObject(chapter10_blocks);

// ranking 페이지 blocks를 하나 더 생성
const ranking_blocks = {
  type: "context",
  content: {
    type: "text",
    text: "",
    markdown: true,
  },
  image: {
    type: "image_link",
    url:
      "https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/doc@3x.png",
  },
};
exports.ranking_blocks = ranking_blocks; //= [...Object.values(ranking_blocks)];

const rankingImages = [
  "https://drive.google.com/uc?export=download&id=1L8Tax449QnT1XQyLSBMlA5GyJIS6Cbff",
  "https://drive.google.com/uc?export=download&id=1y7SRBDfwtXGnFJSJr6zzOPR3CdRoRElv",
  "https://drive.google.com/uc?export=download&id=15IenfU1vm0a6yJSlDdMbnHn0v22AgN9n",
  "https://drive.google.com/uc?export=download&id=1cdkFlvJvZxLfrYbjV12EpJhpEb-3IJ1o",
  "https://drive.google.com/uc?export=download&id=1Ud-eKIwv3EFBo_Z3Y3oSbcLEBCekavIJ",
  "https://drive.google.com/uc?export=download&id=1wcuwA1mglXGnG2cMQrYDHQvIxadtS8WB",
  "https://drive.google.com/uc?export=download&id=1ve9r25rrJ9bNLI_suOeG-Kf-5jvpQSEq",
  "https://drive.google.com/uc?export=download&id=1DYHqB0rWWR24j1pHAoBlAIF5hqajzM6J",
  "https://drive.google.com/uc?export=download&id=17lUcLjLNo_nSCmiSFpzAg7TCYgCyJR9m",
  "https://drive.google.com/uc?export=download&id=1Dqj_ViqrfiDFJxegTX8JVmCJAXy6eklM",
];
exports.rankingImages = rankingImages;

exports.rankingHeader = [
  {
    type: "header",
    text: "Ranking",
    style: "blue",
  },
  {
    type: "text",
    text: "   *등수*      *try*    *완료시각*",
    markdown: true,
  },
];

exports.refreshButton = {
  type: "button",
  action_type: "submit_action",
  action_name: "refresh",
  value: "ranking",
  text: "새로고침",
  style: "default",
};

const myRanking = {
  type: "section",
  content: {
    type: "text",
    text: "카카오엔터프라이즈의\n업무용메신저\n*카카오워크*",
    markdown: true,
  },
  accessory: {
    type: "image_link",
    url:
      "https://drive.google.com/uc?export=download&id=1q9KOvEJDiDNlPT4oJvc63DBEtElbsCJt",
  },
};
exports.myRanking = myRanking;
