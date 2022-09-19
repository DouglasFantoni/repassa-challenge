import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useSWR, { SWRConfig } from 'swr';
import { API_CHARACTER_GETALL } from '@constants/apiUrls';
import { ICharacterGetAll } from '../../models/requests/characterGetAll';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import { Card, Grid } from '@mui/material';
import Head from 'next/head';
import { BGCOLORS } from '@constants/colors';
import PageLayout from '@components/PageLayout/PageLayout';
import SearchInput from '@components/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import { ICharacterData } from '../../models/characterData';
import CharacterList from './sections/CharacterList';

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

function PageContent() {
  const [searchState, setSearchState] = useState('');
  const [paginationState, setPaginationState] = useState<number>(1);

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChangeSearchInput');
    setSearchState(e.target.value);
    setPaginationState(1);
  };

  return (
    <PageLayout>
      <Container maxWidth={'md'}>
        <Card sx={{ p: 1, my: 2 }} variant={'elevation'}>
          <Box>
            <Typography
              my={2}
              textAlign={'center'}
              variant={'h2'}
              fontWeight={'bold'}
            >
              Personagens do Rick and Morty
            </Typography>
            <Typography mb={2} variant={'h4'}>
              Descubra os detalhes de cada personagem clicando neles
            </Typography>
          </Box>
        </Card>
        <Card sx={{ p: 1, my: 2 }} variant={'elevation'}>
          <Box>
            <SearchInput
              state={searchState}
              onChange={handleChangeSearchInput}
            />
          </Box>
        </Card>
        <CharacterList
          characterFilter={searchState}
          paginationValue={paginationState}
          paginationOnChange={setPaginationState}
        />
      </Container>
    </PageLayout>
  );
}

export default function Home({ fallback }) {
  return (
    // <SWRConfig value={{ fallback }}>
    <Box>
      <Head>
        <title>Personagens do Rick</title>
      </Head>
      <PageContent />
    </Box>
    // </SWRConfig>
  );
}
