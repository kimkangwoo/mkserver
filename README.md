# mkserver
* 현재 리포지터리는 개인적으로 지극히 공부용으로 만들어진 리포지터리입니다.
[참고 도서](https://thebook.io/080334/0350/)<br>
[참고 사이트](https://velog.io/@hsg5533/Node.js-express-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC%EC%99%80-MySQL%EC%9D%84-%EC%97%B0%EB%8F%99%ED%95%98%EC%97%AC-CRUD-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)<br>
![img](https://cdn-icons-png.flaticon.com/128/1831/1831930.png)

# Node.js
![node.js](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png)
|특징|설명|
|:--:|:--:|
|비동기 I/O| Node.js는 비동기식 I/O 처리를 지원하여 여러 요청을 효율적으로 처리할 수 있습니다.|
|이벤트 주도|이벤트 기반 모델을 사용하여 비동기식 이벤트를 처리하고, 콜백 함수를 통해 이벤트를 처리합니다.|
|단일 스레드|Node.js는 단일 스레드 이벤트 루프를 사용하며, 이를 통해 많은 연결을 처리할 수 있습니다.|
|모듈 시스템|Node.js는 CommonJS나 ES6 모듈 시스템을 사용하여 모듈화된 코드를 쉽게 관리할 수 있습니다.|
|크로스 플랫폼| Windows, macOS, Linux 등 다양한 플랫폼에서 동작하며, 크로스 플랫폼 개발을 지원합니다.|

* 라우터 : 쉽게 말하면 연결장치, 클라이언트의 요청 경로를 보고 이 요청을 처리할 수 있는 곳으로 기능을 전달해 주는 역할

### async / await
* async 함수 : 함수 앞에 async 키워드를 붙여서 정의합니다. 해당 함수는 항상 Promise를 반환하게 됩니다.
* await : async 함수 내에서 await 키워드를 사용하여 다른 비동기 함수의 처리를 기다릴 수 있습니다.

```javascript
async function process() {
  const result = await fetchData(); // fetchData 함수의 처리가 완료되면 그 결과를 result에 저장합니다.
  console.log(result);
}
```
### Promise 
* JS에서 비동기를 위한 객체

|종류||
|:--:|:--:|
|대기(pending)|초기 상태, 프로미스가 성공하거나 실패할 때까지의 상태|
|이행(fulfilled)|비동기 작업이 성공적으로 완료되어 프로미스가 이행된 상태|
|거부(rejected)|비동기 작업이 실패하여 프로미스가 거부된 상태로 실패 시 에러 발생|

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  if (작업 성공) {
    resolve(결과); // 작업이 성공했을 때 resolve를 호출하여 프로미스를 이행 상태로 만듭니다.
  } else {
    reject(에러); // 작업이 실패했을 때 reject를 호출하여 프로미스를 거부 상태로 만듭니다.
  }
});

myPromise
  .then((result) => {
    // 프로미스가 이행됐을 때의 처리
    console.log(result);
  })
  .catch((error) => {
    // 프로미스가 거부됐을 때의 처리
    console.error(error);
  })
  .finally(() => {
    // 프로미스의 상태와 상관없이 항상 실행되는 코드
    console.log('작업 완료');
  });
```

# DataBase 
### DataBase
* 관련성을 가지며 중복이 없는 데이터들의 집합
* 서버의 HDD or SSD 등의 저장 매체에 데이터 저장
* 서버 종료 여부와 상관 없이 데이터를 계속 사용 가능
* 여러 사람이 동시에 접근 가능
* 개인별 권한 부여 가능

### DBMS(DataBase Management Service)
* 데이터베이스를 관리하는 시스템
* 대규모의 다양한 종류의 데이터를 수집, 저장, 처리, 분석하고 관리하기 위한 시스템

### No SQL DBMS 
<img href="https://www.mongodb.com/ko-kr" src="https://img.shields.io/badge/mongoDB-47A248?style=flat-flat-square&logo=MongoDB&logoColor=white"/><img src="https://img.shields.io/badge/Redis-DC382D?style=flat-flat-square&logo=Redis&logoColor=white"/>
<br>

* 전통적인 관계형 데이터베이스 시스템과는 다른 데이터 모델과 기능을 제공하는 데이터베이스 시스템을 의미한다.
* NoSQL DBMS는 유연한 데이터 모델을 사용하여 대용량의 분산 데이터를 처리하고 저장할 수 있다는 특징이 있다.

### Relational DataBase (관계형 데이터 베이스)
<img href="https://dev.mysql.com/downloads/installer/" src="https://img.shields.io/badge/mysql-4479A1?style=flat-flat-square&logo=mysql&logoColor=white"/><img href="https://www.oracle.com/kr/" src="https://img.shields.io/badge/Oracle-F80000?style=flat-flat-square&logo=Oracle&logoColor=white"/> <img href="https://learn.microsoft.com/ko-kr/sql/relational-databases/databases/msdb-database?view=sql-server-ver16" src="https://img.shields.io/badge/MS SQL-CC2927?style=flat-flat-square&logo=Microsoft SQL Server&logoColor=white"/> <img href="" src="https://img.shields.io/badge/SQLite-003B57?style=flat-flat-square&logo=SQLite&logoColor=white"/> 
<br>

* 데이터를 테이블 형식으로 저장하고, 테이블 간의 관계를 정의하여 데이터를 구조화하는 데이터베이스 시스템
* SQL(Structured Query Language)을 사용하여 데이터를 관리하고 쿼리하는 데에 주로 활용된다.

# SQL
### DDL(Data Definition Language)
<table>
<tr>
    <td>명령어</td>
    <td>설명</td>
</tr>
<tr>
    <td>CREATE</td>
    <td>데이터베이스, 테이블등을 생성</td>
</tr>
<tr>
    <td>ALTER</td>
    <td>테이블 수정</td>
</tr>
<tr>
    <td>DROP</td>
    <td>데이터베이스, 테이블 삭제</td>
</tr>
<tr>
    <td>TRUNCATE</td>
    <td>테이블 초기화</td>
</tr>
</table>

### DML(Data Manipulation Language)
<table>
<tr>
    <td>명령어</td>
    <td>설명</td>
</tr>
<tr>
    <td>SELECT</td>
    <td>데이터 조회</td>
</tr>
<tr>
    <td>INSERT</td>
    <td>데이터 삽입</td>
</tr>
<tr>
    <td>UPDATE</td>
    <td>데이터 수정</td>
</tr>
<tr>
    <td>DELETE</td>
    <td>데이터 삭제</td>
</tr>
</table>

### DCL(Database Control Language)
<table>
<tr>
    <td>명령어</td>
    <td>설명</td>
</tr>
<tr>
    <td>GRANT</td>
    <td>특정 DB 사용자에게 특정 작업에대한 수행 권한 부여</td>
</tr>
<tr>
    <td>REVOKE</td>
    <td>특정 DB 사용자에게 특정 작업에 대한 수행 권한을 박탈, 회수</td>
</tr>
<tr>
    <td>COMMIT</td>
    <td>트랜잭션의 작업을 저장</td>
</tr>
<tr>
    <td>ROLLBACK</td>
    <td>트랜잭션의 작업을 취소, 원래대로 복구</td>
</tr>
</table>

### 컬럼 옵션 
<table>
<tr>
    <td>INT</td>
    <td>정수 자료형</td>
</tr>
<tr>
    <td>VARCHAR</td>
    <td>문자열 자료형, 가변 길이</td>
</tr>
<tr>
    <td>TEXT</td>
    <td>긴 문자열은 TEXT로 별도 저장</td>
</tr>
<tr>
    <td>DATETIME</td>
    <td>날짜 자료형 저장</td>
</tr>
<tr>
    <td>TINYINT</td>
    <td>-128~127까지 저장 + Boolean값도 가능</td>
</tr>
</table>

#### 컬럼 추가 옵션
<table>
<tr>
    <td>NOT NULL</td>
    <td>빈 값은 받지 않는다.</td>
</tr>
<tr>
    <td>AUTO_INCREMENT</td>
    <td>숫자 자료형인 경우 다음 로우가 저장될 때 자동으로 1증가</td>
</tr>
<tr>
    <td>UNSIGNED</td>
    <td>0과 양수만 허용</td>
</tr>
<tr>
    <td>ZEROFILL</td>
    <td>숫자의 자리 수가 고정된 경우 빈 자리에 0을 넣는다.</td>
</tr>
<tr>
    <td>DEFAULT now()</td>
    <td>날짜 컬럼의 기본값을 현재 시간으로</td>
</tr>
</table>

## Primary Key
* id가 테이블에서 로우를 특정할 수 있게 해주는 고유한 값

## Unique Index [이름] (name ASC)
* 해당 컬럼(name)이 고유해야 함을 나타내는 옵션
* ASC : 오름차순
* DESC : 내림차순

## foreign key(외래키)
> 예시 : FOREIGN KEY (commenter) REFERENCES nodejs.users(id)
* `FOREIGN KEY (컬러명) REFERENCES 데이터베이스.테이블명(컬럼)`

> ON DELETE CASCADE : 부모 row 삭제 시 자식 row도 삭제 
> ON UPDATE CASCADE : 부모 row 변경 시 자식 row도 변경
* CASCADE : 부모 테이블의 row에 `DELETE` 또는 `UPDATE` 명령어를 적용할 때, 자동적으로 자식 테이블의 매치되는 row에도 똑같이 명령어를 반영하는 것

# 시퀄라이즈 ORM
[>>>시퀄라이즈 예제<<<](https://github.com/zerocho/nodejs-book/tree/master/ch7/7.6/learn-sequelize)
* ORM(Object Relational Mapping) : 객체와 데이터를 매핑
* MySQL 외에도 다른 RDB와도 호환
* JS 문법으로 DB 조작 가능

### 1. 라이브러리 설치
```
> npm i express morgan nunjucks sequelize sequelize-cli mysql2
> npm i -D nodemon
```
###### +시퀄라이즈 구조 생성
```
> npx sequelize init
```

<table>
<tr>
    <td>nunjucks</td>
    <td><li>js 템플릿 엔진</li> <li>웹 애플리케이션에서 동적으로 HTML을 생성하는 데 사용</li> </td>
</tr>
<tr>
    <td>sequelize</td>
    <td>js, TypeScript로 DB를 쉽게 다루도록 도와줌</td>
</tr>
<tr>
    <td>sequelize-cli</td>
    <td>Sequelize 프레임워크와 관련된 명령줄 도구</td>
</tr>
<tr>
    <td>mysql2</td>
    <td>Node.js를 위한 MySQL 데이터베이스 드라이버</td>
</tr>
</table>

