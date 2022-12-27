import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class SearchScreen extends React.Component {
  render() {
    var data = this.props.navigation.getParam('data');
    var history = this.props.navigation.getParam('historyArray');
    console.log(data);
    console.log(history);

    return (
      <View>
        {history.map((event) => {
          if (event.title == data)
            return (
              <View>
                <Text style={styles.eventText}>
                  Title of Event is : - {event.title}
                </Text>
                <Text style={styles.eventText}>
                  Date of Event in UTC : - {event.event_date_utc}
                </Text>
                <Text style={styles.eventText}>
                  Date of Event in Unix : - {event.event_date_unix}
                </Text>
                <Text style={styles.eventText}>
                  Flight Number : - {event.flight_number}
                </Text>
                <Text style={styles.eventText}>
                  Details of Event : - {event.details}
                </Text>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => this.props.navigation.navigate('HomeScreen')}>
                  <Text style={styles.backText}> BACK </Text>
                </TouchableOpacity>
              </View>
            );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventText: { fontSize: 15, fontWeight: 'bold' },
  backText: { fontSize: 18, fontWeight: 'bold' },
  backButton: { borderRadius: 20, backgroundColor: 'yellow' },
});
