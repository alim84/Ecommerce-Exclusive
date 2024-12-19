import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signup />} />
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="cake" element={<Cake />} />
        <Route path="dailyfood" element={<DailyFood />} />
        <Route path="dairy" element={<Dairy />} />
        <Route path="fish" element={<Fish />} />
        <Route path="foods" element={<Foods />} />
        <Route path="frozen" element={<Frozen />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="grocery" element={<Grocery />} />
        <Route path="household" element={<HouseHold />} />
        <Route path="meat" element={<Meat />} />
        <Route path="oilitem" element={<OilItem />} />
        <Route path="personalcare" element={<PersonalCare />} />
        <Route path="stationery" element={<Stationery />} />
        <Route path="vegetables" element={<Vegetables />} />
        <Route path="offers" element={<Offers />} />
        <Route path="housewife" element={<HouseWife />} />

        {/* User Profile Routes */}
        <Route path="profile" element={<Profile />}>
          <Route index element={<UserDashboard />} />
          <Route path="personalinfo" element={<PersonalInfo />} />
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
