import modules from "./Profile.module.css";
import BannerUser from "./BannerUser/BannerUser";
import ListMenu from "./ListMenu/ListMenu";

const Profile = (props) => {
  return (
    <div className={modules.profile}>
      <BannerUser/>
      <ListMenu />
    </div>
  );
};

export default Profile;
