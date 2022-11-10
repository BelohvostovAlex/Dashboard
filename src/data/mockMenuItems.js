import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

export const menuItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlined />,
  },
  {
    title: "Contacts Info",
    to: "/contacts",
    icon: <ContactsOutlined />,
  },
  {
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlined />,
  },
  {
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlined />,
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlined />,
  },
  {
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlined />,
  },
  {
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlined />,
  },
  {
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlineOutlined />,
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlined />,
  },
  {
    title: "Geography Chart",
    to: "/geography",
    icon: <MapOutlined />,
  },
];
