const mongoose = require("mongoose");


let current_chapter=0;
let User;
let userModel;
//DB 연결함수
function databaseInit(){
  //추후 로컬 주소 환경변수로 설정	
  mongoose.connect(
  "mongodb+srv://dbuser:dbuser@cluster0.okza5.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true })
  .then(()=> console.log("DB connected"))
  .catch(e => console.log(e));
	
  User = new mongoose.Schema({
  id: { type: String, require: true, unique: true},
  name: { type: String, required: true },
  date: { type: Date, required: true },
  solved: { type: Number, required: true },
  try: { type: Number, required: true },
  });
	
  userModel = mongoose.model("User", User);
}


 function userEnroll(message,actions,callback){
	// 설문조사 응답 결과 메세지 전송 (3)
	let user;
	// 유저 정보 조회 없으면 생성하고 db저장, 있으면 가져오기
	
	 userModel.find({ id: message.user_id }, function (err, docs) {
    if (docs.length === 0) {
      var newUser = new userModel({
        id: message.user_id,
        name: actions.name,
        date: new Date(),
        solved: 0,
        try: 0,
      });
      newUser.save(function (err) {});
	  callback(newUser);
    }
	else {
		user = docs[0];
		current_chapter = user.solved;
		 callback(user);
	}
  	});
}
module.exports = {
	current_chapter,
	databaseInit,
	userEnroll
}
