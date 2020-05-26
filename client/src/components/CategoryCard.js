import React from "react";
import { Link } from "react-router-dom";

const styles = {
  sectionStyles: {
    width: "18rem",
    height: "90%",
  },
  cardStyle: {
    margin: "0px",
  },
  img: {
    width: "100%",
    height: "270px",
    margin: "0,auto",
    maxHeight: "300px",
  },
  title: {
    fontSize: "142%",
    width: "100%",
  },
};

function CategoryCard(props) {
  return (
    <React.Fragment>
      <div className="col-sm-4" style={styles.cardStyle}>
        <div className="thumbnail transparent-bg">
          <img
            style={styles.img}
            src={props.image}
            className="card-img-top"
            alt={props.name}
          />
        </div>
        <div className="card-body"></div>
        <div className="card-img-overlay col text-center mt-5">
          <div className="zoom1 mt-2">
            <Link
              to={props.link}
              className="card-title"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 35,
                zIndex: 2,
                position: "relative",
                textDecoration: "none",
              }}
            >
              {props.name}
            </Link>
          </div>
          <hr
            className="my-2"
            style={{
              backgroundColor: "white",
              zIndex: 2,
              position: "relative",
              width: "70%",
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default CategoryCard;
