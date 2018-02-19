import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../App.css';
import '../../css/bootstrap.min.css';

class ButtonDefault extends Component {
  render() {
    return (
     <div>

      {/* Indicates caution should be taken with this action */}
   
       <Button className="btn btn-lg btn-default">Default-lg</Button>
       <Button className="btn btn-sm btn-default">Default-sm</Button>
       <Button className="btn btn-xs btn-default">Default-xs</Button>

     </div>
     );         
}
}

export default ButtonDefault;