

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Boating from "./pages/Boating";
import FramerMotionTest from "./pages/FramerMotionTest";

const App = () => {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/boating" element={<Boating />} />
         <Route path="/framerMotionTest" element={<FramerMotionTest />} />
      </Route>
    )


  );


  return <RouterProvider router={router} />;

}

export default App
