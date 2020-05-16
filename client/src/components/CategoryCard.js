import React from "react";
const styles = {
  sectionStyles: {
    width: "18rem",
    height: "300px",
  },
  cardStyle: {
    margin: "10px",
  },
  img: {
    width: "80%",
    height: "65%",
    margin: "0,auto",
  },
};
function CategoryCard(props) {
  return (
    <div className="col-sm-3" style={styles.cardStyle}>
      <div className="card" style={styles.sectionStyles}>
        <img
          style={styles.img}
          src={props.image}
          className="card-img-top"
          alt={props.name}
        />
        <div className="card-body">
          <h2 className="card-text">{props.name}</h2>
        </div>
      </div>
    </div>
  );
}
export default CategoryCard;
