import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid,Input} from "@nextui-org/react";

const imgMyimageexample = require("./assets/signup.png");
const divStyle = {
  width: "100%",
  height: "94vh",
  marginTop: "-50px",
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: "cover",
};


const input2 = {
  marginLeft: "800px",
  marginTop: "20px"

};

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save thr auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history("/");
      props.showAlert("Write Your Note", "success");
    } else props.showAlert("Invalid Credentials", "danger");
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
            color="primary"
            id="name"
            width="350px"
            name="name"
            type="text"
            placeholder="Enter your Name"
            minLength={5}
            required
            onChange={onChange}
            css={{
              marginLeft: 700,
              marginTop: 250
            }} />
          </div>
          <div className="mb-3">
            <Input
            clearable
            color="primary"
            id="email"
            width="350px"
            name="email"
            onChange={onChange}
            type="email"
            placeholder="Enter your email"
            css={{
              marginLeft: 700,
              marginTop: 20
            }}
        />
          </div>
          <div className="mb-3">
          <Input.Password 
            color="primary"
            placeholder="Enter you Password" 
            width="350px"
            type="password"
            name="password" 
            id="password"
            onChange={onChange} 
            minLength={5}
            required
            css={{
              marginLeft: 700,
              marginTop: 20
            }}
            />
          </div>
          <div className="mb-3">
          <Input.Password 
            color="primary"
            placeholder="Confirm Password" 
            width="350px"
            type="password"
            name="cpassword" 
            id="cpassword"
            onChange={onChange} 
            minLength={5}
            required
            css={{
              marginLeft: 700,
              marginTop: 20
            }}
            />
          </div>
          {/* <button type="submit" className="btn btn-primary" style={input1}>
            Submit
          </button> */}
          <Grid.Container gap={2}>
            <Grid>
              <Button type="submit"  shadow flat color="primary" auto style={input2}>
                _Proceed Now_
              </Button>
            </Grid>
          </Grid.Container>
        </form>
      </div>
    </div>
  );
};

export default Signup;
