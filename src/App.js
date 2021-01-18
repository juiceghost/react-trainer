
import { useState } from 'react';

function Navbar() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

function ContactForm(props) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting name: ${name}`);
    setName('');
  }

  console.log("ContactForm ran! " + name)
  return (
    <form onSubmit={handleSubmit}>
      <label>Your name:
      <input 
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
      ></input>
      </label>
      <input type="submit" value="Submit"></input>
      </form>
  )
}

function ThankYou() {
  return (
    <div>
      <h2>Thanks for your submission!</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <ThankYou />
      <h1>Fresh start!</h1>
    </div>
  );
}

export default App;
