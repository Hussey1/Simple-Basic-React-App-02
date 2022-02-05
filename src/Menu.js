import "./index.css";

const Menu = ({ menuList }) => {
  return (
    <div className="content-section">
      {menuList.map((item) => {
        const { id, name, image, info, price } = item;
        return (
          <div key={id} className="menu-card">
            <img src={image} alt={name} />
            <div className="menu-body">
              <h5>{name}</h5>
              {info}
            </div>
            <div className="menu-footer">
              <p>$ {price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
