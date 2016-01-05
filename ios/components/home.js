/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var HomeNav = require('./homenav');
var Create = require('./create');

var {
  AppRegistry,
  NavigatorIOS,
  TabBarIOS,
} = React;

var Home = React.createClass({


  goCreate:function()
  {
      this.refs.nav.push({
        title:'我要吐槽',
        component:Create,

      })
  },

  render: function() {
    return (

      <NavigatorIOS
        ref="nav"
        style={{flex:1}}
        initialRoute={{
          title:'HomePage',
          rightButtonTitle:'我要吐槽',
          component: HomeNav,
          onRightButtonPress:()=>this.goCreate(),
        }}

      />
    );
  }
});

module.exports = Home;
