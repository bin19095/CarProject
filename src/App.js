import CarForm from './Components/CarForm';
import CarList from './Components/CarList';
import CarSearch from './Components/CarSearch';
import CarValue from './Components/CarValue';

function App(){
  return (<div> <h1>
    <CarForm />
    <CarSearch />
    <CarList />
  
    <CarValue />
  </h1>
  
  </div>);
}

export default App;
