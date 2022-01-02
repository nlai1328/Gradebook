import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import "antd/dist/antd.css";

export default function Calcmodulo() {
  const [mod, setMod] = useState(null);
  const onFinish = (values) => {
    setMod(values.firstnumber % values.secondnumber);
  };

  return (
    <div style={{ paddingLeft: "10%", paddingTop: "10%" }}>
      <b>Calculates Mod</b>
      <Card style={{ width: "60%"}}>
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
          <Input.Group compact>
            <Form.Item
              
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
            <div >
              <h2>mod</h2>
              </div>
            <Form.Item
              style={{ paddingLeft: "4%" }}
              name="secondnumber"
              rules={[
                {
                  required: true,
                  message: "Please input an integer!",
                },
              ]}
            >
              <Input type="number" autoComplete="off" min="0" style={{ paddingTop: "4%" }}/>
            </Form.Item>
            <h2> = {mod}</h2>
          </Input.Group>
          
          <Button
            style={{ paddingLeft: "0%" }}
           
            htmlType="submit"
          >
            Calculate!
          </Button>
          
        </Form>
      </Card>
    </div>
  );
}
