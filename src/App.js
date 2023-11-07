import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ListBody from './components/ListBody.js';

function App() {
	return (
		<div className="App container-fluid">
			<Navbar />
			<ListBody />
		</div>
	);
}

export default App;
