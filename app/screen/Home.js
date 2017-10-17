import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from '../components/Button';
import API from '../API/api.js';
import styles from './styles.js';

export default class Home  extends Component {
  constructor(props) {
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
    this.state = {
      stockName: 'Apple',
      stockCode: 'NASDAQ:AAPL',
      stockIndex: '0.00',
      stockChangeRaw: '+0.00',
      stockChangePercent: '0.00%'
    };
    this.changeIndex('Apple', 'NASDAQ:AAPL');
  }
  
  changeIndex(stockName, stockCode){
    API(stockCode).then((data)=>{
      this.setState({...data, stockName, stockCode});
    });
  }

  render() {
    let colorStyle = (this.state.stockChangeRaw && this.state.stockChangeRaw[0] == '+')
      ? styles.green
      : styles.red;
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.stockName}>
            {this.state.stockName}
          </Text>
          <Text style={styles.stockIndex}>
            {this.state.stockIndex}
          </Text>
          <Text style={[styles.stockChange, colorStyle]}>
            {this.state.stockChangeRaw}
            ({this.state.stockChangePercent})
          </Text>
        </View>

        <View style={styles.footer}>
          <Button name="SET" code="INDEXBKK:SET" onPress={this.changeIndex}/>
          <Button name="Apple" code="NASDAQ:AAPL" onPress={this.changeIndex}/>
          <Button name="Google" code="NASDAQ:GOOG" onPress={this.changeIndex}/>
          <Button name="Microsoft" code="NASDAQ:MSFT" onPress={this.changeIndex}/>
          <Button name="Facebook" code="NASDAQ:FB" onPress={this.changeIndex}/>
          <Button name="Alibaba" code="NYSE:BABA" onPress={this.changeIndex}/>
          <Button name="Samsung" code="KRX:005930" onPress={this.changeIndex}/>
          <Button name="HP" code="NYSE:HPQ" onPress={this.changeIndex}/>
          <Button name="IPC MEXICO" code="INDEXBMV:ME" onPress={this.changeIndex}/>
        </View>
      </View>
    );
  }
}
