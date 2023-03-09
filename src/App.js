import logo from './logo-plabs-full.png';
import './App.css';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
import Button from './components/Button';

// import Dropdown from './components/Dropdown';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }
// const options = [
//   {key : 1, value : "hantop"},
//   {key : 2, value : "pitjay"},
//   {key : 3, value : "burungbpkgw"},
//   {key : 4, value : "yongs"},
//   {key : 5, value : "rorski"}
// ];

function App() {
  const divStyle = {
    margin: 50,
    width: 130
  }

  // const [selectedOption, setSelectedOption] = useState("dion");
  // const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>

      <button className="primary-button">asdad</button>
      <Button color="primary-button-success" name="blue" size="medium"></Button>
      <div style={divStyle}>
        <DropDownListComponent dataSource={["Hantop", "Pitjay", "Athuy", "Yong", "Rors"]}></DropDownListComponent>
      </div>
      {/* <Dropdown
        options={options}
        onChange={ (item) => setSelectedOption(item) }
        selectedkey={selectedOption}
        placeholder={"type to search"}
        open={open}
        setOpen={setOpen}
      />
      <p className="text-gray-500 text-lg">
        selected option : {selectedOption}
      </p> */}
    </div>
  );
} 

export default App;
