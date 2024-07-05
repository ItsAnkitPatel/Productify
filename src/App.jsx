import Login from "./components/Login";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import ProtectRoutes from "./components/ProtectRoutes";
import Layout from "./Layout";
import RedirectRoute from "./components/RedirectRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* If the user is not logged in then do not let them access home page instead redirect them to login page */}
      <Route path="/" element={<ProtectRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
      {/* If user is already logged in then do not let them to access login page */}
      <Route
        path="/login"
        element={
          <>
            <RedirectRoute />
            <Login />
          </>
        }
      />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
