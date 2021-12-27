import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import "antd/dist/antd.css";


function calculategcd(a, b) {
  if (b) {
    return calculategcd(b, a % b);
  } else {
    return Math.abs(a);
  }
}

export default function Calcgcd() {
  const [gcd, setGcd] = useState(null);
  const onFinish = (values) => {
    console.log("Success:", values);
    setGcd(calculategcd(values.firstnumber, values.secondnumber));
  };

  return (
    <div style={{ paddingLeft: "40%", paddingTop: "5%" }}>
      <b>Calculates GCD</b>
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
            label="Number 1"
            name="firstnumber"
            rules={[
              {
                required: true,
                message: "Please input an integer!",
              },
            ]}
          >
            <Input type="number" autoComplete="off" min="0" />
          </Form.Item>

          <Form.Item
            label="Number 2"
            name="secondnumber"
            rules={[
              {
                required: true,
                message: "Please input an integer!",
              },
            ]}
          >
            <Input type="number" autoComplete="off" min="0" />
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
        GCD = <b>{Number(gcd)} </b>
      </Card>
    </div>
  );
}
