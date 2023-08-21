"use client";
import Login from "../components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function Admin() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
        <h1>admin</h1>
        <Login />
      </GoogleOAuthProvider>
    </>
  );
}
