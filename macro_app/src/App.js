import Logged from './layout/logged';
import { BrowserRouter } from 'react-router-dom';
import './test';
function App() {
  return (
    <BrowserRouter>
      <Logged></Logged>
    </BrowserRouter>
  );
}

export default App;
