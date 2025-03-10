import { Card, CardContent, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuestions } from "../hooks/useQuestion";

const STUDENT_ID = 1; // Simulated logged-in student

const QuestionView = () => {
  const { subTopicId } = useParams<{ subTopicId: string }>(); // ✅ Get subTopicId from URL
  const { data, isLoading, error } = useQuestions(
    STUDENT_ID,
    Number(subTopicId)
  );

  console.log("Question Data:", data); // ✅ Debugging log

  if (isLoading) return <Typography>Loading questions...</Typography>;
  if (error) return <Typography>Error fetching questions</Typography>;
  if (!data || data.length === 0) {
    return <Typography>No questions found</Typography>;
  }

  return (
    <div>
      {data.map((question) => (
        <Card key={question.questionId} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant='h5'>Question {question.questionId}</Typography>
            <img
              src={question.imageUrl}
              alt='Question'
              style={{ width: "100%", maxHeight: 300 }}
            />
            <Typography variant='body1'>Select an answer:</Typography>
            {question.choices.map((choice, index) => (
              <Button
                key={index}
                variant='contained'
                sx={{ margin: 1 }}
                onClick={() => {}} // yet to implement.
              >
                {choice}
              </Button>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuestionView;
