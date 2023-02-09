import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import images from "../../../public/profile.png";
import ButtonSave from "../components/buttonSave";
import InputMin from "../components/inputMin";
import InputPass from "../components/InputPass";
import SelectMin from "../components/selectMin";
const Profile = (props: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [division, setDivision] = useState("");
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const splitFullName = () => {
    const local = window.localStorage.getItem("data");
    if (local) {
      const jsonData = JSON.parse(local);
      const fullName: string = jsonData.full_name;
      const split = fullName.split(" ");
      const divs = Math.floor(split.length / 2);
      const firstNamestr = split.slice(0, divs);
      const lastNamestr = split.slice(divs);
      setFirstName(firstNamestr.toString());
      setLastName(lastNamestr.toString());

      const divisionValue = jsonData.division;
      setDivision(divisionValue);
    } else {
      Router.push("/auth/login");
    }
  };
  useEffect(() => {
    splitFullName();
  });
  const handleFirstName = (param: any) => {
    console.log(param);
    setFirstName(param);
  };
  return (
    <div>
      <div className="mainProfile">
        <Image
          className="photoProfile"
          src={images}
          alt="Profile"
          width={220}
        />
        <div className="formSetting">
          <div className="multi">
            <div className="firstname">
              <div>
                First Name <BiEdit />
              </div>
              <InputMin value={firstName} output={handleFirstName} />
            </div>
            <div className="lastname">
              <div>
                Last Name <BiEdit />
              </div>
              <InputMin value={lastName} output={setLastName} />
            </div>
          </div>
          <div className="username">
            <div>
              User Name <BiEdit />
            </div>
            <InputMin value={username} output={setUsername} />
          </div>
          <div className="division">
            <div>Division</div>
            <SelectMin />
          </div>
          <ButtonSave name={"Save Changes"} />
          <hr />
          <p>Change Password</p>
          <div className="updatePassword">
            <div className="oldPass">
              <p>Old Password</p>
              <InputPass />
            </div>

            <div className="oldPass">
              <p>New Password</p>
              <InputPass />
            </div>

            <div className="oldPass">
              <p>Confirm New Password</p>
              <InputPass />
            </div>
            <span>
              Make sure its at least 15 characters OR at least 8 characters
              including a number and a lowercase letter.
            </span>
            <br />
            <div className="updates">
              <ButtonSave name={"Update Password"} />
              <span>Reset to default password</span>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
