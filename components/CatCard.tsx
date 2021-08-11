import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const CatCard = ({ title, author, url }) => (
  <Card
    hoverable
    style={{ width: 240, margin: "10px" }}
    cover={<img alt="example" src={url} />}
  >
    <Meta title={title} description={author} />
  </Card>
);

export default CatCard;
