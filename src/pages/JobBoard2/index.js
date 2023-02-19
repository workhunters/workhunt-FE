import { Dropdown, Layout, Menu, Space, message, Typography } from "antd";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../../redux/user/user";
import Jobs from "./Jobs";
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
import DashboardHeader from "../JobBoard/DashboardHeader";

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

const JobBoard2 = () => {
  let [cState, setcState] = useState([]);
  let [selected, setSelected] = useState({
    companyname: null,
    url: "",
    jobs: [],
  });

  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const { allCompanies, jobsByCompanies } = useSelector((state) => state.jobs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  useEffect(() => {
    let keys = Object.keys(jobsByCompanies);
    console.log(keys);
    let x = [...keys].map((each, ei) => {
      return getItem(each, ei, "", "", "");
    });
    setcState(x);
  }, [jobsByCompanies]);
  useEffect(() => {
    // setcState()
    setcState(allCompanies);
  }, []);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div>
      <DashboardHeader />
      <Layout style={{ height: "calc(100vh - " + 64 + "px)" }}>
        <Sider style={siderStyle}>
          <Menu
            onClick={(item) => {
              let keys = Object.keys(jobsByCompanies);

              setSelected(keys[item.key]);
            }}
            style={{}}
            mode="inline"
            items={cState}
          />
        </Sider>
        <Content style={contentStyle}>
          {selected.name}
          <Jobs selected={selected} />
        </Content>
      </Layout>
    </div>
  );
};
export default JobBoard2;
