import { Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/RegisterStyles.css"



const Login = () => {

    const onfinishHandle = (values) => {
        console.log(values)
    }

  return (
    <div className='form-container'>
        <Form layout  = "vertical" onFinish  = {onfinishHandle} className='register-form'>
            <h3 className='text-center'>Login  Form </h3>
            <Form.Item label  = "Email " name = "email" >
                <Input type = "email" required /> 
            </Form.Item>
            <Form.Item label  = "Password " name = "password" >
                <Input type = "password" required /> 
            </Form.Item>
            <Link to ='/register' className='m-2'> Not have a account </Link>
            <button className='btn btn-primary' type  = "submit">
                Log in  
            </button>
        </Form>
    </div>
  )
}

export default Login
