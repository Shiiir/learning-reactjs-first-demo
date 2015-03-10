var React = require('react');
var ImageWall = require('../components/imageWall.jsx');

var imageData = require('../data/imageData');

var HomePage = React.createClass({
  render: function() {
    
    return (
      <div className="imageWall">
        <ImageWall data={imageData.home} />
      </div>
    );
  }
  
});

module.exports = HomePage;
