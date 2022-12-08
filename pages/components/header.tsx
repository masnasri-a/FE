import Image from "next/image";
import ProfileImage from '../../public/Images.png'

const Header = (props: any) => {
  return (
    <div className="headerStyle">
      <div className="HeaderComponents">
        <div className="headerName">{props.source}</div>
        <div className="headerAccount">
            <div className="imagesHeader">
                <Image width={50} height={50} src={ProfileImage} alt="picture" />
                <span className="usernameHeader">Username</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
