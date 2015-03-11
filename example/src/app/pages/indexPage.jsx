/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var HeaderTabs = require('../components/headerTabs.jsx');
var Footer = require('../components/footer.jsx');

var IndexPage = React.createClass({
  
  render: function() {
    return (
      <div>
        <HeaderTabs />
        <Footer />
      </div>
    );
  }
  
});

module.exports = IndexPage;