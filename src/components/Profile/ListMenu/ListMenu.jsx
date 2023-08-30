import modules from "./ListMenu.module.css";

const ListMenu = (props) => {
  return (
    <div className={modules.listMenu}>
      <button className = {modules.item}>Posts</button>
    </div>
  );
};

export default ListMenu;
