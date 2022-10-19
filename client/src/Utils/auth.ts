import { fetchTrees } from "src/Model/Server";
import { LoginError } from "src/Model/Types";

const api = "https://pzzw3lsaz6.execute-api.eu-west-2.amazonaws.com"
// type LoginResponse = {
//   success: boolean,
//   expiresIn?: string,
//   token?: string,
//   errors?: LoginError[],
// }

type RegisterResponse = {
  success: boolean,
  user?: string,
  errors?: LoginError[],
}

const login = async (username: string, password: string) => {
  const data = { username, password };
  const loginResponse = await fetch(`${api}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())


  if (!loginResponse.success) {
    return loginResponse;
  }
  if (loginResponse.token){
    localStorage.setItem("user", JSON.stringify(loginResponse.token));
    }
  const fetchResponse = await fetchTrees()
  if (fetchResponse.success === false) throw new Error(`Error fetching trees: ${fetchResponse.msg}`)
  return {
    success: true,
    trees: fetchResponse.trees,
    token: loginResponse.token,
  };
};

const register = async (username: string, password: string, confirmPassword: string):Promise<RegisterResponse> => {
  const data = { username, password, confirmPassword };
  return fetch(`${api}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      return res 
    })
}

const logout = () => {
  localStorage.removeItem("user");
}

const getUser = () => {
  return JSON.parse(localStorage.getItem('user') as string);;
}


export { login, register, logout, getUser };
