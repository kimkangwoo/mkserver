#### MySQL 파일 위치 이동
```
cd C:\Program Files\MySQL\MySQL Server 8.0\bin
```

#### 접속
```
mysql -h localhost -u root -p
```
* -h : 호스트
* -u : 사용자 
* -p : 비밀번호

### 테이블 이름 변경
```
> REANAME TABLE [old table] TO [new table];

> ALTER TABLE [old table] RENAME [new table];
```
* 둘 중에 하나 사용하면됨

### 테이블 DB 위치 변경
```
RENAME TABLE [old_DB.old table] TO [new_DB.new table];
```
