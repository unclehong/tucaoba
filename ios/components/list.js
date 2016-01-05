/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Detail = require('./detail');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} = React;


var articles = [
  {
    'id':'1',
    'title':'it\'s a fine day',
    'author': 'braveMan',
    'content':'alsdfj asdkotpi ks le ssdilasdf, ssdfjlaskdj,asfgf;sdflk',
    'deadline':'14821888',
  },
  {

    'id':'2',
    'title':'Come on ! guys',
    'author': 'braveMan',
    'content':'Come on ! guys,adf,okjles,mlaks le ske s;a ejkk lsjhwl lsd dso;sda',
    'deadline':14821899,

  },
  {
    'id':'3',
    'title':'it\'s a fine day',
    'author': 'braveMan',
    'content':'alsdfj asdkotpi ks le ssdilasdf, ssdfjlaskdj,asfgf;sdflk',
    'deadline':14821888,
  },
  {
    'id':'4',
    'title':'it\'s a fine day',
    'author': 'braveMan',
    'content':'alsdfj asdkotpi ks le ssdilasdf, ssdfjlaskdj,asfgf;sdflk',
    'deadline':14821888,
  }

];


var List = React.createClass({

  componentDidMount:function()
  {
    this.fetchData();
  },


  fetchData:function(){
    var url = 'http://192.168.1.103:3344/index.php/article/articleList';
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        })
      })
      .done();
  },



  getInitialState:function()
  {
    // var ds = new ListView.DataSource({
    //   rowHasChanged:(r1,r2) => r1 !== r2
    // });
    //
    // return {
    //   dataSource:ds.cloneWithRows(articles),
    // };

    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },



  goDetail: function(id,title,content)
  {
      this.props.navigator.push(
      {

          title:id,
          component: Detail,
          passProps:{id:'this is value!',title:title,content:content},
      });
  },



  render: function() {
    return (

      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.item}
        />
      </View>
    );
  },


  item: function(course) {

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress = {() => this.goDetail(course.id,course.title,course.content)}
          >


        <Text style={styles.welcome}>
          {course.title}
        </Text>

        </TouchableHighlight>

        <Text style={styles.instructions}>
          {course.content}
        </Text>
      </View>
    );
  }


});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
    paddingTop:20,
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});


module.exports = List;
