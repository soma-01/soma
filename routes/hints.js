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

const hint2_blocks = {
  header: {
    type: "header",
    text: "#2 힌트",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "2번 힌트입니다.",
      "",
    ],
    markdown: true,
  },
};
exports.hint2_blocks = appendTextFromObject(hint2_blocks);

const hint3_blocks = {
  header: {
    type: "header",
    text: "#3 힌트",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "3번 힌트입니다.",
      "",
    ],
    markdown: true,
  },
};
exports.hint3_blocks = appendTextFromObject(hint3_blocks);

const hint4_blocks = {
  header: {
    type: "header",
    text: "#4 힌트",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "4번 힌트입니다.",
      "",
    ],
    markdown: true,
  },
};
exports.hint4_blocks = appendTextFromObject(hint4_blocks);

const hint5_blocks = {
  header: {
    type: "header",
    text: "#5 힌트",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "5번 힌트입니다.",
      "",
    ],
    markdown: true,
  },
};
exports.hint5_blocks = appendTextFromObject(hint5_blocks);

const hint6_blocks = {
  header: {
    type: "header",
    text: "#6 힌트",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "6번 힌트입니다.",
      "",
    ],
    markdown: true,
  },
};
exports.hint6_blocks = appendTextFromObject(hint6_blocks);

const hint7_blocks = {
  header: {
    type: "header",
    text: "#7 힌트",
    style: "blue",
  },
  text: {
    type: "text",
    textArray: [
      "",
      "7번 힌트입니다.",
      "",
    ],
    markdown: true,
  },
};
exports.hint7_blocks = appendTextFromObject(hint7_blocks);
