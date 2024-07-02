import AboutImg from "../../assets/headerImg2.jpg";

import { Typography, Image, Flex, Breadcrumb } from "antd";
import { Layout } from "../../components";

const { Title, Paragraph } = Typography;

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
    title: "IT Capacity Building Programs",
    href: "#",
  },
];

const CapacityBuilding = () => {
  return (
    <Layout>
      <Flex vertical style={{ width: "60%", margin: "0 auto" }} gap="middle">
        <Breadcrumb
          separator=">"
          style={{ marginTop: 72, alignSelf: "flex-start" }}
          items={breadcrumbItems}
        />
        <Title style={{ marginTop: 14, marginBottom: 32 }}>
          IT Capacity Building Programs
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
                <strong>Digital Literacy Workshops:</strong>
                <span>
                  These workshops aim to provide students with essential digital
                  skills, ensuring they are proficient in using technology
                  effectively and safely. For example, Internet Safety and Cyber
                  Etiquette and Basic Computer Skills Workshop
                </span>
              </p>
            </li>
            <li>
              <p>
                <strong>STEM Integration Programs:</strong>
                <span>
                  These programs integrate IT skills with broader STEM (Science,
                  Technology, Engineering, and Mathematics) education,
                  encouraging interdisciplinary learning and problem-solving.
                  For example, Data Science for Teens
                </span>
              </p>
            </li>
            <li>
              <p>
                <strong>Tech Entrepreneurship Initiatives:</strong>
                <span>
                  These initiatives aim to inspire and equip students with the
                  skills and mindset needed to innovate and create their own
                  tech-based solutions or businesses. For example, Innovation
                  Challenges where junior and senior high students are given a
                  problem to solve using technology. For instance, they might be
                  tasked with developing an app to improve school communication
                  or creating a device to help reduce energy consumption at
                  home. Students work in teams, brainstorm solutions, develop
                  prototypes, and present their ideas, fostering creativity,
                  teamwork, and practical application of IT skills and also
                  Startup Bootcamp for Young Entrepreneurs.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </Flex>
    </Layout>
  );
};

export default CapacityBuilding;
