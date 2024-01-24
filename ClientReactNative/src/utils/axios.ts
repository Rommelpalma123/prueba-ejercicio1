import axios from 'axios';

const API_URL = 'https://todo-backend-ae4l.onrender.com/todos';

export const postAxios = (data: any) => {
  return new Promise((resolve, reject) =>
    axios
      .post(`${API_URL}/create`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  );
};

export const getAxios = () => {
  return new Promise((res, rej) =>
    axios
      .get(API_URL)
      .then((response) => res(response.data))
      .catch((error) => rej(error))
  );
};

export const deleteAxios = (idTodo: any) => {
  return new Promise((res, rej) =>
    axios
      .delete(`${API_URL}/delete/${idTodo}`)
      .then((response) => res(response))
      .catch((error) => rej(error))
  );
};
