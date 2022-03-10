'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        title: 'Cha EunWoo Album',
        userId: 1,
        imageUrl: "https://www.hellokpop.com/wp-content/uploads/2021/08/Cha-Eun-Woo-660x400.png",
        content: "An album of Cha EunWoo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lee JongSuk Album',
        userId: 1,
        imageUrl: "http://res.heraldm.com/phpwas/restmb_jhidxmake.php?idx=5&simg=201703021417338275249_20170302141709_01.jpg",
        content: "An album of Lee JongSuk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nam JooHyuk Album',
        userId: 1,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/2017_%EB%82%A8%EC%A3%BC%ED%98%81_05.png",
        content: "An album of of Nam JooHyuk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ji ChangWook',
        userId: 2,
        imageUrl: "https://6.viki.io/image/c41f229899864cdc811cf94383018b83.jpeg?s=900x600&e=t",
        content: "An album of Ji ChangWook",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Funny',
        userId: 2,
        imageUrl: "",
        content: "Funny photos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Handsome',
        userId: 3,
        imageUrl: "",
        content: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lee JoonGi Album',
        userId: 3,
        imageUrl: "https://i0.wp.com/wikifamouspeople.com/wp-content/uploads/2018/07/lee-joon-gi.jpg?fit=768%2C640&ssl=1",
        content: "An album of Lee JoonGi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ahn HyoSeop Album',
        userId: 4,
        imageUrl: "https://i.mydramalist.com/qw772c.jpg",
        content: "An album of Ahn HyoSeop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lee MinHo Album',
        userId: 4,
        imageUrl: "https://www.vmcdn.ca/f/files/richmondnews/images/people/korean-actor-lee-min-ho.jpg;w=1080;h=1080;mode=crop",
        content: "An album of Lee MinHo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cute',
        userId: 4,
        imageUrl: "",
        content: "Cutest photos here!",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
