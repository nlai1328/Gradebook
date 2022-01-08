import React from "react";
import { Card } from "antd";

export default function Home() {
  return (
    <div style={{ width: "50%", paddingTop: "10%", paddingLeft: "5%" }}>
      <Card>
        <h1>Welcome to NTheorylab!</h1>
        <p>
          Here is a collection of online calculators designed for calculations
          in number theory{" "}
        </p>
        <p>Use the sidebar navigator to access different pages</p>
      </Card>
    </div>
  );
}
