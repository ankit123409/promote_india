import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface CommonDatePickerProps {
  initialDate?: Date;
  onConfirm: (date: Date) => void;
  onCancel?: () => void;
  buttonTitle?: string;
  type?:string
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
  initialDate = new Date(),
  onConfirm,
  onCancel,
  buttonTitle = 'Select Date',
  type
}) => {
  const [date, setDate] = useState(initialDate);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* Touchable element styled as a DOB input */}
      <TouchableOpacity style={styles.dateInput} onPress={() => setOpen(true)}>
        <Text style={styles.dateText}>
          {date.toISOString()} 
        </Text>
      </TouchableOpacity>

      <DatePicker
        modal
        mode={type ? type :"date"} // Only show date picker
        open={open}
        date={date}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
          onConfirm(selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
          if (onCancel) onCancel();
        }}
      />
    </View>
  );
};

export default CommonDatePicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dateInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
});
