import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiFileText,
  FiInfo,
  FiUserPlus,
} from "react-icons/fi";

const CardDetail = (props: any) => {
  const handleChildClick = (event: any) => {
    props.close(event);
  };
  return (
    <div className="relative">
      <div className="fullPage" onClick={(e) => handleChildClick(e)}>
        <div className="cardDetailLog">
          <div className="top">
            <span className="info">
              Detail <FiInfo />
            </span>
            <span>.</span>
          </div>
          <div>
            <span>
              <FiCheck /> Status
            </span>
            {props.data ? (
              props.data.status == "success" ? (
                <p className="c-green">{props.data.status}</p>
              ) : props.data.status == "failed" ? (
                <p className="c-red">{props.data.status}</p>
              ) : props.data.status == "pending" ? (
                <p className="c-orange">{props.data.status}</p>
              ) : null
            ) : (
              "undifined"
            )}
          </div>
          <div>
            <span>
              <FiCalendar /> Created_at
            </span>
            <p>{props.data ? props.data.createdAt : "Undifined"}</p>
          </div>
          <div>
            <span>
              <FiUserPlus /> Created_by
            </span>
            <p>{props.data?props.data.createdBy:"undifined"}</p>
          </div>
          <div>
            <span>
              <FiFileText /> Task
            </span>
            <p>{props.data?props.data.task:"undifined"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
