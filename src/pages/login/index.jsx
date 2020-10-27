import React from 'react';
import styles from './index.less';
import { Form, Input, Button } from 'antd';
const login = () =>{
  return (
    <div className={styles.loginBox}>
      <div className={styles.loginCenter}>
        <h1>数据中心</h1>
        <div className={styles.loginForm}>
          <Form name="login">
            <Form.Item name="account" label="账号">
              <Input placeholder="请输入账号"/>
            </Form.Item>
            <Form.Item name="password" label="密码">
              <Input.Password placeholder="请输入密码"/>
            </Form.Item>
            <Button type="primary">确认</Button>
          </Form>
        </div>
      </div>
    </div>  
  )
}
export default login;