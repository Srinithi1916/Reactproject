//import './App.css';
//import Navbar from './components/Navbar';
//import Main from './components/Main';
//import Footer from './components/Footer';
//import Buttons from './components/Buttons';
import Counter from "./Day-3/Counter";
import DynamicRendering from "./Day-3/DynamicRendering";
import ToggleMessage from "./Day-3/ToggleMessage";

function App() {
  return (
    <div className="flex space-x-4 my-4">
      {/*  <Navbar></Navbar>
  <Main></Main>
  <Footer></Footer>
  <Buttons label="green" color="green"/>
  <Buttons label="yellow" color="yellow"/>
  <Buttons label="red" color="red"/> */}
      <ToggleMessage />
      <DynamicRendering />
      <Counter />
    </div>
  );
}

export default App;
