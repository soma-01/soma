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
        "1. *금요일*을 기준",
        "",
        "2. *어제*와 *내일*을 기준",
        "",
        "답은 *2개*, 둘 중에 하나만 입력",
        ""
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
    image: {
        type: "image_link",
        url:
          "https://docs.google.com/uc?export=download&id=19FSQjOYKKheh8Ig-E__kvHsGPHRNY7Js",
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
        "11기 *인증* 프로젝트",
        ""
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
          "*line*",
          ""
        ],
        markdown: true,
      },
    image: {
        type: "image_link",
        url:
          "https://docs.google.com/uc?export=download&id=1TXxEya-ViF5scBkBxnPQ0EllEa9qSIuz",
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
        "소프트웨어 마에스트로 *연수과정 소개*",
        "",
        "*in English*",
        ""
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
        "코딩 테스트",
        "",
        "*length of cycle*",
        ""
      ],
      markdown: true,
    },
  };
  exports.hint7_blocks = appendTextFromObject(hint7_blocks);

  const hint8_blocks = {
    header: {
      type: "header",
      text: "#8 힌트",
      style: "blue",
    },
    image: {
        type: "image_link",
        url:
          "https://docs.google.com/uc?export=download&id=1Iuhbdy8Xf9KW-gZX6Eu2vhdo5AdX7Y88",
      },
  };
  exports.hint8_blocks = appendTextFromObject(hint8_blocks);

  const hint9_blocks = {
    header: {
      type: "header",
      text: "#9 힌트",
      style: "blue",
    },
    text: {
      type: "text",
      textArray: [
        "",
        "힌트가 없는 문제입니다.",
        "",
      ],
      markdown: true,
    },
  };
  exports.hint9_blocks = appendTextFromObject(hint9_blocks);

const hint10_blocks = {
    header: {
      type: "header",
      text: "#10 힌트",
      style: "blue",
    },
    text: {
      type: "text",
      textArray: [
        "",
        "힌트가 없는 문제입니다.",
        "",
      ],
      markdown: true,
    },
  };
  exports.hint10_blocks = appendTextFromObject(hint10_blocks);