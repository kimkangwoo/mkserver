const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      user_number: {
        type: Sequelize.INTEGER, // INT
        allowNull: false, // NOT NULL
        unique: true, // UNIQUE
      },
      user_id: {
        type: Sequelize.INTEGER.UNSIGNED, // INT UNSIGNED
        allowNull: false,
      },
      user_pw: {
        type: Sequelize.BOOLEAN, 
        allowNull: false,
      },
      user_phone: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      user_email: {
        type: Sequelize.STRING(20), // DATA TIME
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      user_birth: {
        type: Sequelize.DATE, // DATA TIME
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize, // static initiate 메서드와 연결되는 옵션 db.sequelize 객체를 넣어야 한다.
      timestamps: false, // 각각 로우가 생성 및 수정 시 시간이 자동으로 입력
      underscored: false, // 시퀄라이즈는 기본적으로 테이블명과 컬럼명을 캐멀 케이스로 만든다. 이를 스네이크 케이스로 바꾸는 옵션
      modelName: 'User', // 모델 이름 설정
      tableName: 'user_table', // 실제 DB 테이블 이름
      paranoid: false, // true면 로우를 삭제할 때 완전히 지워지지 않고 deletedAt에 지운 시각이 기록됩니다.
      charset: 'utf8', // encoding
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {}

  static associate(db){
    db.User.hasMany(db.Commente, {foreignkey : 'commenter', sourceKey : 'id'});
    // hasMany : 1:N 관계(사용자 한명이 댓글 여러 개 작성)
    // belongsTo : 다른 모델에 속하는 모델의 입장에서 사용(외래키 속성?)
    // hasOne : 1:1 관계
  }
};

module.exports = User; // 모듈 return