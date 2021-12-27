import { React, useState } from "react";
import "antd/dist/antd.css";
import { Input, Row, Col, Form, Button, Card } from "antd";

const { TextArea } = Input;




export default function SetCalc() {
  const [operation, setOperation] = useState("");
  const [set1, setSet1] = useState([]);
  const [set2, setSet2] = useState([]);
  const [calculate, setCalculate] = useState();
  const onFinish = (values) => {
    setSet1(values.elements1.split(' ').filter(e => e != ''))
    setSet2(values.elements2.split(' ').filter(e => e != ''))
    const setunion = [...new Set([...set1, ...set2])];
    const setintersection = set1.filter(value => set2.includes(value));
    const setdifference = set1.filter(x => !set2.includes(x));
    
    if (operation == "union"){
        setCalculate (<b> {setunion}</b>) 
      }
      else if (operation == "intersection"){
        setCalculate (<b>  {setintersection}</b>) 
      }
      else if (operation == "difference"){
        setCalculate (<b> {setdifference}</b>) 
      }
      else{
          <div></div>
      }

  };
  
  return (
    <div style={{ paddingLeft: "10%", paddingTop: "10%" }}>
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
              />
            </Col>
          </Form.Item>
          <Col span={6}>
            <Card style={{height:"84%"}}>
             {calculate}
            </Card>
            
          </Col>
        </Row>
        <Button
            style={{ paddingLeft: "0%" }}
            type="primary"
            htmlType="submit"
            onClick={() => setOperation("union")}
          >
            Union
          </Button>
          <Button
            style={{ paddingLeft: "0%" }}
            type="primary"
            htmlType="submit"
            onClick={() => setOperation("intersection")}
          >
            Intersection
          </Button>
          <Button
            style={{ paddingLeft: "0%" }}
            type="primary"
            htmlType="submit"
            onClick={() => setOperation("difference")}
          >
            Difference
          </Button>
      </Form>
    </div>
  );
}
