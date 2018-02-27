import axios from 'axios';

export const getFile = (folder, file) => {
  let url = `/api/v1/files/folder${folder}`;
  if (file) {
    url = `${url}/${file}`;
  }
  return axios.get(url);
};

export const getAllFiles = () => axios.get('/api/v1/files/all');

export const getCodemod = (folder, file) => {
  const url = `/api/v1/files/codemod/folder${folder}/${file}`;
  return axios.get(url);
};
