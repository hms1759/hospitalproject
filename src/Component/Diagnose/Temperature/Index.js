import React, {useState, useEffect} from "react"
import Quiz from "./Quiz";
import { data } from "./data";

export default function Index() {
    const [questionNumber, setQuestionNumber]= useState(1);
    const [timeOut, setTimeOut]= useState(false);

  return (
    <div>
        <Quiz
        data={data}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        setTimeOut ={setTimeOut}
        />
    </div>
  )
}
