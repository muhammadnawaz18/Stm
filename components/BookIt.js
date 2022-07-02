import React, { useState } from 'react';
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
import CheckBox from '@react-native-community/checkbox';
import TimeInput from '@tighten/react-native-time-input';
import RadioButtonRN from 'radio-buttons-react-native';
import { buildingName } from './Home'

const BookIt = ({ route, navigation }) => {

  console.log('this is building ====> ', buildingName)
  // const { thisData, thisData2 } = route.params;
  // console.log(thisData)


  const data = [
    {
      label: 'Monday'
    },
    {
      label: 'Tuesday'
    },
    {
      label: 'Wednesday'
    },
    {
      label: 'Thursday'
    },
    {
      label: 'Friday'
    }
  ];
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [SubName, setSubName] = useState('');
  const [sec, setsec] = useState('');
  const [corsins, setcorsins] = useState('');
  const [StartTime, setStartTime] = useState('');
  const [EndTime, setEndTime] = useState('');
  const [Day, setDay] = useState('');


  const handleTimeChange = (StartTime, validTime) => {
    if (!validTime) return;

    setStartTime(StartTime);
  }
  // console.log('Start time', StartTime)

  const EndhandleTimeChange = (EndTime, EvalidTime) => {
    if (!EvalidTime) return;

    setEndTime(EndTime);
  }
  // console.log('end time', EndTime)

  // console.log(Mon)
  const createClass = async () => {

    // console.log('clicked')
    if (SubName && sec && corsins && Day) {


      await fetch(`http://10.0.2.2:5000/api/addSlot`, {
        method: "POST",
        body: JSON.stringify({
          "building_name": "A",
          "class_name": "A1",
          "course": SubName,
          "section": sec,
          "teacher_name": corsins,
          "st_time": StartTime,
          "end_time": EndTime,
          "day": Day,


          // -----------------------------------------
          // "duration": { EndTime },
          // "course": "english",
          // "section": "1C",
          // "teacher_name": "sir",

          // "st_time": "03pm",
          // "end_time": "04pm",
          // "duration": "2 hour",
          // "day": "Sun"
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((response) => {
          // if (response.status == 1) {
          if (response.status == 1) {
            console.log(response.msg)
            navigation.navigate('Booked');
          } else {
            // alert(response)
            console.log(response)
          }
        })
    } else {
      console.log('fil all fields')
    }

  };

  console.log(`
Subject name =====>  ${SubName}
Section name =====>  ${sec}
Course inst name =====>  ${corsins}
Start Time =====>  ${StartTime}
End Time =====>  ${EndTime}
Day =====> ${Day}
`)

  // console.log(`this is to know data type ${typeof (SubName)}`)
  // console.log(`this is to know data type ${typeof (sec)}`)
  // console.log(`this is to know data type ${typeof (corsins)}`)


  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <ScrollView>
            <View style={styles.container}>
              <Text
                style={{
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginTop: '5%'
                }}>
                CLASS DETAILS
              </Text>
              <View>
                <TouchableOpacity style={styles.box}>
                  <Text style={styles.box_text}>A1</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                placeholderTextColor={'maroon'}
                placeholder="SUBJECT NAME"
                style={styles.input}
                value={SubName}
                onChangeText={(e) => {
                  setSubName(e)
                }}
              />
              <TextInput
                placeholderTextColor={'maroon'}
                placeholder="SECTION"
                style={styles.input}
                value={sec}
                onChangeText={(e) => {
                  setsec(e)
                }}

              />
              <TextInput
                placeholderTextColor={'maroon'}
                placeholder="COURSE INSTRUCTOR"
                style={styles.input}

                value={corsins}
                onChangeText={(e) => {
                  setcorsins(e)
                }}
              />
              <View>

              </View>
              <View style={styles.timeStyle}>
                <View style={{ marginHorizontal: '1%' }} ><Text style={{ color: 'green' }}>Start time </Text>
                  <TimeInput

                    theme={{
                      inputBackgroundColor: 'gainsboro',
                      inputTextColor: 'black',
                      toggleButtonActiveBackgroundColor: 'maroon',
                    }}
                    setCurrentTime
                    onTimeChange={handleTimeChange}
                  />
                </View>
                <View style={{ marginHorizontal: '1%' }}><Text style={{ color: 'green' }}>End Time </Text>
                  <TimeInput
                    theme={{
                      inputBackgroundColor: 'gainsboro',
                      inputTextColor: 'black',
                      toggleButtonActiveBackgroundColor: 'maroon',
                    }}
                    setCurrentTime
                    onTimeChange={EndhandleTimeChange}
                  />
                </View>
              </View>


              <View
                style={{

                  width: '100%',
                }}
              >

                <RadioButtonRN
                  style={{ backgroundColor: 'gainsboro', padding: '5%', }}
                  animationTypes={['pulse']}
                  boxStyle={{ backgroundColor: 'white', borderColor: 'maroon', borderWidth: 1, elevation: 6 }}
                  textStyle={{ color: 'black', fontSize: 20, }}
                  boxActiveBgColor={'maroon'}
                  activeColor={'maroon'}

                  data={data}
                  selectedBtn={(e) => {
                    console.log(e.label)
                    setDay(e.label)
                  }

                  }
                />

              </View>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  // navigation.navigate('Booked');
                  createClass()
                  // console.log(`subject name ===>${SubName} Section ===>${sec} course instructor ===> ${corsins} start time ==> ${StartTime} end time ===> ${EndTime} day ===> ${Day}`)
                }}>
                <Icon name="check-circle" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {

                }}>
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'maroon' }}>
              Allright Reserved to Smiu.edu.pk
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 17,
    backgroundColor: 'gainsboro',
    width: 350,
    marginTop: 10,
    borderRadius: 5,
    padding: 20,
    height: 70,
    color: 'maroon',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  myLogo: {
    height: 220,
    width: 220,
  },
  btn: {
    width: 150,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  mytext: {
    color: 'white',
  },
  box_text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
  box: {

    height: 85,
    width: 85,
    backgroundColor: 'gainsboro',
    marginHorizontal: 8,
    marginVertical: 14,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'green',
  },
  boxStyle: {
    // margin: 5,
    // backgroundColor: 'red',
    marginTop: '5%',
    display: 'flex',
    alignItems: 'center',

  },
  checkbo: {
    // borderWidth: 1,
    // height: 20,
    // width: 20,
    // borderColor:"green"
    backgroundColor: "gainsboro",
    // borderColor:'black'

  },
  timeStyle: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
    // backgroundColor: 'gainsboro',
    // paddingVertical: '4%'
  }
});
export default BookIt;
