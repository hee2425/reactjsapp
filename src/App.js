import logo from './logo.svg';
import './App.css';
import Header from './components1/MyHeader';
import MyNavigation from './components1/MyNavigation';
import MySection from './components1/MySection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>JSX(JavaScript XML)</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 배우기🛸
        </a>
      </header>
      <Header></Header>
      <MyNavigation/>
      <MySection/>
    </div>
  );
}

export default App;  //다른곳에서 쓰게끔 export
