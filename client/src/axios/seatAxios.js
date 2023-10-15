import axios from "axios";
import Swal from "sweetalert2";

const URL = process.env.URL_SEAT || "http://localhost:3000/seats";

const addSeat = async (id, data, cb) => {
  try {
    const res = await axios({
      method: "POST",
      url: URL + `/create/${id}`,
      data,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteSeat = async (cb) => {
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

export { addSeat, deleteSeat };
