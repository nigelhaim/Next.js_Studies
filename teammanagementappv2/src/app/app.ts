import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AllUsers from "./pages/AllUsers.tsx";

function app(){
  return(
    <Router>
      <nav>
        <Link to="/Home">Home</link>
        <link to="login">Login</link>
        <link to="AllUsers">My Team</link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AllUsers" element={<AllUsers />} />
      </Routes>
    </Router>
  );
}
