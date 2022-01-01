import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import "antd/dist/antd.css";
import Calcpf from "../algorithms/pfCalculation";

export default function CalcPfs() {
  const [pfs, setPfs] = useState([]);
  const onFinish = (values) => {
    setPfs(Calcpf(values.firstnumber, []));
  };

  return (
    <div style={{ paddingLeft: "10%", paddingTop: "5%" }}>
      <b>Calculates Prime Factors</b>
      <Card style={{ width: "30%", backgroundColor: "#E4E5E8" }}>
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
      <Card style={{ width: "30%", backgroundColor: "#E4E5E8" }}>
      <b>Prime Factors:</b> <p>{pfs.map((element) =>  <>{element}, </>)}</p>
      </Card>
    </div>
  );
}
