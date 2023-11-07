import logo from './logo.svg';
import './App.css';
import { Message } from './Message';
import {ListElements} from './ListElements';
import Main from './components/Main';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  //we can return only one element in the return statement.
  return(
  <div>
    <Message></Message>
    <Message></Message>
    <ListElements></ListElements>
    <Main></Main>
    <Navbar></Navbar>
    <Footer></Footer>
  </div>
  )
}
export default App;