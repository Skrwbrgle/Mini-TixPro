import axios from "axios";
import Swal from "sweetalert2";

const URL = process.env.URL_EVENT || "http://localhost:3000/api/events";

const getEvents = async (cb) => {
  try {
    const res = await axios.get({
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
    const res = await axios.get({
      method: "GET",
      url: URL + `/${id}`,
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
