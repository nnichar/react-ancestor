import React, { useState } from "react";
import { Input, Row, Col, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { UploadResp } from "./api/upload";
import Layout, { Content } from "antd/lib/layout/layout";

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

  return (
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
        <Row justify="space-around" >
          <Col span={8}>Title: </Col>
          <Col span={8}>
            <Input 
              value={currentTitle} 
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
          </Col>
        </Row>
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
        <Row justify="center">
          <Button type="primary">Submit</Button>
        </Row>
      </Col>
    </Row>
  );
};

export default CreatePage;
