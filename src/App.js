import './App.css';
import {Route ,Routes  , BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Todo from './Todo';
 

function App() {
  return (
    <Router> 
      <div className='container'>
        <Routes>
          <Route  path="/" element={<Todo/>} ></Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
