import axios from "axios";
import Swal from "sweetalert2";

const URL = process.env.URL_EVENT || "http://localhost:3000/api/events";

const getEvents = async (cb) => {
  try {
    const res = await axios.get(URL);
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

export { getEvents };
