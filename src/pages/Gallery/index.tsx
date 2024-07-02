import { Col, Flex, Image, Row, Typography } from "antd";
import Img1 from "../../assets/headerImg1.jpg";
import Img2 from "../../assets/headerImg2.jpg";
import Img3 from "../../assets/headerImg3.jpg";
import Img4 from "../../assets/headerImg4.jpg";

import { Layout } from "../../components";

const { Title } = Typography;

const Gallery = () => {
  return (
    <Layout>
      <Flex vertical style={{ paddingLeft: 32, paddingRight: 32 }}>
        <Title style={{ marginTop: 84, marginBottom: 32, textAlign: "center" }}>
          Gallery
        </Title>
        <Row gutter={24}>
          <Col span={8}>
            <Image
              src={Img1}
              width="100%"
              style={{ maxHeight: 250, height: 250, objectFit: "cover" }}
            />
          </Col>
          <Col span={8}>
            <Image
              src={Img2}
              width="100%"
              style={{ maxHeight: 250, width: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col span={8}>
            <Image
              src={Img3}
              width="100%"
              style={{ maxHeight: 250, width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 48,
            marginBottom: 240,
          }}
        >
          <Col span={24}>
            <Image
              src={Img4}
              width="100%"
              style={{ width: "100%", objectFit: "cover", maxHeight: 300 }}
            />
          </Col>
        </Row>
      </Flex>
    </Layout>
  );
};

export default Gallery;
