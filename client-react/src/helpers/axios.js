import axios from "axios";

export const postAxios = (url, data) => {
  return new Promise((res, rej) => {
    axios
      .post(url, data)
      .then((response) => res(response))
      .catch((error) => rej(error));
  });
};

export const getAxios = (url) => {
  return new Promise((res, rej) => {
    axios
      .get(url)
      .then((response) => res(response.data))
      .catch((error) => rej(error));
  });
};

export const deleteAxios = (url) => {
  return new Promise((res, rej) => {
    axios
      .delete(url)
      .then((response) => res(response.data))
      .catch((error) => rej(error));
  });
};
