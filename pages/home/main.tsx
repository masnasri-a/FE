import { useEffect, useState } from "react";
import Header from "../components/header";
import MediaTags from "./mediaTags";
import Source from "./source";
const Main = (props: any) => {
  const [menu, setMenu] = useState(<MediaTags />);
  
  useEffect(() => {
    const handleMenu = () => {
      console.log(props.source);
      
      if (props.source == "Media Tags") {
        setMenu(<MediaTags />);
      } else if (props.source == "Source") {
        setMenu(<Source />);
      } else if (props.source == "Link") {
        setMenu(<MediaTags />);
      } else if (props.source == "Country") {
        setMenu(<MediaTags />);
      } else if (props.source == "Delete") {
        setMenu(<MediaTags />);
      } else if (props.source == "Log") {
        setMenu(<MediaTags />);
      }
    };
    handleMenu();
  }, [props.source]);

  return (
    <>
      <Header source={props.source} />
      {menu}
    </>
  );
};
export default Main;
