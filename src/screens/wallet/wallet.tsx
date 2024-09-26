// WalletScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Wallet = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Wallet Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wallet</Text>
        <Text style={styles.totalEarnings}>Total Earning</Text>
        <Text style={styles.earningsAmount}>₹390.00</Text>
      </View>

      {/* Wallet Actions */}
      <View style={styles.walletActionsContainer}>
        <TextInput
          style={styles.input}
          placeholder="UPI ID"
        />
        <TextInput
          style={styles.input}
          placeholder="Withdrawal Amount"
          keyboardType="numeric"
        />
        <Text style={styles.minBalanceText}>
          A minimum balance of ₹300 is required in your wallet.
        </Text>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  totalEarnings: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  earningsAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 5,
  },
  walletActionsContainer: {
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
  },
  minBalanceText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  withdrawButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Wallet;
