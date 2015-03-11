/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var Tabs = mui.Tabs;
var Tab = mui.Tab;

var HomePage = require('../pages/homePage.jsx');
var AboutPage = require('../pages/aboutPage.jsx');
var AwardPage = require('../pages/awardPage.jsx');
var ContactPage = require('../pages/contactPage.jsx');

var linkData = require('../data/linkData');
var imageData = require('../data/imageData');
var _onActive = function(tab) {
    window.location = tab.props.route;
};

var HeaderTabs = React.createClass({
  render: function() {
    var tabs = linkData.header.map(function(item) {
        var loadPage = item.link;
        var tabContent;
        if (item.tag) {
            tabContent = <Tab label={item.name} route={loadPage} onActive={_onActive} />
        } else {
            switch(loadPage) {
                case "AboutPage":
                    tabContent = <Tab label={item.name}><AboutPage /></Tab>
                    break;
                case "AwardPage":
                    tabContent = <Tab label={item.name}><AwardPage /></Tab>
                    break;
                case "ContactPage":
                    tabContent = <Tab label={item.name}><ContactPage /></Tab>
                    break;
                default:
                    tabContent = <Tab label={item.name}><HomePage /></Tab>
                    break;
            }
            
        }
        
        return (
            {tabContent}
        );
    });
    
    return (
        <div>
            <Tabs tabWidth={100}>
                {tabs}
            </Tabs>
        </div>
    );
  },
 
});

module.exports = HeaderTabs;