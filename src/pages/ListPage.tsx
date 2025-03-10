import { Container, Typography, CircularProgress } from "@mui/material";
import TopicList from "../components/TopicList";
import { useTopics } from "../hooks/useTopics";

const STUDENT_ID = 1; // Simulating logged-in student

const ListPage = () => {
  const { data, isLoading, error } = useTopics(STUDENT_ID);

  console.log("xx ListPage Data:", data); // Debugging log

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error loading topics</Typography>;

  if (!data) {
    return <Typography>No misconceptions found</Typography>;
  }

  return (
    <Container>
      <Typography variant='h4'>Topics with Misconceptions</Typography>
      {data ? (
        <TopicList topics={data} />
      ) : (
        <Typography>No misconceptions found</Typography>
      )}
    </Container>
  );
};

export default ListPage;
