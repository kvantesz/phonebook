import axios from "axios";
const baseURL = "http://localhost:3003/api/persons";

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newPerson) => {
  return axios.post(baseURL, newPerson);
};

const edit = (id, newPerson) => {
  return axios.put(`${baseURL}/${id}`, newPerson);
};

const remove = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

export default { getAll: getAll, create: create, edit: edit, remove: remove };
