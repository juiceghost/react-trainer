
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
  //const [name, setName] = useState('');

  /* const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting name: ${props.name}`);
    props.setName('');
  } */

  console.log("ContactForm ran! " + props.name)
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Your name:
      <input 
      type="text"
      value={props.name}
      onChange={e => props.setName(e.target.value)}
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
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting name: ${name}`);
    setName('');
    setShowForm(false);
    setShowThanks(true);
  }
// A && B returns the value A if A can be coerced into false; otherwise, it returns B.

  return (
    <div>
      <Navbar />
      {showForm ? <ContactForm 
      name={name} 
      setName={setName} 
      handleSubmit={handleSubmit} /> : null}
      {showThanks ? <ThankYou /> : null}

      {/*showForm && <ContactForm 
      name={name} 
      setName={setName} 
      handleSubmit={handleSubmit} />*/}
      
      {/*showThanks && <ThankYou />*/}
      <h1>Fresh start!</h1>
    </div>
  );
}

export default App;
