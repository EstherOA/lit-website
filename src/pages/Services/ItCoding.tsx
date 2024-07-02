import AboutImg from "../../assets/headerImg2.jpg";

import { Typography, Image, Flex, Breadcrumb } from "antd";
import { Layout } from "../../components";

const { Title } = Typography;

const breadcrumbItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "IT Coding and Programming",
    href: "#",
  },
];

const ItCoding = () => {
  return (
    <Layout>
      <Flex vertical style={{ width: "60%", margin: "0 auto" }} gap="middle">
        <Breadcrumb
          separator=">"
          style={{ marginTop: 72, alignSelf: "flex-start" }}
          items={breadcrumbItems}
        />
        <Title style={{ marginTop: 14, marginBottom: 32 }}>
          IT Coding and Programming
        </Title>
        <Image
          src={AboutImg}
          preview={false}
          height="525px"
          width="100%"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            marginTop: 48,
            marginBottom: 240,
            textAlign: "justify",
          }}
        >
          <ul>
            <li>
              <p>
                <strong>Introductory Coding Courses:</strong>
              </p>
              <a href="https://member.lifeistech-lesson.com/" target="_blank">
                Learn Web Design - HTML and CSS
              </a>
            </li>
            <li style={{ margin: "32px 0" }}>
              <p>Advanced Coding and Software Development</p>
            </li>
            <li>
              <p>Coding Competitions and Hackathons</p>
            </li>
          </ul>
        </div>
      </Flex>
    </Layout>
  );
};

export default ItCoding;
