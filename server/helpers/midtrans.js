const midtransClient = require("midtrans-client");

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-Nb1R0x1JOCqBdsao4voyP9Z3",
});

module.exports = snap;
