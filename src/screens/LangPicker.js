import React from 'react';
import {useState} from 'react';
import {TouchableOpacity, View, Text, Image, I18nManager, Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import {ScaledSheet} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function LangPicker({navigation}) {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState();
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
console.log(lang);

  return (
    <View>
      <Image
        source={require('../assets/images/logo2.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{t('اختر لغة التطبيق')}</Text>

<SelectDropdown
	data={['العربية', 'English']}
  buttonStyle={{
    borderRadius: 10,
    elevation: 5,
    marginTop: 30,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
  }}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
    setLang(selectedItem);// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
  rowTextStyle={{fontSize: 18, fontFamily: 'Cairo-Bold', color: 'gray'}}

	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
  renderDropdownIcon={() => {
    return (
      <Entypo
        style={{right: 10, position: 'absolute'}}
        name="chevron-down"
        color="#B70B0B"
        size={30}
      />
    );
  }}
  defaultButtonText={t('إختر اللغة')}
  buttonTextStyle={{
    fontSize:18, fontFamily:'Cairo-Bold',color:'gray'
    
  }}
/>
      <TouchableOpacity
        onPress={() => {
          if (lang == 'English') {
            AsyncStorage.setItem('language','en')
            I18nManager.forceRTL(true)
            RNRestart.Restart()
          }

          if (lang == 'العربية') {
            AsyncStorage.setItem('language','ar')
            I18nManager.forceRTL(false)
            RNRestart.Restart()

          }
          if(lang == null){

            Alert.alert(
             t( "الرجاء إختيار اللغة"))
            
          }
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>{t('موافق')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = ScaledSheet.create({
  image: {
    resizeMode: 'contain',
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 80,
  },
  text: {
    marginTop: 100,
    alignSelf: 'center',
    fontSize: 22,
    fontFamily: 'Cairo-Regular',
    color: 'gray',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 90,
    elevation: 5,
    backgroundColor: '#B70B0B',
    height: 50,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {fontSize: 17, fontFamily: 'Cairo-Bold', color: 'white'},
});
