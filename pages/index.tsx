import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Heading, Stack } from '@chakra-ui/react';

import { TaskList } from '../components/TaskList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sample GraphQL</title>
        <meta name="description" content="Sample GraphQL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container my='32px'>
          <Stack spacing='32px'>
            <Heading>TASK LIST</Heading>
            <TaskList />
          </Stack>
        </Container>
      </main>
    </div>
  )
};

export default Home;
