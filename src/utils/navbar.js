import Generic from "../components/Generic";
import Home from "../components/Home";

export const navbar = [
  {
    id: 1,
    element: <Home />,
    mr: true,
    title: "Home",
    path: "/home",
    hidden: false,
  },
  {
    id: 2,
    element: <Generic />,
    mr: true,
    title: "Properties",
    path: "/properties",
    hidden: false,
  },
  {
    id: 3,
    element: <Generic />,
    title: "Contacts",
    path: "/contacts",
    hidden: false,
  },
  {
    id: 3,
    element: <Generic />,
    title: "Singin",
    path: "/signin",
    hidden: true,
  },
  {
    id: 3,
    element: <Generic />,
    title: "Signup",
    path: "/signup",
    hidden: true,
  },
];
