import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA = [
  {
    IDNation: "01000US",
    Nation: "United States",
    "ID Year": 2020,
    Year: "2020",
    id: "1",
    Population: 326569308,
    "Slug Nation": "united-states",
  },
  {
    IDNation: "01000US",
    Nation: "United States",
    "ID Year": 2019,
    Year: "2019",
    id: "2",
    Population: 324697795,
    "Slug Nation": "united-states",
  },
  {
    IDNation: "01000US",
    Nation: "United States",
    "ID Year": 2018,
    Year: "2018",
    id: "3",
    Population: 322903030,
    "Slug Nation": "united-states",
  },
  {
    "ID Nation": "01000US",
    Nation: "United States",
    "ID Year": 2017,
    Year: "2017",
    id: "4",
    Population: 321004407,
    "Slug Nation": "united-states",
  },
  {
    IDNation: "01000US",
    Nation: "United States",
    "ID Year": 2016,
    id: "5",
    Year: "2016",
    Population: 318558162,
    "Slug Nation": "united-states",
  },
  {
    IDNation: "01000US",
    Nation: "United States",
    "ID Year": 2015,
    id: "6",
    Year: "2015",
    Population: 316515021,
    "Slug Nation": "united-states",
  },
  {
    IDNation: "01000US",
    Nation: "United States",
    "ID Year": 2014,
    Year: "2014",
    id: "7",
    Population: 314107084,
    "Slug Nation": "united-states",
  },
  {
    IDNation: "01000US",
    Nation: "United States",
    "ID Year": 2013,
    Year: "2013",
    id: "8",
    Population: 311536594,
    "Slug Nation": "united-states",
  },
];

const Item = ({ Nation, Year, Population, IDNation }) => {
  return (
    <View style={styles.item}>
      <Text>{Nation}</Text>
      <Text>{Year}</Text>
      <Text>{Population}</Text>
      <Text>{IDNation}</Text>
    </View>
  );
};
const logout = async () => {
  await AsyncStorage.removeItem("token");
  this.props.navigation.navigate("Login");
};

const renderItem = ({ item }) => (
  <Item
    Nation={item.Nation}
    Year={item.Year}
    Population={item.Population}
    IDNation={item.IDNation}
  />
);
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: DATA,
      error: null,
      searchValue: "",
    };
    this.arrayholder = DATA;
  }

  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data =
       `${item.Population}`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    return (
      <View style={styles.container}>
          <Button onPress={logout} title="Logout" />
          <View style={styles.header}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
           
          }}
        >
          Data Screen
        </Text>
        </View>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      
      </View>
    );
  }
}

export default Admin;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop:50,
    justifyContent: "space-between",
  },
});
