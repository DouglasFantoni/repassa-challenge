import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Head from 'next/head';
import PageLayout from '@components/PageLayout/PageLayout';
import SearchInput from '@components/SearchInput/SearchInput';
import CharacterList from './_sections/CharacterList';

export default function Home() {
  const [searchState, setSearchState] = useState('');
  const [paginationState, setPaginationState] = useState<number>(1);

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
    setPaginationState(1);
  };
  return (
    <Box>
      <Head>
        <title>Personagens do Rick and Morty</title>
        <meta
          name="description"
          content="Descubra quais são os personagens do Rick And Morty e tire suas curiosidades sobre eles"
        />
      </Head>
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
    </Box>
  );
}
