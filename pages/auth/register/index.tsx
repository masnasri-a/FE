import Button from "../../components/button";
import Input from "../../components/input";
import Styles from "../../../styles/Style.module.scss";
import Image from "next/image";
import cuate from "../../../public/cuate.svg";
import Link from "next/link";

import { Dropdown, DropdownButton } from "react-bootstrap";

const Login = () => {
  return (
    <>
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
              <h3>Create Account</h3>
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
                  <Input />
                </div>
              </div>
              <div
                className={` row d-flex align-items-center justify-content-between ${Styles.loginInput}`}
              >
                <div className="col-lg-3">
                  <span className={Styles.fontsize14}>
                    Full Name<span className={Styles.colorRed}>*</span>
                  </span>
                </div>
                <div className="col-lg-9">
                  <Input />
                </div>
              </div>
              <div
                className={` row d-flex align-items-center justify-content-between ${Styles.loginInput}`}
              >
                <div className="col-lg-3">
                  <span className={Styles.fontsize14}>
                    Full Name<span className={Styles.colorRed}>*</span>
                  </span>
                </div>
                <div className="col-lg-9">
                  <select className={Styles.dropdownMenu}>
                    <option value="BE">BackEnd Developers</option>
                    <option value="FE">FrontEnd Developers</option>
                    <option value="QA">Quality Assurance</option>
                  </select>
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
                  <Input type="password"/>
                </div>
              </div><div
                className={` row d-flex align-items-center justify-content-between ${Styles.loginInput}`}
              >
                <div className="col-lg-3">
                  <span className={Styles.fontsize14}>
                    Confirmation Password<span className={Styles.colorRed}>*</span>
                  </span>
                </div>
                <div className="col-lg-9">
                  <Input type="password"/>
                </div>
              </div>
              <div className={Styles.loginInput}>
                <Button title={"Create my account"} />
              </div>
              <div
                className={`d-flex justify-content-between ${Styles.afterButtonLogin} `}
              >
                <label htmlFor=""></label>
                <div className={`d-flex ${Styles.fontsize12}`}>
                  Have an account?{"  "}
                  <Link href="/auth/login" style={{ textDecoration: "none" }}>
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
