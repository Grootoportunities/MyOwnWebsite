import modules from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={modules.navbar}>
      <div className={modules.item}>Newsfeed</div>
      <div className={modules.item}>Member Timeline</div>
      <div className={modules.item}>Groups</div>
      <div className={modules.item}>Member Friends</div>
      <div className={modules.item}>Gallery</div>
      <div className={modules.item}>Videos</div>
      <div className={modules.item}>Forums</div>
      <div className={modules.item}>Shop</div>
    </nav>
  );
};

export default Navbar;
