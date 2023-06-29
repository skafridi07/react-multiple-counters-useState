import React from 'react';
import './style.css';

let initial = {
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
};

export default function App() {
  const [states, setStates] = React.useState(initial);
  function handleClick(e) {
    const btnClass = e.target.classList[0];
    switch (btnClass) {
      case 'btn-1':
        setStates((prevStates) => ({ ...prevStates, c1: prevStates.c1 + 1 }));
        console.log(states);
        break;
      case 'btn-2':
        setStates((prevStates) => ({ ...prevStates, c2: prevStates.c2 + 1 }));
        console.log(states);
        break;
      case 'btn-3':
        setStates((prevStates) => ({ ...prevStates, c3: prevStates.c3 + 1 }));
        console.log(states);
        break;
      case 'btn-4':
        setStates((prevStates) => ({ ...prevStates, c4: prevStates.c4 + 1 }));
        console.log(states);
        break;
    }
  }
  return (
    <div>
      <button className="btn-1" onClick={handleClick}>
        {states.c1}
      </button>
      <button className="btn-2" onClick={handleClick}>
        {states.c2}
      </button>
      <button className="btn-3" onClick={handleClick}>
        {states.c3}
      </button>
      <button className="btn-4" onClick={handleClick}>
        {states.c4}
      </button>
    </div>
  );
}
