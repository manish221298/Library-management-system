import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './authentication/Login';
import BookStore from './components/BookStore';
import Details from './components/Details';
import ShowItemDetails from './components/ShowItemDetails';

function App() {
  return (
    <div className="App">
      <h1>Library management system</h1>
      <BrowserRouter>
      <div>
        <Link to="/" >User Login</Link>
        {/* <Link to="/bookstore" >User Login</Link> */}
      </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/details" element={<Details />} />
          <Route path="/bookstore" element={<BookStore />} />
          <Route path="/showitemdetails" element={<ShowItemDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
