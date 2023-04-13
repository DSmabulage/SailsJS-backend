module.exports = {
  friendlyName: "Get users",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    const users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
      },
    ];

    return exits.success(users);
  },
};
