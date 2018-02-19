import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../App.css';
import '../../css/bootstrap.min.css';

class ButtonDanger extends Component {
  render() {
    return (
     <div>

      {/* Indicates caution should be taken with this action */}
      <Button className="btn btn-lg btn-danger">Danger-lg</Button>
      <Button className="btn btn-sm btn-danger">Danger-sm</Button>
      <Button className="btn btn-xs btn-danger">Danger-xs</Button>

     </div>
     );         
}
}

export default ButtonDanger;