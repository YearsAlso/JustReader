import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import LayoutWrapper from './layout'
import { useSelector } from 'react-redux'
import InitConfigPage from './pages/Init'

function App() {
  const initStatus = useSelector((state) => state.config.initStatus) 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            initStatus === 'unint' ? (
              <Navigate to="/init" />
            ) : (
              <ProtectedRoute>
                <LayoutWrapper />
              </ProtectedRoute>
            )
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <LayoutWrapper />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/init" element={<InitConfigPage />} />
      </Routes>
    </Router>
  )
}

export default App
