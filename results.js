import { View, Text } from "react-native";
import { useState } from "react";





export default function ResultScreen(props){

const [savedResults,setSavedResults] = useState([])
    if (props != null){
    setSavedResults(props)
                           //tallenetaan data
    }
    console.log(savedResults.length)
    if (savedResults == []){                  //tarkistetaan lista
        return(
            <View>
                <Text>Results are empty</Text>
            </View>
        );
    }else{
      /*  results = props.savedResults;
        const listResults = results.map((result) =>
        <li>{result}</li>);*/

    return (
        <View>
            <ul>{savedResults}</ul>
        </View>
    )
    }
}

export function SaveResults(result,get){
const [results,setResults] = useState('');

  if (result == null && get == true){
    ResultScreen(results)
  }else{ 
   setResults(result)
  }
}