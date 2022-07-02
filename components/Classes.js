import React from 'react';
import {
  Section,
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

export default function Classes({ navigation }) {
  // console.log(building)
  return (
    <>
      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 0,
            backgroundColor: 'gainsboro',
            height: 80,
          }}>
          <Text style={{ fontSize: 25, marginLeft: 80, color: 'black' }}>
            BUILDINGS A
          </Text>
          <Icon name="users" size={30} color="maroon" />
        </View>

        <ScrollView>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              // backgroundColor: 'gray',
              marginTop: 10,
            }}>
            <TouchableOpacity style={styles.box} onPress={
              () => {
                console.log('abcd');
                // console.log(navigation.params.building)
              }
            }>
              <Text style={styles.box_text}>A1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A11</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A12</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A13</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A14</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A16</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A17</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A18</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A19</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Text style={styles.box_text}>A20</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: '10%' }}>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookIt');
                }}>
                <Icon name="arrow-right" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
              marginTop: 48,
            }}>
            <Text style={{ color: 'maroon' }}>
              Allright Reserved to Smiu.edu.pk
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  box_text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
  btnBox: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 40,
    // backgroundColor: 'maroon',
    marginTop: 40,
    borderRadius: 5,
    // marginLeft: 120,

  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 40,
    borderRadius: 5,
    // marginLeft: 120,
  },
  mytext: {
    // color: '#CD2027',
    color: 'white',
    fontSize: 20,
  },
});
