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
    title: "IT  Boot Camp and Training",
    href: "#",
  },
];

const Bootcamp = () => {
  return (
    <Layout>
      <Flex vertical style={{ width: "60%", margin: "0 auto" }} gap="middle">
        <Breadcrumb
          separator=">"
          style={{ marginTop: 72, alignSelf: "flex-start" }}
          items={breadcrumbItems}
        />
        <Title style={{ marginTop: 14, marginBottom: 32 }}>
          IT Boot Camp and Training
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
                <strong>Introductory Coding Workshops:</strong>
                <span>
                  These workshops provide students with a foundational
                  understanding of coding and programming concepts, aimed at
                  sparking interest in technology and computer science.
                </span>
              </p>
            </li>
            <li>
              <p>
                <strong>Intensive Coding Bootcamps:</strong>
                <span>
                  These bootcamps are short-term, intensive training programs
                  designed to equip participants with the skills needed to start
                  a career in coding. They typically focus on practical,
                  hands-on learning experiences. For example, Web Development
                  Bootcamp, Hackathons
                </span>
              </p>
            </li>
            <li>
              <p>
                <strong>Tech Exploration Camps:</strong>
                <span>
                  These camps expose students to various fields within
                  technology, allowing them to explore different areas and
                  discover their interests.
                </span>
              </p>
            </li>
            <li>
              <p>
                <strong>Project-Based Learning Programs:</strong>
                <span>
                  These programs involve students in long-term projects that
                  require the application of their IT skills to solve real-world
                  problems, promoting critical thinking and collaboration.
                </span>
              </p>
            </li>
            <li>
              <p>
                <strong>Professional Certification Training:</strong>
                <span>
                  These programs prepare participants for industry-recognized
                  certifications in various IT fields, enhancing their
                  credentials and job market competitiveness.
                </span>
              </p>
            </li>
            <li>
              <p>
                <strong>Corporate IT Training Programs:</strong>
                <span>
                  Customized training programs designed to meet the specific
                  needs of corporate clients, enhancing their employees' IT
                  skills and knowledge
                </span>
              </p>
            </li>
          </ul>
        </div>
      </Flex>
    </Layout>
  );
};

export default Bootcamp;
