import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import axios from "axios";
import Historybar from "../components/history";

export default function Calcmodulo() {
  const [mod, setMod] = useState(null);
  const onFinish = (values) => {
    setMod(values.firstvalue % values.secondvalue);
    values.operation = "Mod";
    values.result = values.firstvalue % values.secondvalue;
    axios.post("https://ntheorylab-backend.herokuapp.com/doubleop", values);
  };

  return (
    <div
      style={{
        paddingLeft: "5%",
        paddingTop: "5%",
        display: "grid",
        gridTemplateColumns: " 1fr 1fr",
      }}
    >
      <div >
        <Card style={{ width: "90%" }}>
          <div style={{ paddingBottom: "2%" }}>
            <b>Calculates Mod</b>
            <h3>Input two positive integers</h3>
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
            <Input.Group compact>
              <Form.Item
                name="firstvalue"
                rules={[
                  {
                    required: true,
                    message: "Please input an integer!",
                  },
                ]}
              >
                <Input type="number" autoComplete="off" min="0" />
              </Form.Item>
              <div style={{ paddingRight: "5%" }}>
                <h2>mod</h2>
              </div>
              <Form.Item
                style={{ paddingLeft: "1%" }}
                name="secondvalue"
                rules={[
                  {
                    required: true,
                    message: "Please input an integer!",
                  },
                ]}
              >
                <Input
                  type="number"
                  autoComplete="off"
                  min="0"
                  style={{ paddingTop: "4%" }}
                />
              </Form.Item>
              <div >
              <h2> = {mod}</h2>
              </div>
            </Input.Group>

            <Button style={{ paddingLeft: "0%" }} htmlType="submit">
              Calculate!
            </Button>
          </Form>
        </Card>
      </div>
      <div>
        <Historybar name="Mod" />
      </div>
    </div>
  );
}
