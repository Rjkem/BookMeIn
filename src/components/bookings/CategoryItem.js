// Third party imports
import React from "react";

// Import local files
import Card from "../ui/Card";

function CategoryItem(props) {

  return (
    <li>
      <Card>
        <div>
          <h3>{props.category}</h3>
        </div>
      </Card>
    </li>
  );
}

export default CategoryItem;
