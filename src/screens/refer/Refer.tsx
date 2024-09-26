// EarnByReferScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

const Refer = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Earn Money By Refer</Text>
        <Text style={styles.subHeader}>Earn ₹100 for each referral.</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={{ uri: 'https://placehold.co/200' }} // Replace with your illustration URL
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Referral Code Section */}
      <View style={styles.referralContainer}>
        <Text style={styles.referralText}>Invite your contacts and earn rewards together! The more you refer, the more you earn.</Text>
        <View style={styles.referralCodeContainer}>
          <TextInput
            style={styles.referralInput}
            placeholder="Referral Code"
            value="E556DON"
            editable={false}
          />
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contacts List */}
      <View style={styles.contactsContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Invite a contact"
        />
        <Text style={styles.walletBalance}>Wallet balance: ₹1300.00</Text>
        {['John Wick', 'Jane Doe', 'Alice Smith', 'Bob Johnson'].map((contact, index) => (
          <View key={index} style={styles.contactItem}>
            <Text style={styles.contactName}>{contact}</Text>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    marginTop: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  referralContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  referralText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  referralCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  referralInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  copyButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginRight: 10,
  },
  copyButtonText: {
    color: '#fff',
  },
  shareButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  shareButtonText: {
    color: '#fff',
  },
  contactsContainer: {
    marginTop: 20,
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
  },
  walletBalance: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'right',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  contactName: {
    fontSize: 16,
    color: '#333',
  },
  inviteButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  inviteButtonText: {
    color: '#fff',
  },
});

export default Refer;
