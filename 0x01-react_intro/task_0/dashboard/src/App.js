import logo from './holberton.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
			<div className="App-header">
				<img src={logo} alt="holberton-logo" />
				<p className='title'>School dashboard</p>
			</div>
			<div className="App-body">
				<p>Login to access the full dashboard</p>
			</div>
			<div className="App-footer">
				<p>Copyright 2020 - holberton School</p>
			</div>
    </div>
  );
}

export default App;
