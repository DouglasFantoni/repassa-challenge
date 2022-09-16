import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useSWR, { SWRConfig } from 'swr';
import { API_CHARACTER_GETALL } from '@constants/apiUrls';
import { ICharacterGetAll } from '../models/requests/characterGetAll';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import { Grid } from '@mui/material';
import Head from 'next/head';
import { BGCOLORS } from '@constants/colors';
import PageLayout from '@components/PageLayout/PageLayout';

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getServerSideProps() {
  const repoInfo = await fetcher(API_CHARACTER_GETALL);
  return {
    props: {
      fallback: {
        [API_CHARACTER_GETALL]: repoInfo,
      },
    },
  };
}

const PageContent = () => {
  const { data, error } = useSWR<ICharacterGetAll>(API_CHARACTER_GETALL);

  console.log(data);
  console.log(error);
  return (
    <PageLayout>
      <Container maxWidth={'md'}>
        <Grid container spacing={2}>
          {data.results.map((character) => (
            <Grid item key={character.id} xs={12} md={4}>
              <CharacterCard character={character} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageLayout>
  );
};

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Personagens do Rick</title>
      </Head>
      <PageContent />
    </SWRConfig>
  );
}
