import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        items:[],
    }
  }

  componentDidMount () {
    fetch('http://localhost:4004')
      .then (res => res.json())
      .then (json => {
          this.setState ({
            isLoaded: true,
            items: json,
          })
    });
  }

  render () {
    var { isLoaded, items} = this.state;

    if (!isLoaded) {
      return (
        <div className="App" > 
          <h1> Ups!........</h1>
        </div>
      );
    }else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <ol key={item.id}>
                  <h1>{item.title}</h1>
                  <h2>{item.text}</h2>
                  <h3>{item.teachers}</h3>
              </ol>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;