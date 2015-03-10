/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var imageData = require('../data/imageData');

var AwardPage = React.createClass({
  
  render: function() {
    return (
      <div className="awardPage">
        <div className="awardTitle">
          <img src={imageData.prefix + imageData.title} />
        </div>
        <Paper zDepth={5}>
          <h3>獲獎紀錄</h3>
          <img src={imageData.prefix + imageData.award.content} />
        </Paper>
      </div>
    );
  }
  
});

module.exports = AwardPage;