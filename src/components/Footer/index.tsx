/// <reference types="vite-plugin-svgr/client" />
import { Col, Flex, Row, Image, Typography } from "antd";
import Icon from "@ant-design/icons";
import LogoBlack from "../../assets/logo_black.svg?react";
import Africa from "../../assets/africa.png";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Footer = () => {
  return (
    <Row style={{ height: "220px" }}>
      <Col
        span={8}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Link to="/">
          <Icon component={() => <LogoBlack height="70px" width="250px" />} />
        </Link>
        <Text>info@lifeistechafrica.com</Text>
      </Col>
      <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
        <Text style={{ alignSelf: "flex-end" }}>© Life is Tech, Africa</Text>
      </Col>
      <Col span={8}>
        <Flex
          vertical
          justify="space-between"
          align="flex-end"
          style={{ height: "100%" }}
        >
          <Flex justify="flex-end">
            <Text style={{ alignSelf: "flex-end", marginRight: -30 }}>
              Empowering Africa's Future
              <br /> with Life is Tech!
            </Text>
            <Image src={Africa} preview={false} width="100px" />
          </Flex>
          <Flex vertical>
            <Text>Privacy Policy</Text>
            <Text>Terms and Conditions</Text>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default Footer;
