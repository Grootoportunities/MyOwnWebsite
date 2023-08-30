import modules from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={modules.navbar}>
      <div className={modules.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={modules.item}>
        <a href="/news">Newsfeed</a>
      </div>
      <div className={modules.item}>
        <a href="/timeline">Member Timeline</a>
      </div>
      <div className={modules.item}>
        <a href="/groups">Groups</a>
      </div>
      <div className={modules.item}>
        <a href="/friends">Member Friends</a>
      </div>
      <div className={modules.item}>
        <a href="/gallery">Gallery</a>
      </div>
      <div className={modules.item}>
        <a href="/videos">Videos</a>
      </div>
      <div className={modules.item}>
        <a href="/forums">Forums</a>
      </div>
      <div className={modules.item}>
        <a href="/shop">Shop</a>
      </div>
    </nav>
  );
};

export default Navbar;
