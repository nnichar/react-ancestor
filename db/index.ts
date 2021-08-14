import { lorem } from "faker";
import { readdirSync } from "fs";
import { CatPost } from "../pages/types/Cats";

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
const files = readdirSync("public/assets/cats").filter((name) =>
  /^[0-9]{2}\..*/.test(name)
);

const data: CatPost[] = files.map((fileName, index) => {
  return {
    author: authors[index],
    title: sentence(),
    url: `/assets/cats/${fileName}`,
  };
});

export const readData = () => data;
export const addData = (element: CatPost) => {
  console.log("element", element);
  data.push(element);
  console.log("data", data);
};
