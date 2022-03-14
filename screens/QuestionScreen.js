import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';


const QuestionScreen = ({ navigation}) => {
  // const QuestionScreen = ({ navigation,route }) => {
  // const { name } = route.params;
const lang = "HTML";
const chapter = "ความรู้เบื้องต้นเกี่ยวกับ HTML";

const javafile = require('../question/JAVA.json')
const htmlfile = require('../question/HTML.json')


const customData = (lang=='JAVA'?javafile:htmlfile)


  //const customData = require(filename);
  // const [qusetion,setQusetion]=useState([]);
  const [number, setNumber] = useState(1);
  const [score , setScore] = useState(0);
  //())=>setChooseChoice(0)
  const numQues = Object.keys(customData[chapter]).length;
  const [chooseChoice, setChooseChoice] = useState(0);
  const fullQuestion =
    customData[chapter][number.toString()];
  const quesType = fullQuestion['Q_Type'];
  const question = fullQuestion['Quiz'];
  const choice = fullQuestion['Choice'];
  const ans = fullQuestion['Ans'];
  //trueFalseQuiz
  const showOpacity = quesType === '1' ? 1 : 0;
  const choiceVisible = quesType === '1' ? false : true;
  //answer
  var quesColor; //same as next button
  if (chooseChoice === ans) {
    quesColor = '#2ECD81';
  } else if (chooseChoice === 0) {
    quesColor = '#2F3136';
  } else {
    quesColor = '#EE4F4F';
  }
  const chooseChoiceColor = chooseChoice === ans ? '#2ECD81' : '#EE4F4F';
  const notChooseChoiceColor = chooseChoice === 0 ? '#2F3136' : '#C4C4C4';

  const nextOpacity = ((chooseChoice === 0 || number===5) ? 0 : 1);
  const nextVisible = ((chooseChoice === 0 || number===5) ? true : false);

  const afterAns = chooseChoice === 0 ? false : true;

  //const [quesType,setQuesType] = useState()
  useEffect(() => {
    // alert(filename)
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: quesColor }}>
      {/*Quiz*/}
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>
          {number}/{numQues}
        </Text>
        <Text style={{ color: 'white', fontSize: 24, marginTop: 50 }}>
  
          {question}
          {/* {customData['Variable_&_Variable_type'][number.toString()]['Quiz']}*/}
        </Text>
      </View>

      {/*Choice*/}
      <View style={{ flex: 1, backgroundColor: 'white', marginTop: 100 }}>
        <View style={{ marginTop: 70, alignItems: 'center' }}>
          <TouchableOpacity
            disabled={afterAns}
            style={{
              color: 'white',
              backgroundColor:
                1 === chooseChoice ? chooseChoiceColor : notChooseChoiceColor,
              width: 250,
              height: 35,
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 15,
            }}
            onPress={() => setChooseChoice(1)}>
            <Text style={{ color: 'white', fontSize: 18 }}>A) {choice[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={afterAns}
            style={{
              color: 'white',
              backgroundColor:
                2 === chooseChoice ? chooseChoiceColor : notChooseChoiceColor,
              marginTop: 30,
              width: 250,
              height: 35,
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 15,
            }}
            onPress={() => setChooseChoice(2)}>
            <Text style={{ color: 'white', fontSize: 18 }}>B) {choice[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={0 === chooseChoice ? choiceVisible : afterAns}
            style={{
              opacity: showOpacity,
              color: 'white',
              backgroundColor:
                3 === chooseChoice ? chooseChoiceColor : notChooseChoiceColor,
              marginTop: 30,
              width: 250,
              height: 35,
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 15,
            }}
            onPress={() => setChooseChoice(3)}>
            <Text style={{ color: 'white', fontSize: 18 }}>C) {choice[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={0 === chooseChoice ? choiceVisible : afterAns}
            style={{
              opacity: showOpacity,
              color: 'white',
              backgroundColor:
                4 === chooseChoice ? chooseChoiceColor : notChooseChoiceColor,
              marginTop: 30,
              width: 250,
              height: 35,
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 15,
            }}
            onPress={() => setChooseChoice(4)}>
            <Text style={{ color: 'white', fontSize: 18 }}>D) {choice[3]}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*Nextbtn*/}
      <View
        style={{
          flex: 0.105,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <TouchableOpacity
          disabled={nextVisible}
          style={{
            opacity: nextOpacity,
            backgroundColor: quesColor,
            width: 100,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
          }}
          onPress={() => {
            setNumber(number + 1);
            (ans===chooseChoice?setScore(score+1):setScore(score+0))
            setChooseChoice(0);   
          }}>
          <Text style={{ color: 'white' }}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={(number===5?false:true)}
          style={{
            opacity : (number===5?1:0),
            backgroundColor: quesColor,
            width: 100,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
          }}
          onPress={() => {
            {navigation.navigate('ResultScreen',{sendScore:score,maxScore:numQues,answer:ans,choice:chooseChoice})}
          }}>
          <Text style={{ color: 'white' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuestionScreen;
