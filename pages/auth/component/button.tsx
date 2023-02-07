import Image from "next/image";
import React, { useEffect, useState } from "react";
import loading from "../../../public/loading.svg";
const ButtonAuth = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLoad = () => {
    setIsLoading(true);
    props.output("login");
    const timer = setTimeout(() => {
    setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  };
  return (
    <button
      type="submit"
      onClick={(e) => handleLoad()
      }
      disabled={isLoading?true:false}
      className="buttonAuth"
    >
      {isLoading ? <Image src={loading} width={30} alt="test" /> : props.name}
    </button>
  );
};

export default ButtonAuth;
