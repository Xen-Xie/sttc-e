import "./App.css";
import { Route,Routes } from "react-router";
import Layout from "./utils/layout";
import Home from "./pages/client/Home/Home";
import SignIn from "./pages/client/Auth/SignIn";
import SignUp from "./pages/client/Auth/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element= {<Home />} />
        <Route path="/sign-in" element= {<SignIn />} />
        <Route path="sign-up" element= {<SignUp />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
