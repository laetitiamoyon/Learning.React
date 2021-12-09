import './App.css';
import {JobList} from "./Job";
import {FilterableProductTable} from "./Products";

const App = () =>
{
  return <div className="App">
    <JobList/>
    <FilterableProductTable/>
    </div>
}

export default App;
