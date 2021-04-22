exports.chapter1_modals = {
		  title: "modal title",
		  accept: "확인",
		  decline: "취소",
		  value: "start_game",
		  blocks: [
			{
			  type: "label",
			  text: "이름",
			  markdown: true
			},
			{
			  type: "input",
			  name: "name",
			  required: false,
			  placeholder: "이름을 입력해주세요"
			},
			{
			  type: "label",
			  text: "안녕하세요!\n미니프로젝트 1팀 “소마탈출 넘버원” 입니다!\n우리 “소마탈출 넘버원”팀은 단계별로 주어지는 넌센스 문제를 해결하는\n챗봇을 제작하였습니다!\n주인공 캐릭터에 몰입하실수록 즐겁게 즐기실 수 있을것 같아요 !\n정답은 a-z | 0-9로 구성하였습니다.\n자 *시작*해 볼까요?",
			  markdown: true
			},
			{
			  type: "label",
			  text: "Answer",
			  markdown: true
			},
			{
			  type: "input",
			  name: "answer",
			  required: false,
			  placeholder: "내용을 입력해주세요"
			}
		  ]
		}