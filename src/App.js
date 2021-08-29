
import './App.css';
import Child from './Child';
import { TransProvider } from './TransContext';

function App() {
  return (
    <div className="Child">
      <TransProvider>
      <Child></Child>

      </TransProvider>
    
    </div>
  );
}

export default App;
