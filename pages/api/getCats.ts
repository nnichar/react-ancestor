// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readdirSync } from "fs";
import { lorem } from "faker";
import { CatPost } from "../types/Cats";

const authors = [
  "Alice",
  "Bob",
  "Charlie",
  "Bob",
  "Dave",
  "Alice",
  "Bob",
  "Charlie",
];

const { sentence } = lorem;
const data: CatPost[] = readdirSync("public/assets/cats").map(
  (fileName, index) => {
    return {
      author: authors[index],
      title: sentence(),
      url: `/assets/cats/${fileName}`,
    };
  }
);
export default function handler(req, res) {
  res.status(200).json(data);
}