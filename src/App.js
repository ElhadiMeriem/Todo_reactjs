import './App.css';
import {Route ,Routes , Link , BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Todo from './Todo';
 

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand navbar-band m-5'>
        <ul className='navbar-nav'>
          <li>
            <Link className="nav-link" to="/todo">Todo</Link>
          </li>    
        </ul>
      </nav>  
      <div className='container'>
        <Routes>
          <Route  path="/todo" element={<Todo/>} ></Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
