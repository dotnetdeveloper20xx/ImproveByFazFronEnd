import { useQuery } from "@tanstack/react-query";
import { getStudentTopics } from "../api";
import { TopicResponse } from "../types/types";

export const useTopics = (studentId: number) => {
  console.log("Calling useTopics with studentId:", studentId); // Debugging log

  return useQuery<TopicResponse, Error>(
    ["topics", studentId],
    () => getStudentTopics(studentId),
    {
      enabled: !!studentId, // Ensures the query only runs when studentId is valid
      retry: 2, // Retries failed requests up to 2 times
      refetchOnWindowFocus: false, // Prevents auto-refetch when switching tabs
    }
  );
};
