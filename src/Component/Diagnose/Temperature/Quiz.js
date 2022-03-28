import React, { useEffect, useState } from 'react'


export default function Quiz({data, questionNumber,setQuestionNumber, setTimeOut})  {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer ] =useState(0)
    const [wrongAnswer, setWrongAnswer ] =useState(0)
    const [className, setClassName] = useState('answer');
    
    useEffect(()=> {
        setQuestion(data[questionNumber-1])

    },[data, questionNumber])

    const handleClick =(item)=>{
        setSelectedAnswer(item);
       
        if(setQuestionNumber=== data.length)
       {
           
        setQuestionNumber((prev)=> prev);
        setCorrectAnswer((prev)=> prev);
       }
          if(item.correct)
            {
                setQuestionNumber((prev)=> prev +1);
                setCorrectAnswer((prev)=> prev +1);
                setSelectedAnswer(null);
                
            
             }
        else
        {
            setQuestionNumber((prev)=> prev +1);
        setWrongAnswer((prev)=> prev +1);
            setSelectedAnswer(null);
        }
           
    }

    return (
        
        
    <div className='diagnose_container'>
        {console.log(correctAnswer, wrongAnswer)}
   
    <div className='sub_container center'>
      <div className='question_container'>

 
      <div className='instruct test '>
          
{question?.question}

      </div>
      <div className='ans_selection'>
        <div className='ans_row'>

            
        {question?.answers.map((item)=>(
            
            <div className="dia_ans dia" onClick={() => !selectedAnswer && handleClick(item)} >
                {item.text}
        
            </div>
        )
        )}
       

        </div>
       
        
      </div>  
      
      </div>

    </div>
   
      </div>
  )
}
