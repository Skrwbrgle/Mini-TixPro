import axios from "axios";
import Swal from "sweetalert2";

const URL = process.env.URL_PAYMENT || "http://localhost:3000/payments";

const getPayments = async (cb) => {
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

const getDetailPayment = async (id, cb) => {
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

const addPayment = async (id, data, cb) => {
  try {
    const res = await axios.post({
      method: "POST",
      url: URL + `/create/${id}`,
      data,
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

const approvePayment = async (cb) => {
  try {
    const res = await axios.put({
      method: "PUT",
      url: URL + "/approve",
    });
    cb(res.data);
  } catch (e) {
    console.log(e);
  }
};

export { getPayments, getDetailPayment, approvePayment, addPayment };
