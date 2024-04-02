# mkserver
* 현재 리포지터리는 개인적으로 지극히 공부용으로 만들어진 리포지터리입니다.<br>
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