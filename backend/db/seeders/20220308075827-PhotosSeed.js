'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        title: "Cha Eun Woo",
        userId: 1,
        imageUrl: "https://wiki.d-addicts.com/images/thumb/9/9b/Cha_Eun_Woo.jpg/291px-Cha_Eun_Woo.jpg",
        content: "Hot Cha Eun Woo 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cha Eun Woo 2",
        userId: 2,
        imageUrl: "https://koreajoongangdaily.joins.com/data/photo/2022/02/18/2fa84358-592f-434a-91db-5e931ce71dbd.jpg",
        content: "Hot Cha Eun Woo 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cha Eun Woo 3",
        userId: 3,
        imageUrl: "https://www.hellokpop.com/wp-content/uploads/2021/08/Cha-Eun-Woo-660x400.png",
        content: "Hot Cha Eun Woo 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
