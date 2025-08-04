import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HomeLayout from "./components/HomeLayout";
import { Suspense } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { element: <Home />, index:true },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
]);

function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
