import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


function RootLayout() {
  return (
    <div>
      <NavigationBar />
      {/* placeholder component */}
      <div style={{ minHeight: "85vh" }} className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
