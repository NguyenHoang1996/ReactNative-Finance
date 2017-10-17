
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from "./styles";

class StockButton extends Component {
  render() {
    console.log(this.props.name); //SET
    console.log(this.props.code); //INDEXBKK:SET
    console.log(this.props.onPress); // [Function]

    return (
      <TouchableOpacity
      style={styles.button}
        onPress={() => {
          this.props.onPress(
             this.props.name,
             this.props.code
          )
        }}>
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default StockButton;
