var React = require('react');
var mui = require('material-ui');

var imageData = require('../data/imageData');

var HomeContent = React.createClass({
  render: function() {
    var images = this.props.data.map(function(item){
        return (<img src={imageData.prefix + item} />);
    });
    
    return (
        <div>
            {images}
        </div>
    );
  }
  
});

module.exports = HomeContent;