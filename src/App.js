import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Context/context"
import Home from "./components/home/Home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
export default App;