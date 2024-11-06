import {HashRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import LayoutWrapper from "./layout";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute><LayoutWrapper/></ProtectedRoute>}/>
                <Route path="/*" element={<ProtectedRoute><LayoutWrapper/></ProtectedRoute>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;
