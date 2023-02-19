import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import SignUp from "./pages/signup";
import JobBoard from "./pages/JobBoard";
import { Button, Dropdown, Layout, Typography, message } from "antd";
import Login from "./pages/login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeState, logout } from "./redux/user/user";
import ProfilePage from "./pages/profile";
import { addCompanies, addJobs, getJobsByCompanies } from "./redux/jobs/jobs";
import JobBoard2 from "./pages/JobBoard2";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
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
let companies = [
  { name: "Microsoft", id: 1 },
  { name: "Google", id: 2 },
  { name: "Exponent", id: 3 },
  { name: "Experian Information Solutions, Inc.", id: 4 },
  { name: "iHerb", id: 5 },
  { name: "Public Storage", id: 6 },
  { name: "Stingray Direct", id: 7 },
  { name: "Metagenics", id: 8 },
  { name: "Southern California Edison", id: 9 },
  { name: "Ingram Micro", id: 10 },
  { name: "UC San Diego", id: 11 },
  { name: "Harnham", id: 12 },
  { name: "AI Cyber Solutions", id: 13 },
  { name: "SMX", id: 14 },
  { name: "ReedTMS Logistics", id: 15 },
  { name: "USAA", id: 16 },
  { name: "Group W", id: 17 },
  { name: "LMI", id: 18 },
  { name: "190800000 Research Computing", id: 19 },
  { name: "Deloitte", id: 20 },
  { name: "Takeda Pharmaceutical", id: 21 },
  { name: "Sanofi Global (French)", id: 22 },
  { name: "SynergisticIT", id: 23 },
  { name: "Resume Library", id: 24 },
  { name: "Walmart", id: 25 },
  { name: "Johnson & Johnson", id: 26 },
  { name: "Tufts University", id: 27 },
  { name: "FMC", id: 28 },
  { name: "Mass General Brigham", id: 29 },
  { name: "Pfizer", id: 30 },
  { name: "Kaiser Permanente", id: 31 },
  { name: "Cox Communications", id: 32 },
  { name: "WELLS FARGO BANK", id: 33 },
  { name: "Guidehouse", id: 34 },
  { name: "Virtual Company", id: 35 },
  { name: "Delaware North", id: 36 },
  { name: "BCG, Boston Consulting Group", id: 37 },
  { name: "FOCUS Brands LLC", id: 38 },
  { name: "LEIDOS", id: 39 },
  { name: "The Lancet", id: 40 },
  { name: "Niagara Bottling", id: 41 },
  { name: "Trellix", id: 42 },
  { name: "Terray Therapeutics", id: 43 },
  { name: "Charles Schwab", id: 44 },
  { name: "First American Financial Corporation", id: 45 },
  { name: "Motion Recruitment", id: 46 },
  { name: "Publicis Media", id: 47 },
  { name: "Omnicom Media Group", id: 48 },
  { name: "FanDuel", id: 49 },
  { name: "Wayfair", id: 50 },
  { name: "MathWorks", id: 51 },
  { name: "ZOLL Medical Corporation", id: 52 },
  { name: "Interfolio", id: 53 },
  { name: "Meta", id: 54 },
  { name: "TechData Service Company, LLC", id: 55 },
  { name: "Marriott", id: 56 },
  { name: "Northeastern University", id: 57 },
  { name: "ZipRecruiter", id: 58 },
  { name: "Hadrian", id: 59 },
  { name: "Universal Music Group", id: 60 },
  { name: "Techspace Solutions", id: 61 },
  { name: "UnitedHealth Group", id: 62 },
  { name: "BlackBerry", id: 63 },
  { name: "Maven Wave", id: 64 },
  { name: "Bridgestone Americas", id: 65 },
  { name: "Discover Financial Services", id: 66 },
  { name: "United, United Airlines", id: 67 },
  { name: "Authenticx", id: 68 },
  { name: "Purdue University", id: 69 },
  { name: "84.51°", id: 70 },
  { name: "Mars", id: 71 },
  { name: "Booz Allen Hamilton", id: 72 },
  { name: "UNC School of Data Science and Society", id: 73 },
  { name: "Total Wine & More", id: 74 },
  { name: "JP Morgan Chase & Co.", id: 75 },
  { name: "Wake Forest Baptist Health", id: 76 },
  { name: "Randstad USA", id: 77 },
  { name: "Axle Informatics", id: 78 },
  { name: "Global Channel Management,Inc", id: 79 },
  { name: "University of Virginia", id: 80 },
  { name: "General Motors", id: 81 },
  { name: "Somatus", id: 82 },
  { name: "College of Coastal Georgia", id: 83 },
  { name: "University of VA", id: 84 },
  { name: "MetLife", id: 85 },
  { name: "Verizon", id: 86 },
  { name: "Brevan Howard", id: 87 },
  { name: "Bureau of Fiscal Services", id: 88 },
  { name: "Agile Datapro", id: 89 },
  { name: "Expedia Group", id: 90 },
  { name: "ICS Global Soft", id: 91 },
  { name: "Humana", id: 92 },
  { name: "United States Army Futures Command", id: 93 },
  { name: "Meta Platforms, Inc.", id: 94 },
  { name: "Lucid Motors", id: 95 },
  { name: "OKCoin", id: 96 },
  { name: "Snap", id: 97 },
  { name: "Cisco Meraki", id: 98 },
  { name: "Sacramento Area Council of Governments", id: 99 },
  { name: "Wells Fargo", id: 100 },
  { name: "Insitro", id: 101 },
  { name: "Roku", id: 102 },
  { name: "Zepl", id: 103 },
  { name: "AppZen, Inc.", id: 104 },
  { name: "E-SPACE", id: 105 },
  { name: "National University", id: 106 },
  { name: "Cal State University (CSU) San Jose", id: 107 },
  { name: "Faire", id: 108 },
  { name: "Stanford University", id: 109 },
  { name: "PayPal", id: 110 },
  { name: "Vindhya Data Science", id: 111 },
  { name: "Syngenta", id: 112 },
  { name: "National Aeronautics and Space Administration(NASA)", id: 113 },
  { name: "Syneos Health Clinical", id: 114 },
  { name: "deciBel Research", id: 115 },
  { name: "Novelis", id: 116 },
  { name: "BayOne", id: 117 },
  { name: "Anblicks", id: 118 },
  { name: "Torq", id: 119 },
  { name: "GAINSCO Auto Insurance", id: 120 },
  { name: "MNTN", id: 121 },
  { name: "NationsBenefits", id: 122 },
  { name: "RSM US LLP", id: 123 },
  { name: "Inflow", id: 124 },
  { name: "Dell Technologies", id: 125 },
  { name: "Messenger", id: 126 },
  { name: "The Home Depot", id: 127 },
  { name: "Travelers Insurance", id: 128 },
  { name: "The Clorox Company", id: 129 },
  { name: "Cox", id: 130 },
];
function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const intialFetchCompanies = async () => {
    try {
      let response = await fetch("http://workhunt.tech/companies/");
      let data = await response.json();
      dispatch(addCompanies(data));
    } catch (error) {
      console.error(error);
    }
  };
  const intialFetchCJobs = async () => {
    try {
      let response = await fetch("http://workhunt.tech/jobs/");
      let data = await response.json();
      let obj = {};
      for (let ob of data) {
        if (ob.from_ in obj) {
          obj[ob.from_].push(ob);
        } else {
          obj[ob.from_] = [ob];
        }
      }
      dispatch(getJobsByCompanies(obj));
      dispatch(addJobs(data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    let is = localStorage.getItem("isLoggedIn");
    let user = localStorage.getItem("user");

    if (is === "true" && user !== null) {
      intialFetchCompanies();
      intialFetchCJobs();
      dispatch(
        initializeState({
          user: user,
          isLoggedIn: true,
        })
      );
    } else {
      dispatch(
        initializeState({
          user: {},
          isLoggedIn: false,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      <Layout>
        {isLoggedIn === false ? (
          <Header style={headerStyle} theme="light">
            <Title
              style={{ color: "#fff", marginTop: "12px", margin: "auto 30px" }}
            >
              Workhunt
            </Title>
          </Header>
        ) : (
          ""
        )}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<JobBoard />} />
            <Route path="/home/profile" element={<ProfilePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
