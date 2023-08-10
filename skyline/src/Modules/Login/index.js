import { useState } from "react";
import { Navigate } from "react-router-dom";
import authHeader from "../../Globals/auth-header";
import Topbar from "./../../Shared/Topbar/index";
import { Form, Input } from "antd";
import { login } from "./Services";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import loginBR from "./../../images/loginBR.jpg";
import "./style.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    Object.keys(authHeader()).length !== 0
  );
  const [form] = Form.useForm();

  const handleLogin = (data) => {
    setMessage("");
    setLoading(true);
    login(data)
      .then(() => {
        form.resetFields();
        setLoggedIn(true);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      });
  };

  if (loggedIn) return <Navigate to="/Flight" />;
  const CustomButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#010e30",
    width: "150px",
    padding: "10px",
    borderColor: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#010e30",
    },
  }));
  return (
    <>
      <Topbar />
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundImage: `url(${loginBR})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <main className="container">
            <h1>Sign in</h1>

            <Form form={form} onFinish={handleLogin}>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <Form.Item
                name={"email"}
                style={{ display: "block" }}
                rules={[
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  style={{ width: "30vw", height: "5vh" }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                style={{ display: "block" }}
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  style={{ width: "30vw", height: "5vh" }}
                />
              </Form.Item>
              <Form.Item
                className="login-submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CustomButton type="submit" disabled={loading}>
                  Log In
                </CustomButton>
              </Form.Item>
            </Form>
          </main>
        </div>
      </div>
    </>
  );
}
