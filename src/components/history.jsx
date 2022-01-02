import React from "react";

import { Table, Card } from "antd";

const columns = [
  {
    title: "Operation",
    dataIndex: "operation",
    width: 150,
  },
  {
    title: "Result",
    dataIndex: "result",
    width: 150,
  },
];

export default function Historybar() {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      operation: `Edward King ${i}`,
      result: 32,
    });
  }
  return (
      <div style={{paddingTop:"20%",  paddingRight: "3%",}}>
    <Card>
      <h1>History</h1>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 300 }}
        style={{ paddingRight: "3%", paddingTop: "2%", borderColor: "#000000" }}
      />
      <button>Refresh</button>
    </Card>
    </div>
  );
}
