import React, { useState } from "react";
import styled from "styled-components";
import { FormControl, Input, Select } from "@chakra-ui/react";
import { getQuestions } from "../redux/questionsRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Difficulty, setDifficulty] = useState("");
  const [Questions, setQuestions] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, Category, Difficulty, Questions);
    dispatch(getQuestions(name,+Questions, +Category, Difficulty)).then(() => {
      navigate("/quiz");
    });
  };
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl>
          <Select
            placeholder="Select Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="21">Sports</option>
            <option value="25">Art</option>
            <option value="9">General Knowledge</option>
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <Select
            placeholder="Select Difficulty"
            value={Difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <Input
            type="number"
            placeholder="Choose Number of Questions"
            value={Questions}
            onChange={(e) => setQuestions(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input id="submit" type="submit" value="START QUIZ" />
        </FormControl>
      </form>
    </DIV>
  );
};

export default Home;

const DIV = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  padding: 1%;
  form {
    width: 40%;
    background-color: whitesmoke;
    border-radius: 15px;
    padding: 20px;
    #submit {
      background-color: #ff1b41;
      color: white;
    }
  }
`;
