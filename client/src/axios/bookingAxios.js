import axios from "axios";
import Swal from "sweetalert2";

const URL = process.env.URL_BOOKING || "http://localhost:3000/bookings";

const addBooking = async (data, cb) => {
  try {
    const res = await axios.post({
      method: "POST",
      url: URL + "/create",
      data,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};
