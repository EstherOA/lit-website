/// <reference types="vite-plugin-svgr/client" />
import { ReactElement } from "react";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import Footer from "../../components/Footer";
import LogoWhite from "../../assets/logo_white.svg?react";
import { Link } from "react-router-dom";

const { Header, Footer: FooterContainer, Content } = Layout;

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

const headerStyle: React.CSSProperties = {
  height: 85,
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#202020",
  color: "#fff",
};

const contentStyle: React.CSSProperties = {};

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

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Link to="/">
          <Icon component={() => <LogoWhite width="250px" />} />
        </Link>
        <Menu
          mode="horizontal"
          items={navItems}
          style={{
            backgroundColor: "transparent",
            height: 50,
            borderBottomWidth: 0,
          }}
        />
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <FooterContainer style={footerStyle}>
        <Footer />
      </FooterContainer>
    </Layout>
  );
};

export default MainLayout;
