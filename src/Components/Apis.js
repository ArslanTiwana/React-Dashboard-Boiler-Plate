import axios from "axios";

export function Apis() {
  // const BASEURL = "https://printingpress.up.railway.app/api/";
    // const BASEURL = "http://localhost:3001/api/";
    const BASEURL = "http://51.21.87.15:3001/api/";

  const userToken = localStorage.getItem("token");
  const authAxios = axios.create({
    baseURL: BASEURL,
    headers: {
      access_token: userToken,
    },
  });
  return {
    //Login/Register Apis
    login: (record) => axios.post(BASEURL + "user/login", record),
    register: (record) => axios.post(BASEURL + "user/register", record),

    
    //Users Apis
    getUsers: () => authAxios.get(BASEURL + "user/get"),
    getUserById: (id) => authAxios.get(BASEURL + "user/get/" + id),
    deleteUser: (id) => authAxios.delete(BASEURL + "user/delete/" + id),
    updateUser: (id, record) => authAxios.put(BASEURL + "user/update/" + id, record),
  };
}
