// Third party imports
import React from "react";

// Import local files
import CategoryItem from "./CategoryItem";

function CategoryList(props) {
  return (
    <ul className={"list"}>
      {props.bookings.map((session) => (
        <CategoryItem
          key={session.id}
          id={session.id}
          category={session.category}
        />
      ))}
    </ul>
  );
}

export default CategoryList;