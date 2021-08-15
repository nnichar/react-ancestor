import { NextApiRequest, NextApiResponse } from "next";
const append = require("../../db").append;

const CreateHandler = async (
  { body: { author, title, url } }: NextApiRequest,
  res: NextApiResponse
) => {
  append({
    author,
    title,
    url,
  });
  console.log("data in create", data);
  res.status(200).send("OK");
};

export default CreateHandler;
