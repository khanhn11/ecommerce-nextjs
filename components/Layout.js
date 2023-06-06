import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div id="mainContainer">{children}</div>
    </>
  );
};

export default Layout;
