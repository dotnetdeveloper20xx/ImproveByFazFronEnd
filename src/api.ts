import axios from "axios";
import { Question, QuestionResponse, TopicResponse } from "./types/types";

const API_BASE_URL = "https://localhost:7243/api"; // Ensure correct backend URL

// https://localhost:7243/api/topics/1
export const getStudentTopics = async (
  studentId: number
): Promise<TopicResponse> => {
  console.log(`Fetching topics for student ${studentId}...`);

  const response = await axios.get(`${API_BASE_URL}/topics/${studentId}`);

  console.log("API Response:", response.data);

  return response.data;
};

// https://localhost:7243/api/questions/studentId/subTopicId
export const getQuestionsBySubTopic = async (
  studentId: number,
  subTopicId: number
): Promise<QuestionResponse> => {
  console.log(
    `Fetching questions for student ${studentId} and subTopic ${subTopicId}...`
  );
  const response = await axios.get(
    `${API_BASE_URL}/questions/${studentId}/${subTopicId}`
  );
  console.log("API Response (Questions):", response.data);
  return response.data;
};
