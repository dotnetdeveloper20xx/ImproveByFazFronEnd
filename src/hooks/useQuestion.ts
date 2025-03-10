import { useQuery } from "@tanstack/react-query";
import { getQuestionsBySubTopic } from "../api";
import { QuestionResponse } from "../types/types";

export const useQuestions = (studentId: number, subTopicId: number) => {
  console.log("Fetching questions for subTopicId:", subTopicId);

  return useQuery<QuestionResponse, Error>({
    queryKey: ["questions", studentId, subTopicId],
    queryFn: async () => {
      const response = await getQuestionsBySubTopic(studentId, subTopicId);
      console.log("API Response in useQuestions:", response);
      return response;
    },
    enabled: !!studentId && !!subTopicId,
  });
};
