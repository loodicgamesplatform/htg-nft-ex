import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";

import Checkbox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import styles from "../../styles/Home.module.css";

import { useRouter} from "next/router";
import { useDispatch ,useSelector } from "react-redux";
import { signUp } from "../../actions/userActions.js";

const index = ({  }) => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const userState = useSelector((state) => state.user)
  const {error} = userState

  const router = useRouter()
  const [form, setForm] = useState(initialFormData);
  const [login,setLogin] = useState(true)
  const dispatch = useDispatch();

  return (
    <div className={styles.container} style={{ height: "100%", width: "100%" }}>
      <Container>
        <Row>
          <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              className={styles.purplebig}
              style={{
                height: 600,

                backgroundColor: "#FECE00",
                borderRadius: 10,
                marginTop: 135,
                textAlign: "center",
              }}
            >
              WELCOME TO LOODIC GAMES PLATFORM
            </div>
          </Col>

          <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              style={{
                marginTop: 100,
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <a href="/" style={{ color: "inherit" }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      border: "3px solid #FFFFFC",
                      borderRadius: 5,
                      textAlign: "center",

                      fontWeight: 700,
                    }}
                  >
                    X
                  </div>
                </a>
              </div>

              <Input
                title="E-mail"
                placeholder="Email Address"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              ></Input>
              <Input title="Password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })}></Input>
              <Input title="Confirm Password" placeholder="Password" onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}></Input>
              <Input
                title="Username"
                placeholder="Other players see this name in the game"
                subtitle="You can change this at a later point."
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              ></Input>
              <Input
                title="Referral Code (optional)"
                placeholder="ex: XXXX-XXXX"
                subtitle="This would have been given to you by another players."
              ></Input>
              <Checkbox desc="I accept the Terms of Service and Privacy Policy"></Checkbox>
              <Checkbox desc="I want exclusive items and stay up to date with the latest news, releases, and events"></Checkbox>

           
                <div
                onClick={(e) => {
                  e.preventDefault()
                  if(!login){
                    dispatch(signUp(form,router))
                    console.log(form)
                  }
                }}
                  style={{
                    width: "100%",
                    display: "flex",
                    marginTop: 20,
                    justifyContent: "center",
                    textAlign: "center",

                    borderRadius: 10,
                    height: 50,
                    border: "5px solid #FECE00",
                    backgroundColor: "#FECE0066",
                    marginBottom: 50,
                  }}
                >
                  <div className={styles.votesmenutitle}>Sign Up</div>
                </div>
            
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;
