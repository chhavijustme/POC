import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../App.css';
import '../../css/bootstrap.min.css';

class ButtonBlock extends Component {
  render() {
  	const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    
    return (
     <div>

         <div className="well" style={wellStyles}>
           <Button bsStyle="primary" bsSize="large" block>
             Block level button
           </Button>
           <Button bsSize="large" block>
             Block level button
           </Button>
         </div>
       
    </div>
     );         
}
}

export default ButtonBlock;