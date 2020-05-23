import React from "react";
import { Link } from "react-router-dom";

const styles = {
  sectionStyles: {
    width: "18rem",
    height: "100%"
  },
  cardStyle: {
    margin: "0px"
  },
  img: {
    width: "100%",
    height: "100%",
    margin: "0,auto",
  },
  title: {
    fontSize: "142%",
    width: "100%"
  }
};
function GenreCard(props) {
  return (
    <React.Fragment>
      <div className="col-sm-4" style={styles.cardStyle}>
        <div className="thumbnail">
          <Link to={props.link}>
          <img
            style={styles.img}
            src={props.image}
            className="card-img-top movieImg"
            alt={props.name}
          />
          </Link>
        </div>
        <div className="card-body"></div>
      </div>
    </React.Fragment>
  );
}
export default GenreCard;
