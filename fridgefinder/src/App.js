import logo from './logo.svg';
import './App.css';

function App() {
  /*
  Will be making my own proxy in Flask when I get there, but for now I am using the
  one I have listed on the line 10(cors-anywhere.herokuapp.com)
  */
  const makeRequest = async () => {
    let res = await fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3', {
      method: 'get',
      // mode: '*cors',
      headers: {
        'Content-Type': 'application/json'
      },

    })
    let response = await res.json();
    console.log(response);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
      <div>
        <button onClick={makeRequest}>Make Request</button>
      </div>
    </>
  );
}

export default App;
