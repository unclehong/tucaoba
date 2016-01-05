/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var List = require('./list');

var {
  View,
  TabBarIOS,
  TabBarIOS,
} = React;

var HomeNav = React.createClass({
  render: function() {
    return (

      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">



        <TabBarIOS.Item
          systemIcon="history">
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="history">
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="history">
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="history">
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
});


module.exports = HomeNav;
