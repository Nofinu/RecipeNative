import { TouchableHighlight, StyleSheet, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MEALS } from '../data/data';

export default function ButtonRecippe(props) {

  const navigation = useNavigation()

  const {title,color,id}=props.categorie
  const colorbtn={backgroundColor:color}



  return (
      <TouchableHighlight style={[styles.btn,colorbtn]} onPress={()=>navigation.navigate("RecipePage",{id:id,title:title})}>
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  btn:{
    flex:1,
    height:150,
    width:200,
    marginLeft:"5%",
    marginRight:"5%",
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
  },
  text:{
    color:"white",
    fontSize:25
  }
})