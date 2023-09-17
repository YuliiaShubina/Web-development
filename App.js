import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import DateCom from './components/DateCom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Мій React додаток</h1>
        <FunctionalComponent /> {}
        <ClassComponent /> {}
        <DateCom /> {}
      </header>
    </div>
  );
}
export default App;
