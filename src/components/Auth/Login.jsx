import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useContext} from 'react';
import { useHistory } from "react-router-dom"
import Layout from "../../hoc/Layout/Layout";
import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import {Link} from "react-router-dom"

const Login = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const [firstName, setFirstName] =useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { isLoading, sendRequest } = useHttpClient()
  const [lastName, setLastName] =useState("")
  const [email, setEmail] =useState("")
  const [phone, setPhone] =useState("")
  const [password, setPassword] =useState("")
  const onFinish = async(values) => {
    console.log('Success:', values);
    try {
      const responseData = await sendRequest(
        "https://rcc-rwanda.herokuapp.com/api/v1/login",
        "POST",
        JSON.stringify(values),
        { "Content-Type": "application/json" }
      )
      if (responseData.error) {
        alert(responseData.error)
      } else {
        console.log(responseData)
        auth.login(
          responseData.id,
          responseData.fullName,
          responseData.email,
          responseData.token
        )
        sessionStorage.setItem('rccRwUser',JSON.stringify(responseData))
        history.push("/")
      }
    } catch (error) {}
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    <Layout/>
    <Form 
      className='login-body'
      name="basic"
      labelCol={{
        span: 8,
      }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      wrapperCol={{
        span:8,
      }}                                                                                
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className='login-btn' htmlType="submit"
        // loading={true}
        >
          Login
        </Button>
        <Link className='btn-link' to="signup">&nbsp;Don't have accout? Signup</Link>
      </Form.Item>
      
    </Form>
    </div>
  );
};

export default Login;