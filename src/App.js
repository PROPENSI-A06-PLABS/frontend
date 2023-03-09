import logo from './logo-plabs-full.png';
import './App.css';
import Button from './components/Button';

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
        React and Tailwind CSS in action
      </p>

      <button className="primary-button">asdad</button>
      <Button color="primary-button-success" name="blue" size="medium"></Button>
    </div>
  );
}

export default App;
