import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiInfo,
} from "react-icons/fi";
const TableLog = (props: any) => {
  const [tableValue, setTableValue] = useState<any[]>([]);
  const [leftNum, setLeftNum] = useState(1);
  const [isDetail, setIsDetail] = useState(false);
  const formatter = (status: string) => {
    if (status == "pending") {
      return <div className="statusPendingValue">{status}</div>;
    } else if (status == "success") {
      return <div className="statusSuccessValue">{status}</div>;
    } else if (status == "failed") {
      return <div className="statusFailedValue">{status}</div>;
    }
  };

  const loadLog = async (
    page: number,
    limit: number,
    logId: string = "all"
  ) => {
    let access_token = JSON.parse(window.localStorage.getItem("data")!);
    if (access_token) {
      access_token = access_token.access_token;
    }
    let logs = "";
    if (logId != "all") {
      logs = "&search=" + logId;
    }
    await axios
      .get(
        "https://192.168.114.28:9100/log/show-all/?page_num=" +
          page +
          "&limit=" +
          limit +
          logs,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )
      .then((resp) => {
        const list_data: [] = resp.data.data;
        setTableValue([]);
        list_data.map((detail: any, index) => {
          const values = detail;
          setTableValue((oldData) => [...oldData, values]);
        });
      })
      .catch((err) => {
        Router.push("/auth/login");
      });
  };
  const handleDetail = (param: any, detail: any) => {
    const clientX = param.clientX;
    const clientY = param.clientY;
    const data = {
      x: clientX,
      y: clientY,
      ...detail,
    };
    props.output(data);
  };
  const handlePagination = (param: number) => {
    setLeftNum(param);
    loadLog(param, 10, props.logId);
  };
  useEffect(() => {
    props.logId != "" ? loadLog(1, 10, props.logId) : loadLog(1, 10);
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="batchId">Batch Id</th>
            <th className="status">Status</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableValue.map((detail: any, index) => {
            return (
              <tr key={index}>
                <td className="batchIdInfo">{detail.batchId}</td>
                <td className="statusInfo">{formatter(detail.status)}</td>
                <td className="info">
                  <div
                    className="infos"
                    onClick={(e) => handleDetail(e, detail)}
                  >
                    <FiInfo />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="footerTable">
        {leftNum == 1 ? null : (
          <div className="num" onClick={() => handlePagination(leftNum - 1)}>
            {"<"}
          </div>
        )}
        <div className="side">{leftNum}</div>
        <div className="num" onClick={() => handlePagination(leftNum + 1)}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default TableLog;
