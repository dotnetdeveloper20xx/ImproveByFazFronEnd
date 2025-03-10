export interface SubTopic {
  subTopicId: number;
  name: string;
  misconceptions: number;
}

export interface Topic {
  topicId: number;
  name: string;
  subTopics: SubTopic[];
}

export interface TopicResponse {
  studentId: number;
  topics: Topic[];
}

export interface Question {
  questionId: number;
  imageUrl: string;
  choices: string[];
  correctAnswer: number;
  explanation: string;
}

export type QuestionResponse = Question[];
