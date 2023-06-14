import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import { CartContextProvider } from "./context/CartContext";
import Layout from "./components/layout/Layout";
import { Login } from "./components/pages/login/Login";
import { DarkContextPrvider } from "./context/DarkContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <DarkContextPrvider>
          <Routes>
            <Route element={<Layout />}>
              {routes.map(({ id, path, Element }) => (
                <Route path={path} key={id} element={<Element />} />
              ))}
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </DarkContextPrvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
