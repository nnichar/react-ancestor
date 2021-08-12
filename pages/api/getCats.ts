// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readData } from "../../db";

export default function handler(req, res) {
  res.status(200).json(readData());
}
