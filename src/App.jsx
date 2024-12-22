import Signup from "./component/Signup";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Rootlayout from "./layout/Rootlayout";
import Login from "./component/Login";
import Wishlist from "./component/userdetails/Wishlist";
import Cart from "./component/Cart";
import Billingdetails from "./component/Billingdetails";
import Profile from "./component/userdetails/Profile";
import PersonalInfo from "./component/userdetails/PersonalInfo";
import MyOrders from "./component/userdetails/MyOrders";
import Contact from "./Pages/Contact";
import Addchart from "./component/userdetails/Addchart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="billdetails" element={<Billingdetails />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="addcart" element={<Addchart />} />

        {/* User Profile Routes */}
        <Route path="profile" element={<Profile />}>
          <Route index element={<  PersonalInfo/>} />
          <Route path="myorders" element={<MyOrders />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
