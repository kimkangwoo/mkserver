//require 
var bodyparser = require("body-parser");
const nunjucks = require('nunjucks');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ejs = require("ejs");

// sync DB server 
const { sequelize } = require('./models');
const port = 3001;

// EJS
const app = express();
app.set('view engine', 'ejs');
app.set('views', './view');

// Router
app.use(bodyparser.urlencoded({
  extended: false
}));
app.get("/", (req, res)=>{
  res.render('index'); // ./view/index.ejs
});

// DB sync
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev')); // Morgan 미들웨어를 사용하여 요청에 대한 개발용 로깅 활성화
app.use(express.static(path.join(__dirname, 'public'))); // public 디렉터리에 있는 정적 파일 제공
app.use(express.json()); // JSON 형식의 데이터 파싱
app.use(express.urlencoded({ extended: false })); // 내장 미들웨어인 urlencoded 미들웨어를 사용하여 HTTP 요청의 본문을 파싱할 때 URL-encoded 데이터를 파싱합니다. extended 옵션은 중첩된 객체를 허용할지 여부를 나타냅니다.

// 404 처리
app.use((req, res, next) => { // next는 현재 미들웨어 함수가 요청을 처리한 후, 다음 미들웨어 함수로 제어를 전달하기 위해 호출되는 함수
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  // 에러 메시지를 res.locals에 저장하여 템플릿 엔진(예: Pug, EJS)에서 사용할 수 있도록 합니다.
  res.locals.message = err.message;

  // 개발 환경에서는 전체 에러 정보를 res.locals.error에 저장하고, 프로덕션 환경에서는 간단한 에러 메시지만 저장합니다.
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};

  // 에러 객체에 status가 있으면 해당 상태 코드를 사용하고, 그렇지 않으면 기본적으로 500(Internal Server Error) 상태 코드를 사용합니다.
  res.status(err.status || 500);

  // 'error' 템플릿을 렌더링하여 클라이언트에게 에러 페이지를 보여줍니다.
  res.render('error');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});