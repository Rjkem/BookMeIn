// Third party imports
import React from "react";

// Import local files.
import "./Layout.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      {/* Show the main navigation bar at the top. */}
      <MainNavigation />
      <main className={"main"}>{props.children}</main>
    </div>
  );
}

export default Layout;
