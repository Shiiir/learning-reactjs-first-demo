/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var imageData = require('../data/imageData');

var AboutPage = React.createClass({
  
  render: function() {
    return (
      <div className="aboutPage">
        <div className="aboutTitle">
          <img src={imageData.prefix + imageData.title} />
        </div>
        <img src={imageData.prefix + imageData.about.main} />
        <Paper zDepth={5}>
          <h3>關於我們</h3>
          <img src={imageData.prefix + imageData.about.timeline} />
          <img src={imageData.prefix + imageData.about.content} />
        </Paper>
      </div>
    );
  }
  
});

module.exports = AboutPage;