import { NextApiRequest, NextApiResponse } from "next";
const data = require("../../db").data;

const CreateHandler = async (
  { body: { author, title, url } }: NextApiRequest,
  res: NextApiResponse
) => {
  data.push({
    author,
    title,
    url,
  });
  console.log("addData", data);
  res.status(200).send("OK");
};

export default CreateHandler;
