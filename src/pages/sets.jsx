import { React, useState } from "react";
import { Input, Row, Col, Form, Button, Card } from "antd";
import calculatesets from "../algorithms/setCalculation";
import Historybar from "../components/history";
import axios from "axios";

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
    values.operation = operation;
    values.firstvalue = values.elements1
      .split(" ")
      .filter((e) => e !== "")
      .sort()
      .toString();
    values.secondvalue = values.elements2
      .split(" ")
      .filter((e) => e !== "")
      .sort()
      .toString();
    values.result = calculatesets(
      values.elements1
        .split(" ")
        .filter((e) => e !== "")
        .sort(),
      values.elements2
        .split(" ")
        .filter((e) => e !== "")
        .sort(),
      operation,
      []
    ).toString();
    console.log(values.result);

    axios.post("http://localhost:4000/sets", values);
  };

  return (
    <div
      style={{
        paddingLeft: "5%",
        paddingTop: "10%",
        display: "grid",
        gridTemplateColumns: " 1fr 1fr",
      }}
    >
      <div>
        <Card style={{ width: "90%" }}>
        <div style={{ paddingBottom: "2%" }}>
          <b> Set Theory Calculator: </b>
          <h3>Input non duplicate elements in each field</h3>
        </div>
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
              onClick={() => setOperation("Set union")}
            >
              Union
            </Button>
            <Button
              style={{ paddingLeft: "0%" }}
              htmlType="submit"
              onClick={() => setOperation("Set intersection")}
            >
              Intersection
            </Button>
            <Button
              style={{ paddingLeft: "0%" }}
              htmlType="submit"
              onClick={() => setOperation("Set difference")}
            >
              Difference
            </Button>
          </Form>
        </Card>
      </div>
      <div style={{ paddingLeft: "10%", marginBottom: "10%" }}>
        <Historybar name="Set" />
      </div>
    </div>
  );
}
