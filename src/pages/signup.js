import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;
const SignUp = () => {
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn === true) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const s = useSelector((state) => state);

  const onFinish = async (values) => {
    console.log("Success:", values);
    let response = await fetch("");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(s);
  return (
    <div style={{ margin: "50px auto", width: 720 }}>
      <div>
        <Title>Workhunt - Sign up</Title>
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
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Link to="/login">
        <Button>Already have an account ?</Button>
      </Link>
    </div>
  );
};
export default SignUp;
