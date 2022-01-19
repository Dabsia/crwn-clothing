import React, {Component} from 'react';
import './App.css';
import HomePage from './hompage.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return( 
        <div className='container'>
          <HomePage/>
      </div>
    )
  }
    
}

export default App;
