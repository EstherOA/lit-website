/// <reference types="vite-plugin-svgr/client" />
import {
  Layout,
  Menu,
  Carousel as CarouselContainer,
  Typography,
  Image,
  Button,
  Flex,
  Row,
  Col,
} from "antd";
import Icon, { RightOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer";
import LogoBlack from "../../assets/logo_black.svg?react";
import HeaderImg1 from "../../assets/headerImg1.jpg";
import HeaderImg2 from "../../assets/headerImg2.jpg";
import HeaderImg3 from "../../assets/headerImg3.jpg";
import HeaderImg4 from "../../assets/headerImg4.jpg";
import { ServiceList } from "../../components";
import { Link } from "react-router-dom";

const { Header: HeaderContainer, Footer: FooterContainer, Content } = Layout;
const { Text, Title, Paragraph } = Typography;

const navItems = [
  {
    label: <Link to="/">Home</Link>,
    key: 0,
  },
  {
    label: <Link to="/about">About</Link>,
    key: 1,
  },
  {
    label: <Link to="/services">Services</Link>,
    key: 2,
  },
  {
    label: <Link to="/gallery">Gallery</Link>,
    key: 3,
  },
];

const galleryItems = [
  {
    src: HeaderImg1,
    description:
      "Life is Tech! Africa representatives with HQ executives during visit to Japan",
    span: 7,
  },
  {
    src: HeaderImg2,
    description:
      "Life is Tech! workshop in Ghana at a local school with participating students and staff",
    span: 10,
  },
  {
    src: HeaderImg3,
    description:
      "Life is tech instructor guiding learners through its interactive coding platform",
    span: 7,
  },
];

const headerStyle: React.CSSProperties = {
  top: 20,
  height: 70,
  display: "flex",
  position: "absolute",
  zIndex: 100,
  width: "100%",
  justifyContent: "space-between",
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "transparent",
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  color: "#fff",
  position: "relative",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000",
  background: "linear-gradient(135deg, #8c52ff, #5ce1e6)",
};

const layoutStyle: React.CSSProperties = {
  maxWidth: 1440,
  margin: "0 auto",
  position: "relative",
};

const AboutSection = () => {
  return (
    <Flex style={{ padding: "100px 0", justifyContent: "space-between" }}>
      <Image
        src={HeaderImg2}
        preview={false}
        height="420px"
        width="50%"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          marginRight: "6%",
        }}
      >
        <Title
          level={2}
          style={{ marginBottom: 30, marginTop: 15, fontSize: 38 }}
        >
          About Life is Tech! Africa
        </Title>
        <Text>Welcome to Life is Tech!</Text>
        <Paragraph style={{ marginTop: 50, marginBottom: 75 }}>
          At Life is Tech! Africa we believe that technology can be a powerful
          tool for empowering the next generation. Since our founding in Japan,
          we have been dedicated to providing world-class programming education
          to children and youth around the world.
        </Paragraph>
        <Link to="/about">
          <Button
            style={{
              padding: "25px 20px",
              borderRadius: 0,
              backgroundColor: "#797BE4",
              color: "#fff",
              width: 180,
              textAlign: "center",
            }}
            icon={<RightOutlined />}
            iconPosition="end"
          >
            View More
          </Button>
        </Link>
      </div>
    </Flex>
  );
};

const GallerySection = () => {
  return (
    <div style={{ padding: "100px 20px" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: 56, fontSize: 38 }}
      >
        Gallery
      </Title>
      <Row gutter={32} justify="space-around" align="middle">
        {galleryItems.map(({ src, description, span }, i) => (
          <Col key={i} span={span}>
            <Flex gap="large" vertical>
              <Image src={src} preview={false} />
              <Text>{description}</Text>
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Carousel = () => {
  const carouselImgs = [
    { img: HeaderImg1, position: "center top" },
    { img: HeaderImg2, position: "center" },
    { img: HeaderImg3, position: "top" },
    { img: HeaderImg4, position: "center center" },
  ];

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "500px",
    color: "#fff",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "fill",
    backgroundSize: "cover",
  };

  return (
    <CarouselContainer autoplay arrows adaptiveHeight dotPosition="bottom">
      {carouselImgs.map(({ img, position }, i) => (
        <div key={i}>
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url('${img}')`,
              backgroundPosition: position,
            }}
          >
            <Flex
              vertical
              align="center"
              justify="flex-end"
              style={{ height: "100%", paddingBottom: 56 }}
            >
              <Button
                style={{
                  padding: "25px 20px",
                  borderRadius: 0,
                  backgroundColor: "#F1C21C",
                  color: "#1D1F84",
                  width: 180,
                  fontWeight: "600",
                  textAlign: "center",
                  outline: "none",
                }}
                icon={<RightOutlined />}
                iconPosition="end"
              >
                <Link
                  target="_blank"
                  to="https://member.lifeistech-lesson.com/"
                >
                  Go To Lesson
                </Link>
              </Button>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 16,
                }}
              >
                Experience the fun based learning approach to coding!
              </Text>
            </Flex>
          </div>
        </div>
      ))}
    </CarouselContainer>
  );
};

const Home = () => {
  return (
    <Layout style={layoutStyle} hasSider={false}>
      <HeaderContainer style={headerStyle}>
        <Icon component={() => <LogoBlack height="70px" width="250px" />} />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          items={navItems}
          style={{
            backgroundColor: "transparent",
            height: 50,
            borderBottomWidth: 0,
          }}
        />
      </HeaderContainer>
      <Content style={contentStyle}>
        <Carousel />
        <AboutSection />
        <ServiceList />
        <GallerySection />
      </Content>
      <FooterContainer style={footerStyle}>
        <Footer />
      </FooterContainer>
    </Layout>
  );
};

export default Home;
