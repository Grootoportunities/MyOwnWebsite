import modules from "./BannerUser.module.css";

const BannerUser = (props) => {
  return (
    <div className={modules.banneruser}>
      <p>
        <img
          src="https://cloudmakers.ru/wp-content/uploads/2018/08/13.jpg"
          className={modules.bannerBackground}
        ></img>
      </p>
    </div>
  );
};

export default BannerUser;
