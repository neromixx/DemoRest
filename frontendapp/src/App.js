import React, { Component } from 'react';


class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: true,
    }    
  }
  
  componentDidMount() {
    
    
    fetch('http://127.0.0.1:8000/api/v1/cars/all/')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })

        });

  }
  render() {
      var { isLoaded, items } = this.state;
      if (!isLoaded){
        return <div>Loading...</div>;
      }

      else {
        return(
          <div className="App">
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  Name {item.vin} | {item.user}
                </li>
              ))};
            </ul>
          </div>
        );
      }
         
  }
}

export default App;
