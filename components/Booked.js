import { React, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Booked = ({ navigation }) => {
  const [listArr, setlistArr] = useState([])
  useEffect(() => {
    fetch(`http://10.0.2.2:5000/api/listOfSlots`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // if (response.status == 1) {
        if (response) {
          console.log(response.slots)
          setlistArr(response.slots)
          // console.log("==================>",listArr)
        } else {
          alert(response)
          console.log(response)
        }
      })





  }, [])

  return (
    <>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.container}>
          <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 18 }}>
            All Reserved Classes
          </Text>
          <TextInput
            placeholderTextColor={'maroon'}
            placeholder="Search By Section "
            style={styles.input}
          />

          <ScrollView style={{ marginTop: 20 }}>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
            <View style={styles.bookedclasses}>
              <Text style={{ color: 'black' }}>SUBJECT NAME</Text>
              <Text style={{ color: 'black' }}>SECTION</Text>
              <Text style={{ color: 'black' }}>COURSE INSTRUCTOR</Text>
            </View>
          </ScrollView>
          <View
            style={{
              marginBottom: 100,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={styles.btn}>
              <Icon name="print" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Icon name="home" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={{ color: 'maroon' }}>
            Allright Reserved to Smiu.edu.pk
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    fontSize: 17,
    backgroundColor: 'gainsboro',
    width: 350,

    borderRadius: 5,
    // textAlign: 'center',
    padding: 20,
    height: 70,
    // color: '#CD2027'
    color: 'maroon',
  },
  container: {
    height: 770,

    flex: 1,
    alignItems: 'center',
  },

  btn: {
    width: 150,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 15,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  mytext: {
    color: 'white',
  },
  bookedclasses: {
    marginTop: 5,
    width: 400,
    height: 50,
    backgroundColor: 'gainsboro',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
export default Booked;
