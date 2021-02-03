import './App.css';
import Countdown from 'react-countdown';
import { useRef, useEffect } from 'react'


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
      Миша приедет домой через <br/> {days} дней {hours} часов {minutes} минут {seconds} секунд</span>;
  }
};

function Background () {
  const ref = useRef();
  return (
    <img
      className="background"
      src='/background.jpg'
      ref={ref}
    />
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Countdown
          date={ new Date (1638448810000) }
          renderer={renderer}
        />
        <Background/>
      </header>
    </div>
  );
}

export default App;
