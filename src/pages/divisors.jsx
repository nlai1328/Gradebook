import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import "antd/dist/antd.css";
import calculatedivisors from "../algorithms/divisorCalculation";

export default function Calcdivisors() {
  const [divisors, setDivisors] = useState([]);
  const onFinish = (values) => {
    setDivisors(calculatedivisors(values.firstnumber, []));
  };

  return (
    <div style={{ paddingLeft: "10%", paddingTop: "10%" }}>
      <b>Calculates Positive Divisors</b>
      <Card style={{ width: "50%"}}>
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
      <Card style={{ width: "50%"}}>
        <b>Divisors:</b> <p>{divisors.map((element) =>  <>{element}, </>)}</p>
      </Card>
    </div>
  );
}
