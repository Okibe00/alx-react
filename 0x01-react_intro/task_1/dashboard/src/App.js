import logo from './holberton.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">
			<div className="App-header">
				<img src={logo} alt="holberton-logo" />
				<p className='title'>School dashboard</p>
			</div>
			<div className="App-body">
				<p>Login to access the full dashboard</p>
				<label htmlFor="email">
					Email:
				</label>
				<input id='email' type="email" /><br />
				<label htmlFor="password">Password</label>
					<input id='password' type="password" /><br />
					<button>Ok</button>
			</div>

			<div className="App-footer">
				<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
			</div>
    </div>
  );
}

export default App;