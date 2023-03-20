import { Pressable, StyleSheet, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MEALS } from '../data/data';

export default function ButtonRecippe(props) {

  const navigation = useNavigation()

  const {title,color,id}=props.categorie
  const colorbtn={backgroundColor:color}

  const findMeal=()=>{
    const mealFound = [...MEALS.filter(meal => meal.categoryIds.includes(id))]
    return mealFound
  }

  const Send=()=>{
    const meals = findMeal()
    navigation.navigate("RecipePage",{meals:meals})
  }

  return (
      <Pressable style={[styles.btn,colorbtn]} onPress={Send}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  btn:{
    flex:1,
    height:200,
    width:200,
    marginLeft:"5%",
    marginRight:"5%",
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
  },
  text:{
    color:"white"
  }
})