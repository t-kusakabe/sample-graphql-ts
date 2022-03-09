import type { NextPage } from 'next';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      done
    }
  }
`;

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(AllTasksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Head>
        <title>Sample GraphQL</title>
        <meta name="description" content="Sample GraphQL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>ToDo</h1>

        <ul>
          {data.tasks.map((task: any) => {
            return (
              <li key={task.id}>
                <p>{task.title}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  )
};

export default Home;
