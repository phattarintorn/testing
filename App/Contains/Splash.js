import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native'

export default class Splash extends React.Component {

  state = {
    // isLogin: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('ChangeLan');
    }, 2000);
  }


  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#015744',
  },
})