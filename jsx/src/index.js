// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// get reference to the div with ID root
const el = document.querySelector('#root');

// Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component
function TimeApp() {
  let message = 'Bye there!';
  if (Math.random() > 0.5) {
    message = 'Hello There';
  }
  const date = new Date();
  const time = date.toLocaleTimeString();
  return <h1>{time}</h1>

  // return <h1>{new Date().toLocaleTimeString()}</h1>
}

function NameApp() {
  const name = 'Samantha';
  const age = 23;

  return (
    <h1>
      Hi, my name is {name}, age {age}
    </h1>
  );
}

function NumberInput () {
  return <input type="number" />;
}

// Show the component on screen
root.render(<TimeApp />);
root.render(<NameApp />);
root.render(<NumberInput />);