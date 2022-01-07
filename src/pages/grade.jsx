import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import axios from "axios";
import Historybar from "../components/history";

export default function Calcgrade() {
  const [requiredmark, setRequiredmark] = useState(null);
  const onFinish = (values) => {
    const weightpercentage = values.weight / 100;
    setRequiredmark(
      (values.desiredGrade - values.currentGrade * (1 - weightpercentage)) /
        weightpercentage
    );
    values.operation = "Grade";
    values.result = Number(
      (values.desiredGrade - values.currentGrade * (1 - weightpercentage)) /
        weightpercentage
    ).toFixed(2);
    axios.post("http://localhost:4000/grade", values);
  };

  return (
    <div
      style={{
        paddingLeft: "5%",
        paddingTop: "5%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "50%" }}>
      <div style={{paddingBottom:"2%"}}>
        <b> Calculate Desired Grade based on final exam weight and current grade: </b>
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Current Grade"
            name="currentGrade"
            rules={[
              {
                required: true,
                message: "Please input current grade!",
              },
            ]}
          >
            <Input type="number" autoComplete="off" min="0" max="100" />
          </Form.Item>

          <Form.Item
            label="Desired Grade"
            name="desiredGrade"
            rules={[
              {
                required: true,
                message: "Please input desired grade!",
              },
            ]}
          >
            <Input type="number" autoComplete="off" min="0" max="100" />
          </Form.Item>
          <Form.Item
            label="Exam Weight %"
            name="weight"
            rules={[
              {
                required: true,
                message: "Please input exam weight!",
              },
            ]}
          >
            <Input type="number" autoComplete="off" min="1" max="100" />
          </Form.Item>
          <Button
            style={{ paddingLeft: "0%" }}
            type="primary"
            htmlType="submit"
          >
            Calculate!
          </Button>
        </Form>
        <Card style={{ width: "50%" }}>
          You need a <b>{Number(requiredmark).toFixed(2)} % </b>on your exam
        </Card>
      </Card>
      <div style={{ paddingLeft: "5%", width: "80%" }}>
        <Historybar name="Grade" />
      </div>
    </div>
  );
}
