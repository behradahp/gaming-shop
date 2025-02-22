import { AuthURL } from "../constants/api.Urls";
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

export const UserLogin = async (data: LoginData) => {
  let success = false;

  let tokens = {
    access: "",
    refresh: "",
  };

  await axios(AuthURL.Login, {
    method: "POST",
    data: data,
  })
    .then((res) => res.data)
    .then((data) => {
      tokens = { access: data.access_token, refresh: data.refresh_token };
      success = true;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokens.access}`;
    })
    .catch(() => {
      success = false;
    });

  if (success) {
    let output = null;

    await axios(AuthURL.Profile, {
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => {
        output = {
          ...tokens,
          ...data,
        };
      })
      .catch(() => {
        output = null;
      });

    return output;
  }

  return null;
};

interface RegisterData {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export const UserRegister = async (data: RegisterData) => {
  let success = false;
  await axios(AuthURL.Register, { method: "POST", data: data }).then((res) => {
    if (res.statusText === "Created") success = true;
  });

  return success;
};
