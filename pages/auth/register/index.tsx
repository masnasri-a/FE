import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../component/button";
import Input from "../component/input";
import Logo from "./../../../public/cuate.svg";
import Alert from "../../home/components/alert";
import axios from "axios";
import Router from "next/router";
const Index = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [division, setDivision] = useState("BE");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [alert, setAlert] = useState(<></>);

  const label = [
    {
      label: "Backend",
      value: "BE",
    },
    {
      label: "Frontend",
      value: "FE",
    },
    {
      label: "Quality Assurance",
      value: "QA",
    },
    {
      label: "Media Analyst",
      value: "MA",
    },
  ];
  const handleRegister = async (param: any) => {
    if (
      username == "" ||
      fullname == "" ||
      division == "" ||
      password == "" ||
      confirm == ""
    ) {
      setAlert(<Alert msg={"Please Check Field Again"} />);
      const timer = setTimeout(() => {
        setAlert(<></>);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (password != confirm) {
      setAlert(<Alert msg={"Password Not Match"} />);
      const timer = setTimeout(() => {
        setAlert(<></>);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      await axios
        .post("https://192.168.114.28:9100/auth/register", {
          username: username,
          full_name: fullname,
          division: division,
          password: password,
        })
        .then((resp) => {
          Router.push("/auth/login");
        })
        .catch((err) => {
          setAlert(<Alert msg={"Failed Register"} />);
          const timer = setTimeout(() => {
            setAlert(<></>);
          }, 3000);
          return () => clearTimeout(timer);
        });
    }
  };
  return (
    <div className="login d-flex">
      {alert}
      <div className="left">
        <div className="title">
          <Image
            className="logoAuth"
            layout="responsive"
            src={Logo}
            alt="logo"
          />
          <span>
            Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
            eros. Fusce rutrum, lectus in blandit sagittis, mi tortor.
          </span>
        </div>
      </div>
      <div className="right">
        <div className="formLogin">
          <p className="header">Create Account</p>
          <span className="subHeader">Welcome to IMA Reprocess Platform</span>
          <hr />
          <span className="description">
            Please put your credentials below to access your account.
          </span>
          <div className="input">
            <div>
              Username <span>*</span>
            </div>
            <Input type={"text"} output={setUsername} />
          </div>
          <div className="input">
            <div>
              Full Name <span>*</span>
            </div>
            <Input type={"text"} output={setFullname} />
          </div>
          <div className="input">
            <div>
              Division <span>*</span>
            </div>
            <select
              name="division"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              id="division"
            >
              {label.map((detail: any, index) => {
                return (
                  <option key={index} value={detail.value}>
                    {detail.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input">
            <div>
              Password <span>*</span>
            </div>
            <Input type={"password"} output={setPassword} />
          </div>
          <div className="input">
            <div>
              Password <span>*</span>
            </div>
            <Input type={"password"} output={setConfirm} />
          </div>
          <Button name={"Access my account"} output={handleRegister} />
          <div className="foot">
            <p></p>
            <p>
              Have an account?{" "}
              <Link className="red" href={"/auth/login"}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
