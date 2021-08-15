// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = require("../../db").data;

export default function handler(req, res) {
  console.log("data in getcat", data);
  res.status(200).json(data);
}
