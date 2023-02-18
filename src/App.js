import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import SignUp from './pages/signup';
import JobBoard from './pages/JobBoard';
import { Button, Dropdown, Layout, Typography, message} from 'antd';
import Login from './pages/login';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { initializeState, logout } from './redux/user/user';
import ProfilePage from './pages/profile';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
};
function App() {
  const dispatch = useDispatch();

 

  const isLoggedIn = useSelector(state=>state.user?.isLoggedIn)
  useEffect(()=>{
    let is = localStorage.getItem('isLoggedIn');
    let user = localStorage.getItem("user")
    console.log(is)
    if(is === "true" && user !== null){

      dispatch(initializeState({
        user: user,
        isLoggedIn: true
      }))
    }else{
      dispatch(initializeState({
        user: {},
        isLoggedIn: false
      }))
    }
  },[])



  return (
       <div className="App">

       <Layout >
          {isLoggedIn === false ? <Header style={headerStyle} theme="light">
              
              <Title style={{color:'#fff', marginTop:'12px', margin: 'auto 30px'}}>Workhunt</Title> 
        
            </Header> : ''}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />} />
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
