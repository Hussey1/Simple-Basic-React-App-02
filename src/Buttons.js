import "./index.css";

const Buttons = ({ allCategories, filterItems }) => {
  return (
    <div className="button-section">
      {allCategories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(category)}
            type="button"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
