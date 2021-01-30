import logo from './logo.svg';
import solder from './solder.svg';
import './App.css';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>Кажется Миша уже едет домой!</span>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>
      Миша приедет домой через {days} дней {hours} часов {minutes} минут {seconds} секунд</span>;
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Countdown
          date={ new Date (1638448810000) }
          renderer={renderer}
        />
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
      </header>
    </div>
  );
}

export default App;
