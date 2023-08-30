import modules from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={modules.header}>
      <img
        src="https://1000logos.net/wp-content/uploads/2023/06/Logo-Carhartt.png"
        className={modules.logo}
      ></img>
      <button className={modules.login}>Login</button>
    </header>
  );
};

export default Header;
