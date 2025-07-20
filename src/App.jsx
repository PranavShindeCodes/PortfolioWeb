import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Visit from "./pages/Visit";
import Home from "./pages/Home";
import Error from "./pages/Error";
const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/visit" element={<Visit></Visit>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
};
export default App;
