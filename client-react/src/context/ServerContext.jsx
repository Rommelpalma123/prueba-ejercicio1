import { createContext, useContext } from 'react';
import { getAxios, deleteAxios, postAxios } from '@/helpers/axios';

export const ServerContext = createContext(null);
export const useServer = () => useContext(ServerContext);

class ServerApi {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API;
  }

  async getTodos() {
    return new Promise((resolver, reject) => {
      getAxios(`${this.baseUrl}`)
        .then((res) => resolver(res))
        .catch((err) => reject(err));
    });
  }

  async deleteTodo(id) {
    return new Promise((resolver, reject) => {
      deleteAxios(`${this.baseUrl}/delete/${id}`)
        .then((res) => resolver(res))
        .catch((err) => reject(err));
    });
  }

  async createTodo(data) {
    return new Promise((resolver, reject) => {
      postAxios(`${this.baseUrl}/create`, data)
        .then((res) => resolver(res))
        .catch((err) => reject(err));
    });
  }
}

export const ServerProvider = ({ children }) => {
  return <ServerContext.Provider value={new ServerApi()}>{children}</ServerContext.Provider>;
};
