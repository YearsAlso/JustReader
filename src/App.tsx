import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function Login() {
    const handleLogin = () => {
        localStorage.setItem("authenticated", "true");
        window.location.href = "/";
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;
