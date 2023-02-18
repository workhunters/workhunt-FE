import { Dropdown, Layout, Menu, Space, message, Typography } from "antd";
import { useEffect, useState } from "react";
import Jobs from "./Jobs";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../../redux/user/user";
import DashboardHeader from "./DashboardHeader";

import CredJobs from "./../../samples/cred.json";
import CoupaJobs from "./../../samples/coupa.json";
import EventBriteJobs from "./../../samples/EventBrite.json";
import HingeHealthJobs from "./../../samples/hingehealth.json";
import MeeshoJobs from "./../../samples/Meesho.json";
import NetflixJobs from "./../../samples/Netflix.json";
import ParallelWirelessJobs from "./../../samples/parallelwireless.json";
import PharmeasyJobs from "./../../samples/Pharmeasy.json";
import RazorpayJobs from "./../../samples/razorpay.json";
import SambatvJobs from "./../../samples/sambatv.json";
import SkitAIJobs from "./../../samples/skit.ai.json";
import TalendJobs from "./../../samples/Talend.json";

const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  background: "white",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  minWidth: "256px",
  maxWidth: "256px",
  width: "256px",
};
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation One", "sub1", ""),
  getItem("Navigation One", "sub1", ""),
  getItem("Navigation One", "sub1", ""),
  getItem("Navigation One", "sub1", ""),
  getItem("Navigation One", "sub1", ""),
];

const JobBoard = () => {
  let [cState, setcState] = useState([]);
  let [selected, setSelected] = useState({
    companyname: null,
    url: "",
    jobs: [],
  });

  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let Companies = [
    {
      companyname: "cred",
      url: "https://api.lever.co/v0/postings/cred?mode=json",
      jobs: CredJobs,
    },
    {
      companyname: "razorpay",
      url: "https://boards-api.greenhouse.io/v1/boards/razorpaysoftwareprivatelimited/jobs?content=true",
      jobs: RazorpayJobs,
    },
    {
      companyname: "Meesho",
      url: "https://api.lever.co/v0/postings/meesho/",
      jobs: MeeshoJobs,
    },
    {
      companyname: "Netflix",
      url: "https://api.lever.co/v0/postings/netflix?mode=json",
      jobs: NetflixJobs,
    },
    {
      companyname: "EventBrite",
      url: "https://api.lever.co/v0/postings/eventbrite?mode=json",
      jobs: EventBriteJobs,
    },
    {
      companyname: "Talend",
      url: "https://api.lever.co/v0/postings/talend?mode=json",
      jobs: TalendJobs,
    },
    {
      companyname: "hingehealth",
      url: "https://api.lever.co/v0/postings/hingehealth?mode=json",
      jobs: HingeHealthJobs,
    },
    {
      companyname: "parallelwireless",
      url: "https://api.lever.co/v0/postings/parallelwireless?mode=json",
      jobs: ParallelWirelessJobs,
    },
    {
      companyname: "coupa",
      url: "https://api.lever.co/v0/postings/coupa?mode=json",
      jobs: CoupaJobs,
    },
    {
      companyname: "sambatv",
      url: "https://api.lever.co/v0/postings/sambatv?mode=json",
      jobs: SambatvJobs,
    },
  ];
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  useEffect(() => {
    let itemslist = [];
    Companies.forEach((eachCompany, eachIndex) => {
      itemslist.push(getItem(eachCompany.companyname, eachIndex, ""));
      if (eachIndex === Companies.length - 1) {
        setcState(itemslist);
      }
    });
  }, []);
  return (
    <div>
      <DashboardHeader />
      <Layout style={{ height: "calc(100vh - " + 64 + "px)" }}>
        <Sider style={siderStyle}>
          <Menu
            onClick={(item) => {
              setSelected(Companies[item.key]);
            }}
            style={{
              height: "100%",
            }}
            mode="inline"
            items={cState}
          />
        </Sider>
        <Content style={contentStyle}>
          <Jobs selected={selected} />
        </Content>
      </Layout>
    </div>
  );
};
export default JobBoard;
