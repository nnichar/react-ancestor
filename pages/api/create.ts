import { NextApiRequest, NextApiResponse } from "next";
const append = require("../../db").append;

const CreateHandler = (
  { body: { author, title, url } }: NextApiRequest,
  res: NextApiResponse
) => {
  append({
    author,
    title,
    url,
  });
  res.status(200).send("OK");
};

export default CreateHandler;
