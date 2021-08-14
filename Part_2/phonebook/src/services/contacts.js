import axios from "axios";
const baseUrl = "api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const get = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const remove = (i) => {
  return axios.delete(`${baseUrl}/${i}`);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export default {
  getAll: getAll,
  create: create,
  remove: remove,
  update: update,
  get: get,
};
