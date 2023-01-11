import logo from './logo.svg';
import './App.css';
// import {Button} from '@material-ui/core';
import ExcelUploader from './Components/Upload';
import MyTable from './Components/Table';
import JSONTable from './Components/Table'


function App() {
  return (
    <div className="App">
      <ExcelUploader/>  
      <MyTable/>
    </div>
  );
}

export default App;
