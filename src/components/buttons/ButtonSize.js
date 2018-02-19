import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../App.css';
import '../../css/bootstrap.min.css';

class ButtonSize extends Component {
  render() {
    return (
     <div>

       <Button bsSize="large"> Large button</Button>
       <Button>Default button</Button>
       <Button bsSize="small">Small button</Button>
       <Button bsSize="xsmall"> Extra small button </Button>
       
    </div>
     );         
}
}

export default ButtonSize;