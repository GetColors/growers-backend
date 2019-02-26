const all = async (request, response) => {
  response.status(200).json({ message: "crops controller get all"});
};

const find = async (request, response) => {
  response.status(200).json({ message: "crops controller find"});
};

const create = async (request, response) => {
  response.status(200).json({ message: "crops controller create"});
};

const remove = async (request, response) => {
  response.status(200).json({ message: "crops controller remove"});
};

const update = async (request, response) => {
  response.status(200).json({ message: "crops controller update"});
};

module.exports = {
  all,
  find,
  create,
  remove,
  update
};