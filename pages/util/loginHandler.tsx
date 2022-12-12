import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginHandler = () => {
  const router = useRouter();
  useEffect(() => {
    let name = localStorage.getItem("name");
    console.log(name);
    if (name == undefined) {
      router.push("/auth/login");
    }
  }, []);

  return <></>;
};
export default LoginHandler;
