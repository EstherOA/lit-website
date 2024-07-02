import { Flex } from "antd";
import { Layout, ServiceList } from "../../components";
import ItCoding from "./ItCoding";
import Bootcamp from "./Bootcamp";
import CapacityBuilding from "./CapacityBuilding";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      <Flex vertical>
        <ServiceList containerStyle={{ background: "#fff" }} />
        <Outlet />
      </Flex>
    </Layout>
  );
};

export default Services;
export { ItCoding, Bootcamp, CapacityBuilding };
