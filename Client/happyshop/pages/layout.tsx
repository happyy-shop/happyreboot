import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {/* <Sidebar/> */}
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;