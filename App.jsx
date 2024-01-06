import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      button: 'Start',
      last: null,
    };

    // var do timer
    this.timer = null;

    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
  }

  start() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({button: 'Start'});
    } else {
      this.timer = setInterval(() => {
        this.setState({number: this.state.number + 0.1});
      }, 100);

      this.setState({button: 'Stop'});
    }
  }

  clean() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({number: 0, button: 'Start', last: this.state.number});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.img} />
        <Text style={styles.timer}>{this.state.number.toFixed(2)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText} onPress={this.start}>
              {this.state.button}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clean}>
            <Text style={styles.btnText}>Clean</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastArea}>
          <Text style={styles.runText}>
          {this.state.last > 0 ? `Last Run: ${this.state.last.toFixed(2)}s` : ''}  
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  lastArea: {
    marginTop: 40,
  },
  runText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff',
  },
});

export default App;
