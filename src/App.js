import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Contact from './components/Contact/contact';
// import Home from './components/Home/home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/about/About';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<SidebarLayout />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </div>
);

export default App;
