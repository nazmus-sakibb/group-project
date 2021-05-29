import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar/Navbar'


import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home/>
      {/* <Sidebar></Sidebar> */}
    </div>
  );
}

export default App;
