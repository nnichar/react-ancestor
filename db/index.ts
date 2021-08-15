import { lorem } from "faker";
import { readdirSync } from "fs";
import { CatPost } from "../pages/types/Cats";
import { writeFileSync } from "fs";
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

let data: CatPost[] = require("./page.json");
const append = (element) => {
  data.push(element);
  writeFileSync("db/page.json", JSON.stringify(data), {});
};

module.exports = {
  data,
  append,
};
