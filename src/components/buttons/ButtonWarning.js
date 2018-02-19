import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../App.css';
import '../../css/bootstrap.min.css';

class ButtonWarning extends Component {
  render() {
    return (
     <div>

      {/* Indicates caution should be taken with this action */}
      <Button className="btn btn-lg btn-warning">Warning-lg</Button>
      <Button className="btn btn-sm btn-warning">Warning-sm</Button>
      <Button className="btn btn-xs btn-warning">Warning-xs</Button>

     </div>
     );         
}
}

export default ButtonWarning;