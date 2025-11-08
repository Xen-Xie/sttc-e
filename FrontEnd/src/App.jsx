import "./App.css";
import { Route,Routes } from "react-router";
import Layout from "./utils/layout";
import Home from "./pages/client/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element= {<Home />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
