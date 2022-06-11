import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

const data = [
  {
    id: "1",
    name: "Разогрев",
    pic: "https://images11.cosmopolitan.ru/upload/img_cache/035/0359a2a78178ea0e1829106b240c45aa_ce_610x404x56x0_cropped_666x444.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "2",
    name: "Аэробика 1",
    pic: "https://lovefit.ru/imgs/blog/021/21/blg5b6add43261c60_32624175.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "3",
    name: "Аэробика 2",
    pic: "https://www.meme-arsenal.com/memes/63d8e922cebd087c36e6c243e4e9fce6.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "4",
    name: "Аэробика 3",
    pic: "https://fiteria.ru/storage/phpJmJNUp1559184279.jpeg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "5",
    name: "Аэробика 4",
    pic: "https://st4.depositphotos.com/25901228/28688/i/600/depositphotos_286883858-stock-photo-exercise-with-fitness-elastic-band.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "6",
    name: "Аэробика 5",
    pic: "https://media.istockphoto.com/vectors/woman-and-aerobics-vector-id956940198",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    id: "7",
    name: "Аэробика 6",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvE0nOeBjNFk4mBkGSfzTWf6HR0a8DJrB0qBwbRuTfVkEccM2RDnBp_3inp8tFbQapuY&usqp=CAU",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
]

export default function App() {
  return (
    <View>
      <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.block1} onPress={() => {
            Linking.openURL(item.link);
          }}>
            <Image source={{ uri: item.pic }} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <Text style={{marginLeft: "10%", color: "white"}}>{item.name}</Text>
            <Image source={require("./assets/right.png")} style={{ width: 20, height: 20, right: "-110%" }} />
          </TouchableOpacity>
        )
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block1: {
    marginTop: "8%",
    marginRight: "5%",
    backgroundColor: "grey",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    marginLeft: "5%",
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row'
  },
});
