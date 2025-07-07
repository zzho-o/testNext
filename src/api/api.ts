import axios, { InternalAxiosRequestConfig } from "axios";
// import * as T from "./dto";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000 * 10,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

const API_TOKEN_AUTH = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000 * 10,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

//   API_TOKEN_AUTH.interceptors.request.use(reqInterceptor);

/**
 * DEFAULT
 */

export const apiDefault = {
  get: async () => {
    const url = "/";
    return API.get(url)
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      });
  },
  getAuth: async () => {
    const url = "/";
    return API_TOKEN_AUTH.get(url)
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      });
  },
};

/**
 * AUTH
 */
export const apiAuth = {
  postAuthReissue: async (
    refresh_token: string,
    config: InternalAxiosRequestConfig
  ) => {
    const url = `/auth/reissue?refresh_token=${refresh_token}`;
    return API.post(url, {}, config)
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      });
  },
  /**
   *
   * @returns
   * @returns
   */
  patchAuthProfile: async (id: string) => {
    const url = "/auth/profile";

    return API_TOKEN_AUTH.patch(url, { id })
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      });
  },
  getAuthRedirect: async () => {
    const url = `/auth/redirect`;

    return API.get(url)
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      });
  },
};
