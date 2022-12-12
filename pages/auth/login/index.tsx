import Button from "../../components/button";
import Input from "../../components/input";
import Styles from "../../../styles/Style.module.scss";
import Image from "next/image";
import cuate from "../../../public/cuate.svg";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Loading from "../../components/loading";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const HandleSubmit = async (e: any) => {
    const url =
      "https://192.168.114.28:9100/auth/login?username=" +
      username +
      "&password=" +
      password;
    setIsLoading(true);
    await axios
      .get(url)
      .then((resp) => {
        let data = resp.data.data;
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("name", data.username);
        localStorage.setItem("id", data._id);
        localStorage.setItem("access", data.role_detail.access_role);
        router.push("/home");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleUsername = (e: any) => {
    setUsername(e);
  };
  const handlePassword = (e: any) => {
    setPassword(e);
  };

  const handleKeypress = (e: any) => {
    if (e.charCode === 13) {
      HandleSubmit(e);
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="container-fluid">
        <div className="row">
          <div
            className={`col-6 d-flex justify-content-center align-items-center  ${Styles.bgColor}`}
          >
            <div className="imagesLogin">
              <Image src={cuate} alt="Images" />
              <p className={Styles.centerText}>Reporcess Data</p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div
              className={`loginPages ${Styles.centerText}`}
              style={{ width: "450px" }}
            >
              <h3>Sign in</h3>
              <p className={Styles.fontsize14}>
                Welcome to IMA Reprocess Platform
              </p>
              <hr />
              <span className={Styles.fontsize12}>
                Please put your credentials below to access your account.
              </span>
              <div
                className={` row d-flex align-items-center justify-content-between ${Styles.loginInput}`}
              >
                <div className="col-lg-3">
                  <span className={Styles.fontsize14}>
                    User Name<span className={Styles.colorRed}>*</span>
                  </span>
                </div>
                <div className="col-lg-9">
                  <Input
                    onChange={handleUsername}
                    onKeyPress={handleKeypress}
                  />
                </div>
              </div>
              <div
                className={` row d-flex align-items-center justify-content-between ${Styles.loginInput}`}
              >
                <div className="col-lg-3">
                  <span className={Styles.fontsize14}>
                    Password<span className={Styles.colorRed}>*</span>
                  </span>
                </div>
                <div className="col-lg-9">
                  <Input
                    onKeyPress={handleKeypress}
                    onChange={handlePassword}
                    type={"password"}
                  />
                </div>
              </div>
              <div className={Styles.loginInput}>
                <Button onClick={HandleSubmit} title={"Access my account"} />
              </div>
              <div
                className={`d-flex justify-content-between ${Styles.afterButtonLogin} `}
              >
                <Link href="/forgot" style={{ textDecoration: "none" }}>
                  <p className={`${Styles.colorRed} ${Styles.fontsize12}`}>
                    Forgot my password?
                  </p>
                </Link>
                <div className={`d-flex ${Styles.fontsize12}`}>
                  Dont have an account?{"  "}
                  <Link
                    href="/auth/register"
                    style={{ textDecoration: "none" }}
                  >
                    <p className={`${Styles.colorRed} ${Styles.fontsize12}`}>
                      {" "}
                      Sign up
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
