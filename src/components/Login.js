import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Input } from "@nextui-org/react";

const imgMyimageexample = require("./assets/login.png");
const divStyle = {
  width: "100%",
  height: "93vh",
  marginTop: "-50px",
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: "cover",
};

const input2 = {
  marginLeft: "330px",
  marginTop: "20px",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json)
    if (json.success) {
      //save thr auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Write Your Note", "success");
      history("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="cComponent" style={divStyle}>
      <div className="container">
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Input
            clearable
            color="primary"
            id="email"
            width="350px"
            name="email"
            value={credentials.email}
            onChange={onChange}
            type="email"
            label="Username"
            placeholder="Enter your email"
            css={{
              marginLeft: 230,
              marginTop: 250
            }}
        />
          </div>
          <div className="mb-3">

            <Input.Password 
            label="Password"
            color="primary"
            placeholder="Enter you Password" 
            width="350px"
            type="password"
            name="password" 
            id="password"
            value={credentials.password}
            onChange={onChange} 
            clearable 
            css={{
              marginLeft: 230,
              marginTop: 20
            }}
            />
            
          </div>
          <Grid.Container gap={2}>
            <Grid>
              <Button
                type="submit"
                shadow
                flat
                color="primary"
                auto
                style={input2}
              >
                _Proceed Now_
              </Button>
            </Grid>
          </Grid.Container>
        </form>
      </div>
    </div>
  );
};

export default Login;
