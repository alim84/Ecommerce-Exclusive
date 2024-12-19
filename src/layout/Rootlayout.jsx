
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Nabbar from "../Pages/Nabbar";



const Rootlayout = () => {
  return (
  

      <div >
      <Nabbar/>
        <Outlet />
        <Footer/>
      </div>
  
  );
};

export default Rootlayout;