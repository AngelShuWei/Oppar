'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        title: 'Cha EunWoo Album',
        userId: 1,
        imageUrl: "https://www.hellokpop.com/wp-content/uploads/2021/08/Cha-Eun-Woo-660x400.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lee JongSuk Album',
        userId: 1,
        imageUrl: "http://res.heraldm.com/phpwas/restmb_jhidxmake.php?idx=5&simg=201703021417338275249_20170302141709_01.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nam JooHyuk Album',
        userId: 1,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/2017_%EB%82%A8%EC%A3%BC%ED%98%81_05.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ji ChangWook',
        userId: 2,
        imageUrl: "https://6.viki.io/image/c41f229899864cdc811cf94383018b83.jpeg?s=900x600&e=t",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Funny',
        userId: 2,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pretty',
        userId: 3,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lee JoonGi Album',
        userId: 3,
        imageUrl: "https://i0.wp.com/wikifamouspeople.com/wp-content/uploads/2018/07/lee-joon-gi.jpg?fit=768%2C640&ssl=1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ahn HyoSeop Album',
        userId: 4,
        imageUrl: "https://i.mydramalist.com/qw772c.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lee MinHo Album',
        userId: 4,
        imageUrl: "https://static.wikia.nocookie.net/boysoverflowers/images/8/8b/Lee-Min-ho.jpg/revision/latest?cb=20210815233342",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cute',
        userId: 4,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
