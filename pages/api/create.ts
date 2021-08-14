import { NextApiRequest, NextApiResponse } from "next";
import { addData } from "../../db";

const CreateHandler = async (
  { body: { author, title, url } }: NextApiRequest,
  res: NextApiResponse
) => {
  await addData({
    author,
    title,
    url,
  });
  console.log("addData", addData);
  res.status(200).send("OK");
};

export default CreateHandler;
