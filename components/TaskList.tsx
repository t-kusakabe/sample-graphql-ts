import { gql, useQuery } from '@apollo/client';
import { Checkbox, List, ListItem } from '@chakra-ui/react';

import { TaskDeleteButton } from './TaskDeleteButton';

export const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      done
    }
  }
`;

export const TaskList = () => {
  const { data, loading, error } = useQuery(AllTasksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <List>
      {data.tasks.map((task: any) => {
        return (
          <ListItem key={task.id}>
            <Checkbox colorScheme='teal' isChecked={task.done}>
              {task.title}
            </Checkbox>

            <TaskDeleteButton taskId={task.id} />
          </ListItem>
        );
      })}
    </List>
  );
};
