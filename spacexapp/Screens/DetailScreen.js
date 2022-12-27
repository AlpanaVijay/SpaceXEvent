import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class DetailScreen extends React.Component {
  render() {
    var data = this.props.navigation.getParam('data');
    console.log(data);
    return (
      <View>
        <Text style={styles.eventText}>Title of Event is : - {data.title}</Text>
        <Text style={styles.eventText}>
          Date of Event in UTC : - {data.event_date_utc}
        </Text>
        <Text style={styles.eventText}>
          Date of Event in Unix : - {data.event_date_unix}
        </Text>
        <Text style={styles.eventText}>
          Flight Number : - {data.flight_number}
        </Text>
        <Text style={styles.eventText}>
          Details of Event : - {data.details}
        </Text>
        <TouchableOpacity style = {styles.backButton}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style = {styles.backText}> BACK </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  eventText: { fontSize: 15, fontWeight: 'bold' },
  backText: { fontSize: 18, fontWeight: 'bold' },
  backButton: { borderRadius: 20, backgroundColor: 'yellow' },
});
