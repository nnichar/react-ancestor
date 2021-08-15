import React, { useState } from "react";
import { Input, Row, Col, Upload, Button } from "antd";
import { UploadOutlined, HomeOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { UploadResp } from "./api/upload";
import Link from "next/link";
import Layout, { Content } from "antd/lib/layout/layout";
import axios from "axios";

const CreatePage = () => {
  const [currentName, setCurrentName] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [uploadedFile, setUploadedFile] = useState<UploadFile[]>(null);

  const onUploadStatusChange = ({
    file: { status, response },
    fileList,
  }: UploadChangeParam<UploadFile<UploadResp>>) => {
    switch (status) {
      case "done":
        const { url, filename } = response;
        setUploadedFile([
          {
            uid: "-1",
            status: "success",
            name: filename,
            url,
          },
        ]);
        break;

      default:
        setUploadedFile(fileList);
        break;
    }
  };

  const handleSubmit = async () => {
    console.log("currentName", currentName);
    console.log("currentTitle", currentTitle);
    console.log("uploadedFile", uploadedFile);
    const result = await axios.post(`http://localhost:3000/api/create`,
    
     {
        author: currentName,
        title: currentTitle,
        url: uploadedFile[0].url,
    });
    console.log("result", result);

  }

  return (
    <div>
      <Row justify="center" style={{ marginTop: "10em" }}>
        <Col span={12}>
          <Row justify="space-around">
            <Col span={8}>Your name: </Col>
            <Col span={8}>
              <Input
                value={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row justify="space-around" >
            <Col span={8}>Title: </Col>
            <Col span={8}>
              <Input 
                value={currentTitle} 
                onChange={(e) => setCurrentTitle(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row justify="space-around">
            <Col span={8}>CAT image (only) </Col>
            <Col span={8}>
              <Upload
                action="/api/upload"
                maxCount={1}
                onChange={onUploadStatusChange}
                fileList={uploadedFile}
              >
                <Button icon={<UploadOutlined />}>upload image</Button>
              </Upload>
            </Col>
          </Row>
          <br />
          <Row justify="center">
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
          </Row>
        </Col>
      </Row>
      <br /><br />
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
};

export default CreatePage;