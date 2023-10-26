import axios from "axios";
import { FAILURE, GET_QUES_SUCCESS, POST_SCORE, REQUEST } from "./actionTypes";

const getQuestSuccessAction = (payload) => {
  return { type: GET_QUES_SUCCESS, payload };
};
const requestAction = () => {
  return { type: REQUEST };
};
const failureAction = () => {
  return { type: FAILURE };
};
const postScoreAction = (
  score,
  CorrectAnswersCount,
  InCorrectAnswersCount,
  Percentage
) => {
  return {
    type: POST_SCORE,
    payload:{
        score:score,
        CorrectAnswersCount:CorrectAnswersCount,
        InCorrectAnswersCount:InCorrectAnswersCount,
        Percentage:Percentage
    }
  };
};

export const getQuestions = (Questions, Category, Difficulty) => (dispatch) => {
  dispatch(requestAction());
  return axios
    .get(
      `https://opentdb.com/api.php?amount=${Questions}&category=${Category}&difficulty=${Difficulty}&type=multiple`
    )
    .then((res) => {
      console.log(res.data.results);
      dispatch(getQuestSuccessAction(res.data.results));
    })
    .catch((err) => {
      dispatch(failureAction());
      console.log(err);
    });
};

export const postScore =
  (score, CorrectAnswersCount, InCorrectAnswersCount, Percentage) =>
  (dispatch) => {
    console.log(score, CorrectAnswersCount, InCorrectAnswersCount, Percentage);
    dispatch(
      postScoreAction(
        score,
        CorrectAnswersCount,
        InCorrectAnswersCount,
        Percentage
      )
    );
  };
