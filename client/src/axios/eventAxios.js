import axios from "axios";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const idEvent = URLSearchParams;
const accessToken = localStorage.getItem("access_token");

const URL = process.env.URL_EVENT || "http://localhost:3000/api/events";

const getEvents = async (cb) => {
  try {
    const res = await axios({
      method: "GET",
      url: URL,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const getDetailEvent = async (id, cb) => {
  try {
    const res = await axios({
      method: "GET",
      url: URL + `/${idEvent}`,
      headers: {
        access_token: accessToken,
      },
    });

    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const addEvent = async (data, cb) => {
  try {
    const res = await axios({
      method: "POST",
      url: URL + "/create",
      data,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const editEvent = async (id, data, cb) => {
  try {
    const res = await axios({
      method: "PUT",
      url: URL + `/edit/${id}`,
      data,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteEvent = async (id, cb) => {
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
export { getEvents, getDetailEvent, addEvent, editEvent, deleteEvent };
