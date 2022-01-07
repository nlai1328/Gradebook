import { React, useState } from "react";

import { Input, Row, Col, Form, Button, Card } from "antd";
import calculatesets from "../algorithms/setCalculation";

const { TextArea } = Input;

export default function SetCalc() {
  const [operation, setOperation] = useState("");
  const [set1, setSet1] = useState([]);
  const [set2, setSet2] = useState([]);

  const onFinish = (values) => {
    setSet1(
      values.elements1
        .split(" ")
        .filter((e) => e !== "")
        .sort()
    );
    setSet2(
      values.elements2
        .split(" ")
        .filter((e) => e !== "")
        .sort()
    );
    console.log(calculatesets(set1, set2, operation, []))
   
  };

  return (
    <div style={{ paddingLeft: "10%", paddingTop: "10%" }}>
      <Form onFinish={onFinish}>
        <Row>
          <Form.Item
            name="elements1"
            rules={[
              {
                required: true,
                message: "Please input elements!",
              },
            ]}
          >
            <Col span={24}>
              <TextArea
                placeholder="Set 1"
                autoSize={{ minRows: 5, maxRows: 5 }}
                pattern=".*\S+.*"
                type="number"
                autoComplete="off"
              />
            </Col>
          </Form.Item>
          <Form.Item
            name="elements2"
            rules={[
              {
                required: true,
                message: "Please input elements!",
              },
            ]}
          >
            <Col span={24}>
              <TextArea
                placeholder="Set 2"
                autoSize={{ minRows: 5, maxRows: 5 }}
                pattern=".*\S+.*"
                type="number"
                autoComplete="off"
              />
            </Col>
          </Form.Item>
          <Col span={6}>
            <Card style={{ height: "84%" }}>
              {calculatesets(set1, set2, operation, []).map((element) => (
                <>{element}, </>
              ))}
            </Card>
          </Col>
        </Row>
        <Button
          style={{ paddingLeft: "0%" }}
          htmlType="submit"
          onClick={() => setOperation("union")}
        >
          Union
        </Button>
        <Button
          style={{ paddingLeft: "0%" }}
          htmlType="submit"
          onClick={() => setOperation("intersection")}
        >
          Intersection
        </Button>
        <Button
          style={{ paddingLeft: "0%" }}
          htmlType="submit"
          onClick={() => setOperation("difference")}
        >
          Difference
        </Button>
      </Form>
    </div>
  );
}
