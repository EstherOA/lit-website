import AboutImg from "../../assets/headerImg2.jpg";

import { Typography, Image, Flex, Form, Input, Button } from "antd";
import { Layout } from "../../components";

const { Title, Text, Paragraph } = Typography;

const ContactSection = () => {
  return (
    <div>
      <Flex>
        <Title level={3}>Get in touch! |</Title>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 20,
            fontWeight: "bold",
            marginLeft: 4,
          }}
        >
          we are ready to answer all your questions
        </Text>
      </Flex>
      <Form size="large">
        <Flex justify="space-between">
          <Form.Item>
            <Input
              placeholder="Name"
              style={{
                borderRadius: 0,
                border: "none",
                backgroundColor: "#EFEFEF",
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Phone Number"
              style={{
                borderRadius: 0,
                border: "none",
                backgroundColor: "#EFEFEF",
                color: "black",
              }}
            />
          </Form.Item>
        </Flex>
        <Form.Item>
          <Input
            placeholder="Email"
            style={{
              borderRadius: 0,
              border: "none",
              backgroundColor: "#EFEFEF",
              color: "black",
            }}
          />
        </Form.Item>
        <Form.Item>
          <Input.TextArea
            placeholder="Message"
            style={{
              borderRadius: 0,
              border: "none",
              backgroundColor: "#EFEFEF",
              color: "black",
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              padding: "20px 20px",
              borderRadius: 0,
              backgroundColor: "#797BE4",
              color: "#fff",
              width: 200,
              textAlign: "center",
              textTransform: "uppercase",
              marginBottom: 200,
            }}
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      <Flex vertical align="center" gap="middle">
        <Title style={{ marginTop: 84, marginBottom: 32 }}>
          About Life is Tech! Africa
        </Title>
        <Image
          src={AboutImg}
          preview={false}
          height="525px"
          width="50%"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ marginTop: 20, width: "60%", textAlign: "justify" }}>
          <Paragraph>
            At Life is Tech! we believe that technology can be a powerful tool
            for empowering the next generation. Since our founding in Japan, we
            have been dedicated to providing world-class programming education
            to children and youth around the world.
          </Paragraph>
          <Paragraph>
            Our mission is to inspire young minds to become the innovators and
            leaders of tomorrow. We strive to create a fun and interactive
            learning environment that fosters creativity, critical thinking, and
            problem-solving skills.
          </Paragraph>
          <Paragraph>
            With our cutting-edge curriculum and expert instructors, we aim to
            equip students with the skills and knowledge they need to succeed in
            an increasingly tech-driven world. From coding and robotics to
            artificial intelligence and data science, our programs are designed
            to be engaging, challenging, and relevant to the modern world.
          </Paragraph>
          <Paragraph>
            At Life is Tech!, we believe that every child deserves the
            opportunity to reach their full potential. That's why we're
            committed to making our programs accessible to students from all
            backgrounds and skill levels.
          </Paragraph>
          <Paragraph>
            Join us on this exciting journey into the world of tech, and let's
            shape the future together!
          </Paragraph>
        </div>
        <div style={{ width: "60%", textAlign: "justify" }}>
          <Title level={3}>Our Mission</Title>
          <Paragraph>At Life is Tech!, our mission is to:</Paragraph>
          <ul>
            <li>
              Provide high-quality, engaging, and interactive programming
              education that equips children and youth with the skills and
              knowledge to succeed in the digital age.
            </li>
            <li>
              Foster a passion for technology, innovation, and creativity in
              young minds.
            </li>
            <li>
              Support educators and parents in helping students develop
              21st-century skills.
            </li>
            <li>
              Continuously innovate and improve our programs to stay at the
              forefront of technological advancements.
            </li>
            <li>
              Make our programs accessible to students from diverse backgrounds
              and skill levels.
            </li>
            <Paragraph strong style={{ marginTop: 16 }}>
              We are committed to inspiring and empowering the next generation
              to become creative problem-solvers, critical thinkers, and future
              leaders who will drive positive change in the world.
            </Paragraph>
          </ul>
        </div>
        <div style={{ width: "60%", textAlign: "justify" }}>
          <Title level={3}>Our Vision</Title>
          <Paragraph>
            Empowering the next generation to shape the future: one code at a
            time.
          </Paragraph>
          <Paragraph>
            At Life is Tech!, we envision a world where every child has the
            skills, confidence, and creativity to thrive in a rapidly changing
            world. We strive to be the leading Edu-tech company, inspiring young
            minds to become innovators, problem-solvers, and leaders who will
            drive positive change and progress.
          </Paragraph>
          <Paragraph>
            Through our cutting-edge programming education, we aim to:
          </Paragraph>
          <ul>
            <li>Foster a love for learning and technology</li>
            <li>Develop the next generation of digital leaders</li>
            <li>Bridge the gap between education and industry needs</li>
            <li>Create a global community of young innovators</li>
            <li>
              Together, let's unlock the potential of the next generation and
              shape a brighter future for all.
            </li>
          </ul>
        </div>
        <ContactSection />
      </Flex>
    </Layout>
  );
};

export default About;
