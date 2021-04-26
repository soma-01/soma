const mongoose = require("mongoose");

let User = new mongoose.Schema({
  id: { type: String, require: true, unique: true},
  name: { type: String, required: true },
  date: { type: Date, required: true },
  solved: { type: Number, required: true },
  try: { type: Number, required: true },
  });
	
let userModel = mongoose.model("User", User);

let current_chapter=0;
//let User;
//let userModel;
//DB 연결함수
function databaseInit(){
  //추후 로컬 주소 환경변수로 설정
  // db id: gskm77037@naver.com pwd:soma1234
  mongoose.connect(
  "mongodb+srv://dbuser:dbuser@cluster0.0xa79.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true })
  .then(()=> console.log("DB connected"))
  .catch(e => console.log(e));
	
  // User = new mongoose.Schema({
  // id: { type: String, require: true, unique: true},
  // name: { type: String, required: true },
  // date: { type: Date, required: true },
  // solved: { type: Number, required: true },
  // try: { type: Number, required: true },
  // });
	
  // userModel = mongoose.model("User", User);
}


async function userEnroll(react_user_id,actions){
	// 설문조사 응답 결과 메세지 전송 (3)
	// 유저 정보 조회 없으면 생성하고 db저장, 있으면 가져오기
	return new Promise(function (resolve, reject) {
		let user;
		userModel.find({ id: react_user_id }, function (err, docs) {
		if (docs.length === 0) {
		  var newUser = new userModel({
			id: react_user_id,
			name: actions.name,
			date: new Date(),
			solved: 0,
			try: 0,
		  });
		  newUser.save(function (err) {});
		  resolve(newUser);
		}
		else {
			user = docs[0];
			current_chapter = user.solved;
			resolve(user);
		}
  	});
	})
	
}
module.exports = {
	current_chapter,
	databaseInit,
	userEnroll,
	userModel
}
