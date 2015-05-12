import React from 'react';

import jQuery from 'jquery';
global.jQuery = jQuery;
import bootstrap from 'bootstrap';


class HelloWorld extends React.Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    );
  }
};


React.render(<HelloWorld />, document.getElementById('app'));
