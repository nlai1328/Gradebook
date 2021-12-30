import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import "antd/dist/antd.css";
import calculatedivisors from "../algorithms/divisorCalculation";

export default function Calcdivisors() {
  const [divisors, setDivisors] = useState(null);
  const onFinish = (values) => {
    setDivisors(calculatedivisors(values.firstnumber, []));
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
            label="Number"
            name="firstnumber"
            rules={[
              {
                required: true,
                message: "Please input an integer!",
              },
            ]}
          >
            <Input type="number" autoComplete="off" min="0" max="10000000"/>
          </Form.Item>

          <Button style={{ paddingLeft: "0%" }} htmlType="submit">
            Calculate!
          </Button>
        </Form>
      </Card>
      <Card style={{ width: "40%", backgroundColor: "#E4E5E8" }}>
        Divisors = {divisors} 
      </Card>
    </div>
  );
}
