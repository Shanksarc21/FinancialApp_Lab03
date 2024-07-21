import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const transactions = [
  { id: '1', name: 'Starbucks', amount: '$12.00', date: '2024-07-20' },
  { id: '2', name: 'Apple Store', amount: '$101.00', date: '2024-07-01' },
  { id: '3', name: 'Sephora', amount: '$120.00', date: '2024-07-05' },
  { id: '4', name: 'Shoppers Drug Mart', amount: '$12.00', date: '2024-07-07' },
  { id: '5', name: 'Pizza Hut', amount: '$24.00', date: '2024-07-10' },
  { id: '6', name: 'Cheesecake Factory', amount: '$45.00', date: '2024-07-12' },
  { id: '7', name: 'Nike', amount: '$250.00', date: '2024-07-15' },
  { id: '8', name: 'Tim Hortons', amount: '$7.89', date: '2024-07-18' },
  { id: '9', name: 'Whole Foods', amount: '$78.00', date: '2024-07-20' },
  { id: '10', name: 'Cineplex', amount: '$42.50', date: '2024-07-22' },
];

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAmount}>{item.amount}</Text>
              <MaterialIcons name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginVertical: 4,
    borderRadius: 4,
    elevation: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  itemAmount: {
    fontSize: 16,
    color: '#333',
  },
});

export default TransactionsList;
