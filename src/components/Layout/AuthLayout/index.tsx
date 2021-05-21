import React from "react";

import illustration from "assets/images/login-illustration.png";
import styles from "./AuthLayout.module.scss";

export interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.Left}>
          {children}
      </div>
      <div className={styles.Right}>
        <img src={illustration} alt="auth background"/>
      </div>
    </div>
  );
}


export default AuthLayout;
