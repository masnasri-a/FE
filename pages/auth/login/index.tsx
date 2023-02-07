import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Alert from "../../home/components/alert";
import ButtonAuth from "../component/button";
import Input from "../component/input";
import Logo from "./../../../public/cuate.svg";
import { motion } from "framer-motion";
import Router from "next/router";
const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(<></>);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const handleLogin = async (param: any) => {
    console.log(username);
    console.log(password);
    await axios
      .get(
        "https://192.168.114.28:9100/auth/login?username=" +
          username +
          "&password=" +
          password
      )
      .then((resp) => {
        window.localStorage.setItem('data',JSON.stringify(resp.data.data));
        Router.push('/home')
      })
      .catch((err) => {
        setAlert(<Alert msg={"Please check your username and password"} />);
        const timer = setTimeout(() => {
          setAlert(<></>);
        }, 3000);
        return () => clearTimeout(timer);
      });
    // const headers = {
    //     'Activity': 'Meta U2FsdGVkX1+PkfEE1JRwqWJl7Fa9YcH0AdXDbVjJd4uwozoiBqEBdopTwAShRAfg9J6Xw2JmK0E4Syk8/XOv+qQ//1+gjyAG2/mJxdBjwSDaFrL8jUSYh7PTfMKdFsMnKnkNyOvqn9MMC5GodlT/zc+dr9yz1J3V1iFETBxm38imSUzV9ikcDrd8ugM5FlM4o05NXV9FHuk/eNSm77KdqGSbwDEpdiZONTAfY5WwnNXJwfV6ziTAD25+BvU1yFAYmZXp0geO1i3t1uMnX5cfCfVM4H4XO6kEPeoPBJslo9mK01ESKgm3RI4Zf1MQW0KrMTboX588Zx7d80oUtvWkzE2Ihry9yG1vMY4/pxbL2paCPEv6i9kCj3Ftn4u5pl0LQ6TbpUklgIHljR53+GMg3TGeKyJkI3rOi5am9feHZvm0JiHH9JXp9ntZpa7jiIEhJKno+W0x9SzMuQnmQBUIpZpj8iSS0VPdNUe2SvNmrpGbG/QYUPsrPP4bEheVn82Xjey4LKxclbHNE27Li3Xkprtjs8Ste9iqCbDgKmIR5MXclHBT/JES+tFjEdl8G1kwI+QROljOkh5IYxjx8MHM9+eLMpmYbToMwedG4hFUwaD+c2a6GEXSQqERe2NqGZOm5GyS9W799l12Nz5AFxfCWe4zhepnCLZX3PVB9aAadu+NfG7gi+qEJDDceKdmczpQGYVTh7IGtBuscNb48/5LZjJzd3mD3vO3DQuNf2p3nGLhAc34oTVEkvpMWzczmIeHqNNEIxpX9jC8+CGNdt1FX/RgHu6EL2k/2z9KrOcvh9Hr8FCYsobhpUdkdfhdZFWD/dpVW3FiukQdDILbDbmmvGU=',
    //     'Origin': 'https://isa.blackeye.id'
    //   }
    // await axios.post(
    //   "https://isa.ebdesk.com/api/v1/analyze/executeQueryByAnalyzeId",
    //   {
    //     analyze_id: "8c0719bbfd327ebc3380a7b013b215ba",
    //     filter:
    //       '{"query":{"bool":{"must":[{"range":{"created_at":{"gte":1675011600689,"lte":1675702799689,"format":"epoch_millis"}}}]}}}',
    //     criteria_id: "85b5b4dc82fa410372b6cc3f6de185ba",
    //     platform: "global",
    //     interval: "1d",
    //     type: "",
    //   },{
    //     headers:headers
    //   }
    // ).then((resp) =>{
    //     console.log(resp);
    // }).catch((err)=>{
    //     console.log(err);
        
    // });
  };
  return (
    <div className="login d-flex">
      <motion.nav animate={alert ? "open" : "closed"} variants={variants}>
        {alert}
      </motion.nav>
      <div className="left">
        <div className="title">
          <Image layout="responsive" src={Logo} alt="logo" />
          <span>
            Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
            eros. Fusce rutrum, lectus in blandit sagittis, mi tortor.
          </span>
        </div>
      </div>
      <div className="right">
        <div className="formLogin">
          <p className="header">Sign in</p>
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
              Password <span>*</span>
            </div>
            <Input type={"password"} output={setPassword} />
          </div>
          <ButtonAuth output={handleLogin} name={"Access my account"} />
          <div className="foot">
            <Link href={"/auth/forgot"} className="red">
              Forget my password?
            </Link>
            <p>
              Dont have an account?{" "}
              <Link className="red" href={"/auth/register"}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
