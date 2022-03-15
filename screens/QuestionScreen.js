import React, {useEffect, useState} from 'react';
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { Icon } from 'native-base';

const QuestionScreen = ({navigation, route}) => {
  const {lang} = route.params;
  const {chapter} = route.params;

  const javafile = require('../question/JAVA.json');
  const htmlfile = require('../question/HTML.json');

  const customData = lang == 'JAVA' ? javafile : htmlfile;

  const correct = require('../assets/true.png');
  const wrong = require('../assets/false.png');

  const [number, setNumber] = useState(1);
  const [score, setScore] = useState(0);

  const numQues = Object.keys(customData[chapter]).length;
  const [chooseChoice, setChooseChoice] = useState(0);
  const fullQuestion = customData[chapter][number.toString()];
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
    quesColor = '#cd5c5c';
  }
  const chooseChoiceColor = chooseChoice === ans ? '#2ECD81' : '#cd5c5c';
  const notChooseChoiceColor = chooseChoice === 0 ? '#2F3136' : '#C4C4C4';

  const nextOpacity = chooseChoice === 0 || number === 5 ? 0 : 1;
  const nextVisible = chooseChoice === 0 || number === 5 ? true : false;

  const afterAns = chooseChoice === 0 ? false : true;
  const widthAfterAns = chooseChoice === 0 ? 350 : 300;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: quesColor}}>
      {/*header*/}
      <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',backgroundColor: '#202225', height:64}}>
        <Icon onPress={()=>{navigation.navigate('LessonScreen')}} type="FontAwesome" name="xmark" style={{color:'white', marginRight:77, marginLeft:30}}/>
        <Text style={{color:'white',fontWeight: 'bold',fontSize:18}}>Question</Text>
      </View>

      {/*Quiz*/}
      <View style={{alignItems: 'center', marginTop: 40}}>
        <Text style={{color: 'white', fontSize: 18}}>
          {number}/{numQues}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            marginTop: 50,
            marginLeft: 10,
          }}>
          {question}
          {/* {customData['Variable_&_Variable_type'][number.toString()]['Quiz']}*/}
        </Text>
      </View>

      {/*Choice*/}
      <View style={{flex: 1, backgroundColor: 'white', marginTop: 100}}>
        {/*Choice1*/}
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity
            disabled={afterAns}
            style={{
              marginLeft: 10,
              color: 'white',
              backgroundColor:
                1 === chooseChoice ? chooseChoiceColor : notChooseChoiceColor,
              width: widthAfterAns,
              height: 35,
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 15,
            }}
            onPress={() => setChooseChoice(1)}>
            <Text style={{color: 'white', fontSize: 18}}>A) {choice[0]}</Text>
          </TouchableOpacity>
          <Image
            source={1 === ans ? correct : wrong}
            style={{opacity: 1 === chooseChoice ? 1 : 0, marginLeft: 5}}
          />
        </View>
        {/*Choice2*/}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            disabled={afterAns}
            style={{
              marginLeft: 10,
              color: 'white',
              backgroundColor:
                2 === chooseChoice ? chooseChoiceColor : notChooseChoiceColor,
              marginTop: 30,
              width: widthAfterAns,
              height: 35,
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 15,
            }}
            onPress={() => setChooseChoice(2)}>
            <Text style={{color: 'white', fontSize: 18}}>B) {choice[1]}</Text>
          </TouchableOpacity>
          <Image
            source={2 === ans ? correct : wrong}
            style={{
              opacity: 2 === chooseChoice ? 1 : 0,
              marginLeft: 5,
              marginTop: 30,
            }}
          />
        </View>
        {/*Choice4*/}
        {showOpacity === 0 ? (
          <></>
        ) : (
          <>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                disabled={0 === chooseChoice ? choiceVisible : afterAns}
                style={{
                  marginLeft: 10,
                  opacity: showOpacity,
                  color: 'white',
                  backgroundColor:
                    3 === chooseChoice
                      ? chooseChoiceColor
                      : notChooseChoiceColor,
                  marginTop: 30,
                  width: widthAfterAns,
                  height: 35,
                  borderRadius: 7,
                  justifyContent: 'center',
                  paddingLeft: 15,
                }}
                onPress={() => setChooseChoice(3)}>
                <Text style={{color: 'white', fontSize: 18}}>
                  C) {choice[2]}
                </Text>
              </TouchableOpacity>
              <Image
                source={3 === ans ? correct : wrong}
                style={{
                  opacity: 3 === chooseChoice ? 1 : 0,
                  marginLeft: 5,
                  marginTop: 30,
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                disabled={0 === chooseChoice ? choiceVisible : afterAns}
                style={{
                  marginLeft: 10,
                  opacity: showOpacity,
                  color: 'white',
                  backgroundColor:
                    4 === chooseChoice
                      ? chooseChoiceColor
                      : notChooseChoiceColor,
                  marginTop: 30,
                  width: widthAfterAns,
                  height: 35,
                  borderRadius: 7,
                  justifyContent: 'center',
                  paddingLeft: 15,
                }}
                onPress={() => setChooseChoice(4)}>
                <Text style={{color: 'white', fontSize: 18}}>
                  D) {choice[3]}
                </Text>
              </TouchableOpacity>
              <Image
                source={4 === ans ? correct : wrong}
                style={{
                  opacity: 4 === chooseChoice ? 1 : 0,
                  marginLeft: 5,
                  marginTop: 30,
                }}
              />
            </View>
          </>
        )}
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
            ans === chooseChoice ? setScore(score + 1) : setScore(score + 0);
            setChooseChoice(0);
          }}>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
      {/*Nextbtn end*/}
      <View
        style={{
          flex: 0.105,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <TouchableOpacity
          disabled={number === 5 ? false : true}
          style={{
            opacity: number === 5 ? 1 : 0,
            backgroundColor: quesColor,
            width: 100,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
          }}
          onPress={() => {
            {
              navigation.navigate('ResultScreen', {
                sendScore: score,
                maxScore: numQues,
                answer: ans,
                choice: chooseChoice,
                langg : lang,
                langChapter : chapter
              });
            }
          }}>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuestionScreen;
