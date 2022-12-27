import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      randomUserData: [],
      loadingExtraData: false,
      page: 1,
      searchText: '',
    };
  }

  
  componentDidMount() {
    this.LoadRandomData();
  }
  LoadRandomData = async() => {
   await fetch(
      `https://api.spacexdata.com/v3/history?results=2&page=${this.state.page}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          randomUserData:
            this.state.page === 1
              ? responseJson
              : [...this.state.randomUserData, ...responseJson],
        });
      })
      .catch((error) => {
        console.log('Error selecting random data: ' + error);
      });
      console.log(this.state.randomUserData)
  };

 LoadMoreRandomData = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => this.LoadRandomData()
    );
  };
   renderCustomItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DetailScreen', {
              data: item,
            })
          }>
          <Text style={styles.eventText}>
            Title of Event is : - {item.title}
          </Text>
          <Text style={styles.eventText}>
            Date of Event in UTC : - {item.event_date_utc}
          </Text>
          <Text style={styles.eventText}>
            Date of Event in Unix : - {item.event_date_unix}
          </Text>
          <Text style={styles.eventText}>
            Flight Number : - {item.flight_number}
          </Text>
          <Text style={styles.eventText}>
            Details of Event : - {item.details}
          </Text>
          <Text> {'\n'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <TextInput
              placeholder="Enter Title"
              onChangeText={(text) => this.setState({ searchText: text })}
              style={styles.inputStyle}
            />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SearchScreen', {
                  data: this.state.searchText,
                  historyArray: this.state.randomUserData,
                })
              }
              style={styles.searchButton}>
              <Text style={styles.searchText}>Search </Text>
            </TouchableOpacity>
          </View>
          
            <FlatList
          data={this.state.randomUserData}
          renderItem={this.renderCustomItem}
          style={{ width: 350, height: 800 }}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0}
          onEndReached={this.LoadMoreRandomData}
        />
        />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightblue',
  },
  inputStyle: {
    fontSize: 18,
  },
  searchText: { fontSize: 18, fontWeight: 'bold' },
  searchButton: { borderRadius: 20, backgroundColor: 'yellow' },
  eventText: { fontSize: 15, fontWeight: 'bold' },
});
