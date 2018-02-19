import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../App.css';
import '../../css/bootstrap.min.css';

class ButtonState extends Component {
  render() {
    return (
     <div>

       <Button bsSize="large" active>
           Active
      </Button>

      <Button bsSize="large" disabled>
          Disabled
        </Button>

       
    </div>
     );         
}
}

export default ButtonState;