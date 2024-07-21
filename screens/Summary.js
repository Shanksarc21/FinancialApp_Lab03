import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Transactions</Text>
          <Text style={styles.value}>10</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Balance</Text>
          <Text style={styles.value}>$692.39</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.heading}>High Spending</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nike</Text>
          <Text style={styles.value}>$250.00</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Low Spending</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Tim Hortons</Text>
          <Text style={styles.value}>$7.89</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  value: {
    fontSize: 16,
    color: 'black',
  },
});

export default Summary;
