import Image from "next/image";
import Logo from "../../public/logo.svg";
import rss from "../../public/rss.svg";
import tv from "../../public/tv.svg";
import printer from "../../public/printer.svg";
import light from "../../public/light.svg";
import { useEffect, useState } from "react";
const LeftMediaMenu = (props: any) => {
  const [select, setSelect] = useState({
    "rss":"bgActive",
    "tv":"",
    "printer":""
  });

    const handleActive = (media:any) => {
        if (media == "rss") {
            setSelect({
                "rss":"bgActive",
                "tv":"",
                "printer":""
            })
        }else if (media == "tv") {
            setSelect({
                "rss":"",
                "tv":"bgActive",
                "printer":""
            })
        }else if (media == "printer") {
            setSelect({
                "rss":"",
                "tv":"",
                "printer":"bgActive"
            })
        }
        props.output(media)
    }

    useEffect(()=>{
    })

  return (
    <>
      <div className="mediaMenuComponents">
        <div className="ma logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="mediaSource">
          <div className={`insideMediaSource ${select.rss}`} onClick={()=> handleActive("rss")}>
            <Image src={rss} alt="rss" />
          </div>
          <div className={`insideMediaSource ${select.tv}`} onClick={()=> handleActive("tv")}>
            <Image src={tv} alt="tv" />
          </div>
          <div className={`insideMediaSource ${select.printer}`} onClick={()=> handleActive("printer")}>
            <Image src={printer} alt="printer" />
          </div>
        </div>
        <div className="darkMode">
          <Image src={light} alt="light" />
        </div>
      </div>
    </>
  );
};

export default LeftMediaMenu;
