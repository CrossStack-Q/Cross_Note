import React from "react";
import Logo from "./assets/illus.png";
import { Link } from "react-router-dom";
import { Button, Grid, Spacer, Text } from "@nextui-org/react";

export default function rio() {
  const text = "Get Started";
  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1 className="display-1 fw-bold">
              Quickly <br />
              Capture What's <br />
              On Your Mind
            </h1>
            <br />
            <p>
              LiteNote Makes It Easy To Capture A Thought Or List For
              Youeself,And <br /> Share It With Friends And Family.
            </p>
            <Grid.Container gap={2}>
              <Grid>
                  <Link
                  to="/signup"
                  style={{textDecoration: "none"}}
                  >
                <Button
                  shadow
                  color="warning"
                  size="xl"
                >
                  {/* <Text h3 weight="bold">
                    Get Started NOw
                  </Text> */}
                  <Text h3 >{text}</Text>
                </Button>
                </Link>

                <Spacer y={0.5} />
              </Grid>
            </Grid.Container>
          </div>
          <div className="col-md">
            <img src={Logo} alt="" width={"100%"} height={"auto"} />
          </div>
        </div>
        <div className="container"></div>
      </div>
    </>
  );
}
