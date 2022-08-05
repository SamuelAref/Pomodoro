import Cards from "./components/Cards";
import CreateTimer from "./components/CreateTimer";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch";


function App() {

  // const url = 'http://localhost:8000/projects';
  const url = 'https://api.npoint.io/8814c2a0b3de577060a3';
  const {data} = useFetch(url);

  return (
    <div className="App">

        <Navbar/>
        <Cards data = {data}/>
        <CreateTimer/>
    </div>
  );
}

export default App;
