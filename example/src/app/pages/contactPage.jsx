/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var imageData = require('../data/imageData');

var ContactPage = React.createClass({
  
  render: function() {
    return (
      <div className="contactPage">
        <div className="contactTitle">
          <img src={imageData.prefix + imageData.title} />
        </div>
        <Paper zDepth={5}>
          <h3>聯絡我們</h3>
          <img src={imageData.prefix + imageData.contact.content} />
        </Paper>
      </div>
    );
  }
  
});

module.exports = ContactPage;