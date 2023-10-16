import axios from "axios";
import Swal from "sweetalert2";

const URL = process.env.URL_USER || "http://localhost:3000/api/users";
const accessToken = localStorage.getItem("access_token");

const getUser = async (cb) => {
  try {
    const res = await axios({
      method: "GET",
      url: URL,
      headers: {
        access_token: accessToken,
      },
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const loginUser = async (data, cb) => {
  try {
    const res = await axios({
      method: "POST",
      url: URL + "/login",
      data,
    });
    const access_token = res.data.access_token;
    localStorage.setItem("access_token", access_token);
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const registerUser = async (data, cb) => {
  try {
    const res = await axios({
      method: "POST",
      url: URL + "/register",
      data,
    });
    const reslog = await axios({
      method: "POST",
      url: URL + "/login",
      data,
    });
    const access_token = reslog.data.access_token;
    localStorage.setItem("access_token", access_token);
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteUserByAdmin = async (id, cb) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: URL + `/delete/${id}`,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteUserByUser = async (cb) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: URL + `/delete`,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

export {
  getUser,
  loginUser,
  registerUser,
  deleteUserByAdmin,
  deleteUserByUser,
};
