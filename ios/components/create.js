/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var List = require('./list');
var Home = require('./home');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  AlertIOS,
} = React;

var Create = React.createClass({

  goList:function(){
    this.props.navigator.push(
    {
        title:'list',
        component: List,
    });
  },

  goHome:function(){

    this.props.navigator.popToTop();
  },


  onSubmit:function()
  {
    var url = 'http://192.168.1.103:3344/index.php/article/insertArticle';

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
      })
    })
    .then((response) => response.text())
    .then((responseText)=>{
      //console.log(responseText);

      AlertIOS.alert(
        'success',
        'where do you want to go now?',
        [
          {text: 'mylist', onPress: () => this.goList()},
          {text: 'homepage', onPress: () => this.goHome()},
        ]
      )

    })
    .catch((error)=>{
      console.log(error);
    })
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.TextInputTitle}
          placeholder='Title'
          onChangeText = {(text) => this.setState({title: text})}
          //value={this.state.title}
        />

        <TextInput
          style={styles.TextInputContent}
          placeholder='Content'
          onChangeText = {(text) => this.setState({content: text})}
          //value={this.state.content}
        />

        <TouchableHighlight style={styles.btnSubmit}
          onPress={()=>this.onSubmit()}
        >

        <Text style={{color:'#ffffff'}}>Submit</Text>

        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  TextInputTitle:{
    flex:1,
    marginTop:100,
    backgroundColor:'red',
  },

  TextInputContent:{

    flex:6,
    backgroundColor:'blue',
  },

  btnSubmit:{

    flex:1,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = Create;
