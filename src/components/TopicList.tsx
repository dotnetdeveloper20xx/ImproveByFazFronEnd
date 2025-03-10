import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Topic } from "../types/types";

interface Props {
  topics: Topic[];
}

const TopicList: React.FC<Props> = ({ topics }) => {
  return (
    <>
      {topics.map((topic) => (
        <Card key={topic.topicId} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant='h6'>{topic.name}</Typography>
            {topic.subTopics.map((subTopic) => (
              <Link
                key={subTopic.subTopicId}
                to={`/view/${subTopic.subTopicId}`}
              >
                <Typography variant='body1'>
                  {subTopic.name} ({subTopic.misconceptions} misconceptions)
                </Typography>
              </Link>
            ))}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TopicList;
