import { NextApiRequest, NextApiResponse } from "next";
import { addData } from "../../db";

const CreateHandler = (
  { body: { author, title, url } }: NextApiRequest,
  res: NextApiResponse
) => {
  addData({
    author,
    title,
    url,
  });
  console.log(addData);
  res.status(200).send("OK");
};

export default CreateHandler;
