
import { Button, Checkbox, Form, Input, Typography,message } from 'antd';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, updateUser } from '../redux/user/user';
const { Title } = Typography;

const Login = ()=>{

    const s = useSelector(state=>state)
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state=>state.user?.isLoggedIn)

    const navigate = useNavigate()
    
    useEffect(()=>{
        console.log(isLoggedIn)
        if(isLoggedIn === true){
            navigate('/home')
        }
    },[isLoggedIn])
    console.log(s)

    const onFinish = (values) => {
        console.log('Success:', values);

        message.success('Welcome back');
        dispatch(login(values))
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


    return <div style={{margin: '50px auto', width: 720}}>
        <div><Title>Workhunt - Login</Title>
        </div>
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
  </Form>
    </div>
}
export default Login;