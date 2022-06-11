import * as React from 'react';
import { Text, View,Image, StyleSheet, Pressable, Button, TouchableOpacity, ImageBackground, Dimensions, Alert, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const data = [
  {
    id: 1,
    name: 'Danil',
    surname: "Popov",
    photo: 'https://cdn.maximonline.ru/ec/5b/70/ec5b701b6dc90d27cbde89b6e19a0d07/728x728_1_848ca9ef388ee0fdc2c538677e5709a7@1024x1024_0xac120002_17992516771550233711.jpg',
    phone: "345346654"
  },
  {
    id: 2,
    name: 'Vlad',
    surname: "Petrov",
    photo: 'https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg', 
    phone: "2345477567"
  },
  {
    id: 3,
    name: 'Andrey',
    surname: "Kuskov",
    photo: 'https://klike.net/uploads/posts/2020-08/1597994286_2.jpg', 
    phone: "45687978976"
  },
  {
    id: 4,
    name: 'Ivan',
    surname: "Ivanov",
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7XXRpexnJt0HvmMOh8WIx3zWdu8XluBqNQ&usqp=CAU', 
    phone: '235664575876'
  }
];

const Stack = createNativeStackNavigator();

const Contacts = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Контакты' }}
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Профиль' }}
        />
        <Stack.Screen 
        name="Call" 
        component={CallScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="VideoCall" 
        component={VideoCallScreen}
        options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList 
      data={data}
      keyExtractor={
        item => item.id
      } 
      renderItem={({ item, id }) => {
        return (
          <TouchableOpacity style={{ 
            flexDirection: 'row', 
            backgroundColor: "white", 
            marginTop: "5%", 
            borderRadius: 25, 
            padding: "2%" }}
            onPress={() => {
              navigation.navigate("Profile", { name: item.name, photo: item.photo, phone: item.phone, surname: item.surname })
            }} >
            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: item.photo }} />
            <Text style={{ alignSelf: 'center', marginLeft: "5%" }}>{item.name} {item.surname}</Text>
          </TouchableOpacity>
        )
      }} />
      </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
  <View style={styles.profile}>
      <Image style = {styles.profilePicture}
        source={{
          uri: route.params.photo,
        }}
        />
      <Text style={styles.profileText}>{route.params.name} {route.params.surname}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ alignSelf: "center", color: 'grey' }}>Мобильный </Text>
        <Text style={{ fontSize: 16 }}>{route.params.phone}</Text>
      </View>

      <View style={styles.actionContainer}>
    
        <TouchableOpacity  style={{flex: 1}}
          onPress={() =>
            navigation.navigate('Call', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
          }>

          <Image style = {styles.icon}
                  source={{
                  uri: 'https://naliboki.stolbtsy-edu.gov.by/files/00524/obj/120/30163/img/540f27e940c088c6138b98cc_5fe55dd98ec52.jpg',
                  }}
                />
        </TouchableOpacity>

        <TouchableOpacity  style={{flex: 1}}
          onPress={() =>
            navigation.navigate('VideoCall', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
          }>
          <Image style = {styles.icon} 
            source={{
            uri: 'https://icon-library.com/images/video-call-icon/video-call-icon-29.jpg',
            }}
          />
        </TouchableOpacity >
      </View>
    </View>  
)};

const CallScreen = ({ navigation, route }) => {
  return (
      <ImageBackground style={{ flex: 1}} 
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: 'rgba(1,1,1,0.7)'}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"rgb(255,255,255)", fontWeight: "bold"}}>
           Calling {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"rgb(255,255,255)"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Profile', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 50}} source={require('./assets/red.png')}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const VideoCallScreen = ({ navigation, route }) => {
  return (
      <ImageBackground style={{ flex: 1}} 
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: 'rgba(1,1,1,0.7)'}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"rgb(255,255,255)", fontWeight: "bold", marginLeft: 20, marginRight: 20}}>
           Starting a video call with {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"rgb(255,255,255)"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Profile', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 50}} source={require('./assets/red.png')}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "rgb(255, 255, 255)"
  },
  profile:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 20
  },
  button: {
    height: 80,
    backgroundColor : "rgb(250, 250, 250)",
    borderRadius: 8,
    borderColor: "rgb(1,1,1)",
    margin: 1
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30
  },
  picture: {
    marginTop: 15,
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 100
  },
  profilePicture: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 10
  },
  profileText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20
  },
  phoneNumber: {
    fontSize: 20
  },
  icon: {
    marginTop: 15,
    marginLeft: 45,
    marginRight: 20,
    width: 30,
    height: 30,
    borderRadius: 100,
    marginBottom: 30
  },
  actionContainer: {
    marginRight: 80,
    marginLeft: 80,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center"
  }
});


export default Contacts;
