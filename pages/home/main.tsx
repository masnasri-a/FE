import { useEffect, useState } from "react";
import Header from "../components/header";
import MediaTags from "./mediaTags";
const Main = (props: any) => {
  const [menu, setMenu] = useState(<MediaTags />);
  const handleMenu = () => {
    if (props.source == "Media Tags") {
      setMenu(<MediaTags />);
    } else if (props.source == "Media Tags") {
      setMenu(<MediaTags />);
    } else if (props.source == "Media Tags") {
      setMenu(<MediaTags />);
    } else if (props.source == "Media Tags") {
      setMenu(<MediaTags />);
    } else if (props.source == "Media Tags") {
      setMenu(<MediaTags />);
    }
  };
  useEffect(() => {
    handleMenu();
  }, []);

  return (
    <>
      <Header source={props.source} />
      {menu}
    </>
  );
};
export default Main;
