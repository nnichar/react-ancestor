import React from "react";
import { NextPage } from "next";
import { CatPost } from "./types/Cats";
import Link from "next/link";
import { Table, Row, Col, Button} from 'antd';
import { HomeOutlined } from '@ant-design/icons';

interface StatProps {
  posts: CatPost[];
}

const Stat: NextPage<StatProps> = ({ posts }) => {
      
    const accumulatedData = posts.reduce(
      (prevAcc, {author}) => ({
        ...prevAcc,
        [author]: author in prevAcc ? prevAcc[author] +1 : 1,
      }),
      {}
    );
      
    const data = Object.entries(accumulatedData).map(
      ([author, number], index) =>({
          key: index,
          name: author,
          number,

      })
    );

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: ' The number of images',
            dataIndex: 'number',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.number - b.number, 
        },
    ]

    return (
      <div>
            <br /><br />
            <Table columns={columns} dataSource={data} />

            <Row justify="center">
                <Col >
                    <Link href="/" passHref>
                        <Button type="primary" size="large" shape="round" icon={<HomeOutlined/> }> 
                            Back to Home Page 
                        </Button>
                    </Link>
                </Col>
            </Row>   
      </div>
    );
  }
  
  Stat.getInitialProps = async ({ req }) : Promise<StatProps> => {
    let host = "";
    if (req != undefined) {
      const {
        headers: { host: hostHeader },
      } = req;
      host = hostHeader;
    } else {
      host = "localhost:3000";
    }
    const res = await fetch(`http://${host}/api/getCats`);
    return { posts: await res.json() };
};

export default Stat;