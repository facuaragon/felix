"use client";
import styles from "./login.module.css";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const handleError = () => {
    console.log("Login failed");
  };
  const handleSuccess = (credentialResponse) => {
    console.log("credentialResponse", credentialResponse);
  };
  return (
    <>
      <div className={styles.login}>
        <GoogleLogin onError={handleError} onSuccess={handleSuccess} />
      </div>
    </>
  );
}
