import './App.css';
import { Header } from './header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
<Router>
<Header />
  <Routes>
    <Route></Route>
  </Routes>
</Router>


  );
}

export default App;
