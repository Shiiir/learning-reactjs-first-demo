/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');

var imageData = require('../data/imageData');

var Footer = React.createClass({
  
  render: function() {
    return (
        <div className="footer">
            <img src={imageData.prefix + imageData.footer} />
        </div>
    );
  }
  
});

module.exports = Footer;