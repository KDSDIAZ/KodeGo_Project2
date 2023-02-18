import './App.css';
import { BrowserRouter } from "react-router-dom"; 
import RouterConvention from './components/router/RouterConvention';
function App() {
  return (
  <BrowserRouter>
    <RouterConvention/>
  </BrowserRouter>
  );
}

export default App;
