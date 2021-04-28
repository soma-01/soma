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

exports.answers = [
  "start",
  ["sunday", "wednesday"],
  "bcd",
  "nashot",
  "wing",
  "cowork",
  "3",
  "dream",
  "soma",
  "finish",
];

const answer2_blocks = {
	header: {
		type: "header",
		text: "#2 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*SUNDAY 또는 WEDNESDAY*",
			"",
		],
		markdown: true,
	},
}
exports.answer2_blocks = appendTextFromObject(answer2_blocks);

const answer3_blocks = {
	header: {
		type: "header",
		text: "#3 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*BCD*",
			"",
		],
		markdown: true,
	},
}
exports.answer3_blocks = appendTextFromObject(answer3_blocks);

const answer4_blocks = {
	header: {
		type: "header",
		text: "#4 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*NASHOT*",
			"",
		],
		markdown: true,
	},
}
exports.answer4_blocks = appendTextFromObject(answer4_blocks);

const answer5_blocks = {
	header: {
		type: "header",
		text: "#5 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*WING*",
			"",
		],
		markdown: true,
	},
}
exports.answer5_blocks = appendTextFromObject(answer5_blocks);

const answer6_blocks = {
	header: {
		type: "header",
		text: "#6 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*COWORK*",
			"",
		],
		markdown: true,
	},
}
exports.answer6_blocks = appendTextFromObject(answer6_blocks);

const answer7_blocks = {
	header: {
		type: "header",
		text: "#7 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*3*",
			"",
		],
		markdown: true,
	},
}
exports.answer7_blocks = appendTextFromObject(answer7_blocks);

const answer8_blocks = {
	header: {
		type: "header",
		text: "#8 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*DREAM*",
			"",
		],
		markdown: true,
	},
}
exports.answer8_blocks = appendTextFromObject(answer8_blocks);

const answer9_blocks = {
	header: {
		type: "header",
		text: "#9 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*SOMA*",
			"",
		],
		markdown: true,
	},
}
exports.answer9_blocks = appendTextFromObject(answer9_blocks);

const answer10_blocks = {
	header: {
		type: "header",
		text: "#10 정답",
		style: "blue",
	},
	text: {
		type: "text",
		textArray: [
			"",
			"*FINISH*",
			"",
		],
		markdown: true,
	},
}
exports.answer10_blocks = appendTextFromObject(answer10_blocks);