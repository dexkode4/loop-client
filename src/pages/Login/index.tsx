import React from "react";
import styles from "./Login.module.scss";

import AuthLayout from "components/Layout/AuthLayout";
import Input from "components/Input";



  

const Login = () => {
  return (
    <AuthLayout>
      <div className={styles.login}>
        <header className={styles.loginHeader}>Log In</header>
        <p className={styles.loginHeader_sub}>
          Enter your email and password to log into the dashboard
        </p>

        <div className={styles.loginInput}>
          <label>Email</label>
          <Input type="email" />
        </div>
        <div className={styles.loginInput}>
          <label>Password</label>
          <Input isPasswordInput/>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
