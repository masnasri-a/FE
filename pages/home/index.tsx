import { useState } from "react";
import LeftMediaMenu from "../components/leftMediaMenu";
import LeftSourceMenu from "../components/leftSourceMenu";
import Main from "./main";
const Index = () => {
  const [media, setMedia] = useState("Online News");
  const [sources, setSources] = useState("Log")

  const handleLeftMediaMenu = (media: any) => {
    if (media == "rss") {
      setMedia("Online News");
    } else if (media == "tv") {
      setMedia("Tv News");
    } else if (media == "printer") {
      setMedia("Printed News");
    }
  };

  const handleSource = (source:any) => {
    setSources(source)
    console.log(source);
    
  }

  return (
    <>
      <div className="menuReprocess">
        <div className="container-fluid">
          <div className="bgSource">
            <div className="d-flex">
              <div className="leftMedia">
                <div className="leftMediaMenu">
                  <LeftMediaMenu output={handleLeftMediaMenu} />
                </div>
              </div>
              <div className="leftSourceMedia">
                <div className="leftSource">
                  <LeftSourceMenu media={media} output={handleSource}/>
                </div>
              </div>
              <div className="mainReprocessData">
                <div className="mainMenu">
                    <Main media={media} source={sources} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
