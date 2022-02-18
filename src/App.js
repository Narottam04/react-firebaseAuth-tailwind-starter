import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import NotFound404 from './Pages/NotFound404';
import Signup from './Pages/Signup';
import ResetPassword from './Pages/ResetPassword';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Login/>} />
          <Route path = "/app" 
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            } 
          />
          <Route path = "/signup" element={<Signup/>} />
          <Route path = "/resetPassword" element={<ResetPassword/>} />
          <Route path = "/error" element={<NotFound404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
