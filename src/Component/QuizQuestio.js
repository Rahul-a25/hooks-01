import QuizOption from "./QuizOption"

function QuizQuestion({dataq,QestionNo,totalQuestion,CheckAnswer,color}){
  const {question,options}=dataq
  return(
    <div className="QuizQuestion-container">
      < h2 className="whtt">Qestion {QestionNo} out of {totalQuestion}</h2>
      <h4 className="wht" >{question}</h4>
      {/* <QuizOption value={"delhi"}/> */}
      {
        options.map((item,index)=>{
          return <QuizOption value={item} key={index} CheckAnswer={CheckAnswer} />
          
        })
      }
      

    </div>
  )
}
export default QuizQuestion;