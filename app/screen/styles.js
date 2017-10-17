import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#89C4F4"
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  stockName: {
    fontSize: 30
  },
  stockIndex: {
    fontSize: 60
  },
  stockChange: {
    fontSize: 40
  },
  button: {
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  red: {
    color: 'red'
  },
  green: {
    color: 'green'
  }
});

export default styles;