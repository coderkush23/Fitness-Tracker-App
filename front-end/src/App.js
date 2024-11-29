import '../src/index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './views/authentication/sign-in';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Default Route to Redirect to Sign-In */}
          <Route path="/" element={<Navigate to="/sign-in" />} />

          {/* Route for Sign-In Page */}
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
