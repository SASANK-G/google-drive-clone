
import './App.css';
import Data from './Components/Data';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <>
    <Header/>
    <div className="App">
     <Sidebar/>
     <Data/>
    </div>
    </>
  );
}

export default App;
