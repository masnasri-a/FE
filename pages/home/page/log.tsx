import React, { useEffect, useState } from "react";
import ButtonSave from "../components/buttonSave";
import InputCheck from "../components/inputCheck";
import CardDetail from "../components/table/cardDetail";
import TableLog from "../components/table/tableLog";

const Log = () => {
  const [logId, setLogId] = useState("");
  const [logIdTemp, setLogIdTemp] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState({});
  const handleCheck = (param: any) => {
    setLogIdTemp(param);
  };
  const handleOutputTable = (param: any) => {
    setShowDetail(!false);
    const times = param.created_at;
    const date = new Date(times).toString();
    const datas = {
      x: param.x,
      y: param.y,
      status: param.status,
      createdAt: date,
      createdBy: param.created_by,
      task: param.task,
    };
    setData(datas);
  };
  const handleClose = (param: any) => {
    setShowDetail(!showDetail);
  };
  const handleOnClick = (param: any) => {
    setLogId(logIdTemp);
    console.log(logIdTemp);
    Tables()
  };
  const Tables = () => {
    return <TableLog logId={logId} output={handleOutputTable} />
  };
  useEffect(() => {
    handleOnClick(1);
  }, [logId]);
  return (
    <div>
      <div className="checking">
        <div className="sigleCheck">
          <InputCheck output={handleCheck} />
        </div>
        <ButtonSave
          onCLick={handleOnClick}
          disabled={logIdTemp != "" ? false : true}
          name={"Check"}
        />
      </div>
      {
        <Tables/>
      }
      {showDetail ? <CardDetail data={data} close={handleClose} /> : null}
    </div>
  );
};

export default Log;
