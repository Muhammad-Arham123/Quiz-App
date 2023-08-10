import logo from './logo.svg';
import './App.css';
import Questions from './Questions';
import { useState } from 'react';

function App() {

  let [currentindex, setcurrentindex] = useState(0)

  let [score, setscore] = useState(0)

  let [showres, setshowres] = useState(false)

  let obj = [
    {
      "Quiz": "Our National_Anthem written by",
      "Options": [
        "Hafiz Ghori",
        "Syed Jameelkup",
        "Hafeez Jalandari",
        "Asim Ali"
      ],
      "Correct_ans": "Hafeez Jalandari"
    },
    {
      "Quiz": "Our Nation Bird?",
      "Options": [
        "Chakor",
        "Eagle",
        "Sparrow",
        "Parrot"
      ],
      "Correct_ans": "Chakor"
    },
    {
      "Quiz": "Our Nation Spicy Dish?",
      "Options": [
        "Biryani",
        "Kabab",
        "Qorma",
        "Nihari"
      ],
      "Correct_ans": "Nihari"
    },
    {
      "Quiz": "Pakistan Came into being in ?",
      "Options": [
        "!3 August",
        "14 August",
        "15 August",
        "16 August"
      ],
      "Correct_ans": "14 August"
    },


    {
      "Quiz": "Our National Fruit ?",
      "Options": [
        "Orange",
        "Banana",
        "Mango",
        "straw-berry"
      ],
      "Correct_ans": "Mango"
    },


  ]

  const callback = (data) => {
    console.log(data)
    if (data == obj[currentindex]["Correct_ans"]) {
      setscore(++score)

    }
    if (currentindex >= obj.length - 1) {
      setshowres(true)

    }
    else {
      setcurrentindex(++currentindex)

    }
  }

  return (

    <>
      {/* {
      obj.map((v,i)=>{
        return(
          <h1>Question No : {i+1}</h1>
        )
      })
    } */}

      {
        showres ?
          <h1>Score : {score}</h1>
          :
          <Questions
            question={obj[currentindex]["Quiz"]}
            options={obj[currentindex]["Options"]}
            i={currentindex}
            callback={callback} //function
          />
      }


    </>

  );
}

export default App;
