import React from "react";
import { Link } from "react-router-dom";

const styles = {
  sectionStyles: {
    width: "18rem",
    height: "90%",
  },
  cardStyle: {
    margin: "20px",
  },
  img: {
    width: "100%",
    height: "65%",
    margin: "0,auto",
  },
  title: {
    fontSize: "142%",
    width: "100%",
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
          <Link to={props.link}>
            <h2 className="card-text" style={styles.title}>
              {props.name}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CategoryCard;
