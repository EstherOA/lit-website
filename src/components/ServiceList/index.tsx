import { Typography, Card, Row, Col } from "antd";
import ServiceImg1 from "../../assets/headerImg3.jpg";
import ServiceImg2 from "../../assets/headerImg4.jpg";
import ServiceImg3 from "../../assets/headerImg2.jpg";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Meta } = Card;

const serviceList = [
  {
    title: "IT Coding and Programming",
    description: "Curate lessons in various tech stacks to teach coding",
    src: ServiceImg1,
    url: "/services/coding",
  },
  {
    title: "IT Boot Camp and Training",
    description: "Organize workshops and training programs",
    src: ServiceImg2,
    url: "/services/bootcamp",
  },
  {
    title: "IT Capacity Building Programs",
    description: "Initiatives to provide skills",
    src: ServiceImg3,
    url: "/services/capacity",
  },
];

const ServiceList = ({
  containerStyle = {},
}: {
  containerStyle?: CSSProperties;
}) => {
  return (
    <div
      style={{
        backgroundColor: "#EFEFEF",
        padding: "100px 200px",
        ...containerStyle,
      }}
    >
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: 56, fontSize: 38 }}
      >
        Services
      </Title>
      <Row gutter={62}>
        {serviceList.map(({ title, description, src, url }, i) => (
          <Col key={i} span={8}>
            <Link to={url}>
              <Card
                style={{ height: 420 }}
                hoverable
                cover={
                  <img
                    alt="example"
                    height={280}
                    src={src}
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <Meta title={title} description={description} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServiceList;
