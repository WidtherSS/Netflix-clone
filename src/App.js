import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <div>
      <AuthContextProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/signup" element= {<SignUp/>}/>
            <Route path="account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
          </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
