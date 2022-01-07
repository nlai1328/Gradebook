import { React, useState } from "react";
import { Button, Form, Input, Card } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import Calcpf from "../algorithms/pfCalculation";
import Historybar from "../components/history";

export default function CalcPfs() {
  const [pfs, setPfs] = useState([]);
  const onFinish = (values) => {
    setPfs(Calcpf(values.firstvalue, []));
    values.operation = "Prime Factorization";
    values.result = Calcpf(values.firstvalue, []).toString();
    axios.post("http://localhost:4000/singleop", values);
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
        <b> Calculates all prime factors: </b>
        <h3>Input a positive integer less than 10000000</h3>
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
            label="Number"
            name="firstvalue"
            rules={[
              {
                required: true,
                message: "Please input an integer!",
              },
            ]}
          >
            <Input type="number" autoComplete="off" min="0" max="10000000" />
          </Form.Item>

          <Button style={{ paddingLeft: "0%" }} htmlType="submit">
            Calculate!
          </Button>
        </Form>
        <div style={{ paddingTop: "10%" }}>
          <Card style={{ width: "50%" }}>
            <b>Prime Factors:</b>{" "}
            <p>
              {pfs.map((element) => (
                <>{element}, </>
              ))}
            </p>
          </Card>
        </div>
      </Card>
      <div style={{ paddingLeft: "5%", width: "80%" }}>
        <Historybar name="Prime" />
      </div>
    </div>
  );
}
