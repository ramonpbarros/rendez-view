import React from "react";
const styles = {
  sectionStyles: {
    width: "18rem",
    height: "300px",
  },
};
function CategoryCard(props) {
  return (
    <div className="col-sm-3">
      <div className="card" style={styles.sectionStyles}>
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h2 className="card-text">{props.name}</h2>
        </div>
      </div>
    </div>
  );
}
export default CategoryCard;
