const { where } = require("sequelize");
const {
  models: { users },
} = require("../models");

//INTERNAL
findNextId = () => {
  const user = data?.at(-1);
  if (!user) return 1;
  else return user.id + 1;
};
//

findAll = () => {
  return users.findAll();
};

findFiltered = (firstname) => {
  return users.findAll({
    where: {
      firstname: firstname, // TODO rendre insenssible à la case
    },
  });
};

findById = (id) => {
  /*return users.findOne({
    where: {
      id: id,
    },
  });*/

  return users.findByPk(id);
};

create = (user) => {
  /*return new Promise((res, rej) => {
    const nextId = findNextId();
    user.id = nextId;
    data.push(user);
    res();
  });*/

  return users.create(user);
};

update = (currentUser, user) => {
  /*
  return new Promise((res, rej) => {
    currentUser.firstname = user.firstname;
    currentUser.alias = user.alias;
    res();
  });*/
  currentUser.firstname = user.firstname ?? currentUser.firstname;
  currentUser.alias = user.alias ?? currentUser.alias;

  return currentUser.save();
};

remove = (user) => {
  /*
  return new Promise((res, rej) => {
    data = data.filter((u) => u.id != user.id);
    res();
  });
  */
  return user.destroy();
};

module.exports = {
  findAll,
  findFiltered,
  findById,
  create,
  update,
  remove,
};
