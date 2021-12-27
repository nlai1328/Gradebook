import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import "antd/dist/antd.css";





export default function Calcgrade() {
  const [requiredmark, setRequiredmark] = useState(null)
  const onFinish = (values) => {
    console.log("Success:", values);
    const weightpercentage = values.weight / 100;
    console.log(
      (values.desiredGrade - values.currentGrade * (1 - weightpercentage)) /
        weightpercentage
    );
    setRequiredmark((values.desiredGrade - values.currentGrade * (1 - weightpercentage)) /
    weightpercentage)
  };
  
  return (
    
    <div style={{ paddingLeft: "40%", paddingTop: "5%" }}>
        Calculate Desired Grade based on final exam weight and current grade
      <Card style={{ width: "40%", backgroundColor: "#E4E5E8" }}>
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
      </Card>
      <Card style={{ width: "40%", backgroundColor: "#E4E5E8" }}>
          You need a <b>{Number(requiredmark).toFixed(2)} % </b>on your exam
      </Card>
    </div>
  );
}
