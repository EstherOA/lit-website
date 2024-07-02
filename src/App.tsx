import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Gallery,
  ItCoding,
  Bootcamp,
  CapacityBuilding,
} from "./pages";
import { ConfigProvider } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services/",
    element: <Outlet />,
    children: [
      {
        index: true,
        path: "",
        element: <Services />,
      },
      {
        path: "coding",
        element: <ItCoding />,
      },
      {
        path: "bootcamp",
        element: <Bootcamp />,
      },
      {
        path: "capacity",
        element: <CapacityBuilding />,
      },
    ],
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              horizontalItemSelectedColor: "#fff",
              itemHoverColor: "#a6a6a6",
              itemColor: "#fff",
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
