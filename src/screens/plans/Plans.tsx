// PlansScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { goBack, reset } from '../../navigation/RootNavigation';
import Header from '../../common/Header';

const Plans = () => {
  const plans = [
    { type: 'Basic', price: '1199/year' },
    { type: 'Advanced', price: '1999/year' },
    { type: 'Premium', price: '2999/year' },
  ];

  const features = [
    'Branding Frames',
    'Ready made Templates',
    'Website',
    'Block ads',
    'Watermark remover',
    'Self file upload',
    'On call support',
    'Anniversary',
    'Birthday',
    'Schedule post',
    'Contacts per group',
    'New groups',
    'Monthly'
  ];

  const planDetails = {
    Basic: ['✔', '✔', '✔', '✖', '✖', '✔', '✖', '25', '7 days', '2 days', 'upto 200 contacts', '4', 'No Cost'],
    Advanced: ['✔', '✔', '✔', '✔', '✔', '✔', '✔', '150', '7 days', '15 days', 'upto 400 contacts', '5', '249/yr'],
    Premium: ['✔', '✔', '✔', '✔', '✔', '✔', '✔', '500', '30 days', '30 days', 'upto 1200 contacts', '10', '349/yr']
  };

  return (
    <ScrollView style={styles.container}>
      <Header title={'Plans'} onBackPress={()=>reset("Schedule")
      } />
      {/* <Text style={styles.header}>Plans</Text> */}
      {/* <TouchableOpacity onPress={()=>goBack()}>
        <Text>12</Text>
      </TouchableOpacity> */}

      <View style={styles.plansContainer}>
        {plans.map((plan, index) => (
          <View key={index} style={styles.plan}>
            <Text style={styles.planType}>{plan.type}</Text>
            <Text style={styles.planPrice}>{plan.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.featuresContainer}>
      <View style={styles.featureRow}>
            <Text style={styles.featureText}>{"feature"}</Text>
            <Text style={styles.planFeature}>{"Free"}</Text>
            <Text style={styles.featureText}>{"basic"}</Text>
            <Text style={styles.planFeature}>{"adavnce"}</Text>
            {/* <Text style={styles.planFeature}>{"Free"}</Text> */}

            {/* <Text style={styles.planFeature}>{planDetails.Advanced[index]}</Text> */}
            {/* <Text style={styles.planFeature}>{planDetails.Premium[index]}</Text> */}
          </View>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Text style={styles.featureText}>{feature}</Text>
            <Text style={styles.planFeature}>{planDetails.Basic[index]}</Text>
            <Text style={styles.planFeature}>{planDetails.Advanced[index]}</Text>
            <Text style={styles.planFeature}>{planDetails.Premium[index]}</Text>
          </View>
        ))}
      </View>

      <View style={styles.purchaseButtonContainer}>
        <Text style={styles.purchaseButtonText}>Purchase Plan</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  plansContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  plan: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  planType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  planPrice: {
    fontSize: 14,
    color: '#666',
  },
  featuresContainer: {
    paddingHorizontal: 20,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  planFeature: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  purchaseButtonContainer: {
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  purchaseButtonText: {
    textAlign: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    paddingVertical: 15,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default Plans;
