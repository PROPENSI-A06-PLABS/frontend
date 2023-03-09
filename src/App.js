import logo from './logo-plabs-full.png';
import './App.css';
// import Button from './components/Button';
import { Button, OutlineButton } from './components/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        System Design
      </p>

      {/* <button className="primary-button" onClick={() => console.log("Primary Button")}>asdad</button> */}
      <Button variant="button-primary" onClick={() => console.log("Primary Button")}>Primary Button</Button>
      <Button variant="button-danger" onClick={() => console.log("Danger Button")}>Danger Button</Button>
      <OutlineButton variant="button-primary" onClick={() => console.log("Outline Primary Button")}>Outline Primary Button</OutlineButton>
      <OutlineButton variant="button-danger" onClick={() => console.log("Outline Danger Button")}>Outline Danger Button</OutlineButton>
    </div>
  );
}

export default App;
