import { useState } from "react";
import MediaTagAll from "../mediaTags/all";
import MediaTagID from "../mediaTags/id";
import MediaTagTimeFrame from "../mediaTags/timeframe";

const MediaTags = (props: any) => {

  const [selected, setSelected] = useState(<MediaTagAll />)

  const MENU = [
    {
      name: "Media Tags All",
      value: "media-tag-all",
    },
    {
      name: "Media Tags By ID",
      value: "media-tag-by-id",
    },
    {
      name: "Media Tags By Timeframe",
      value: "media-tag-by-timeframe",
    },
  ];

  const handleSelect = (param: any) => {
    if (param.target.value == "media-tag-all") {
      setSelected(<MediaTagAll />)
    } else if (param.target.value == "media-tag-by-id") {
      setSelected(<MediaTagID />)
    } else if (param.target.value == "media-tag-by-timeframe") {
      setSelected(<MediaTagTimeFrame />)
    }
  }



  return (
    <>
      <select onChange={(e) => handleSelect(e)} className="selectMediaTags">
        {MENU.map((detail: any, index) => {
          return <option key={index} value={detail.value}>{detail.name}</option>;
        })}
      </select>
      {
        selected
      }
    </>
  );
};
export default MediaTags;
