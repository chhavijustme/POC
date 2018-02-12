import React, { Component } from 'react';

import { PageHeader, Breadcrumb } from 'react-bootstrap';
import testbutton from './components/Button.js'
import './App.css';
import './css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div>
          
          <PageHeader>
            Example page header <small>Subtext for header</small>
          </PageHeader>

          <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
          Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <Button>Default</Button>

  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary">Primary</Button>

  {/* Indicates a successful or positive action */}
  <Button bsStyle="success">Success</Button>

  {/* Contextual button for informational alert messages */}
  <Button bsStyle="info">Info</Button>

  {/* Indicates caution should be taken with this action */}
  <Button bsStyle="warning">Warning</Button>

  {/* Indicates a dangerous or potentially negative action */}
  <Button bsStyle="danger">Danger</Button>

  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
  <Button bsStyle="link">Link</Button>

        <h1>Journey to GSoC</h1>
      </div>
      </div>
    );
  }
}

export default App;
