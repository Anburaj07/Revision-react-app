import { FAILURE, GET_QUES_SUCCESS, POST_SCORE, REQUEST } from "./actionTypes"

const initstate={
    name:'',
    questions:[],
    loading:false,
    error:false,
    score:0,
    CorrectAnswersCount:0,
    InCorrectAnswersCount:0,
    Percentage:0
}

export const quizReducer=(state=initstate,{type,payload})=>{
    switch(type){
        case REQUEST:{
            return{...state,loading:true}
        }
        case GET_QUES_SUCCESS:{
            return{...state,loading:false,questions:payload.questions,name:payload.name}
        }
        case FAILURE:{
            return{...state,loading:false,error:true}
        }
        case POST_SCORE:{
            console.log(payload.score)
            return{...state,score:payload.score,CorrectAnswersCount:payload.CorrectAnswersCount,InCorrectAnswersCount:payload.InCorrectAnswersCount,Percentage:payload.Percentage}
        }
        default:{
            return state
        }
    }
}