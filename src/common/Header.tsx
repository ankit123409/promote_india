import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; 

interface CommonHeaderProps {
  title: string;
  onBackPress: () => void;
}

const Header: React.FC<CommonHeaderProps> = ({ title, onBackPress }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightSpace} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
  
    // backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical:10,
    height: Platform.OS === 'ios' ? 44 : 56, // Adjust height for different platforms
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // Ensures the title takes up space between the buttons
  },
  rightSpace: {
    width: 32, // Placeholder width to balance the layout
  },
});
