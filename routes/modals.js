exports.chapter1_modals = {
  title: "modal title",
  accept: "확인",
  decline: "취소",
  value: "start_game",
  blocks: [
    {
      type: "label",
      text: "입력한 *별명* 또는 *이름*으로 랭킹이 메겨집니다",
      markdown: true,
    },
    {
      type: "input",
      name: "name",
      required: false,
      placeholder: "이름을 입력해주세요",
    },
    {
      type: "label",
      text: "Answer",
      markdown: true,
    },
    {
      type: "input",
      name: "answer",
      required: false,
      placeholder: "내용을 입력해주세요",
    },
  ],
};

exports.chapter2_modals = {
  title: "modal title",
  accept: "확인",
  decline: "취소",
  value: "start_game",
  blocks: [
    {
      type: "label",
      text: "Answer",
      markdown: true,
    },
    {
      type: "input",
      name: "answer",
      required: false,
      placeholder: "영어 소문자 또는 숫자를 입력해주세요",
    },
  ],
};
