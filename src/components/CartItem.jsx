import React from "react";
import { Row, Col } from "antd";

const CartItem = ({ count, title }) => {
  return (
    <li>
      <Row gutter={8}>
        <Col className="gutter-row" span={12}>
          <div className="gutter-box">{title}</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="gutter-box">
            <span>Count: {count}</span>
          </div>
        </Col>
      </Row>
    </li>
  );
};

export default CartItem;
