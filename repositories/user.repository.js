let data = require("../mock/userdatas.json");

//INTERNAL
findNextId = () => {
  const user = data?.at(-1);
  if (!user) return 1;
  else return user.id + 1;
};
//

findAll = () => {
  return new Promise((res, rej) => res(data));
};

findFiltered = (firstname) => {
  return new Promise((res, rej) => {
    const result = data.filter(
      (u) => u.firstname.toLowerCase() == firstname?.toLowerCase()
    );
    res(result);
  });
};

findById = (id) => {
  return new Promise((res, rej) => {
    const user = data.find((u) => u.id == id);
    res(user);
  });
};

create = (user) => {
  return new Promise((res, rej) => {
    const nextId = findNextId();
    user.id = nextId;
    data.push(user);
    res();
  });
};

update = (currentUser, user) => {
    return new Promise((res, rej) => {
        currentUser.firstname = user.firstname;
        currentUser.alias = user.alias;
        res();
    })
}

remove = (user) => {
    return new Promise((res, rej) => {
        data = data.filter(u => u.id != user.id)
        res()
    })
}

module.exports = {
  findAll,
  findFiltered,
  findById,
  create,
  update,
  remove,
};
