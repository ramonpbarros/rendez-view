import React from "react";
const styles = {
  sectionStyles: {
    width: "18rem",
  },
};
function CategoryCard(props) {
  return (
    <div class="card" style={styles.sectionStyles}>
      <img src={props.image} class="card-img-top" alt={props.name} />
      <div class="card-body">
        <h2 class="card-text">{props.name}</h2>
      </div>
    </div>
  );
}
export default CategoryCard;
