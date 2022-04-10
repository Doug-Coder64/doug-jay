import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Header } from "./Components/Components";
import { About, Location } from "./Pages/Pages";

const AppContainer = () => {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppContainer;
