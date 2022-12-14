import Box from '@mui/material/Box';
import Head from 'next/head';
import * as React from 'react';
import Container from '@mui/material/Container';
import { Card, Divider, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import PageLayout from '@components/PageLayout/PageLayout';
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import { API_CHARACTER_GETALL } from '@constants/apiUrls';
import { ICharacterData } from '../../models/characterData';
import Image from 'next/image';
import { BGCOLORS } from '@constants/colors';
import { styled } from '@mui/material/styles';
import { FS_5 } from '@constants/fonts';
import CustomLink from '@components/CustomLink/CustomLink';
import { RiMovieLine } from 'react-icons/ri';

interface IProps {
  characterData: ICharacterData;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;

  const url = `${API_CHARACTER_GETALL}/${params.character}`;

  const data = await axios.get<ICharacterData>(url).then((res) => res.data);

  return {
    props: {
      characterData: data,
    } as IProps,
    notFound: !(typeof data === 'object'),
  };
};

const Handler: NextPage<IProps> = ({ characterData }) => {
  const imageSize = 250;

  return (
    <Box>
      <Head>
        <title>Informações sobre {characterData.name}</title>
        <meta
          name="description"
          content="Descubra quais são os personagens do Rick And Morty e tire suas curiosidades sobre eles"
        />
      </Head>
      <PageLayout>
        <Container maxWidth={'md'}>
          <Card sx={{ p: 1 }} variant={'elevation'}>
            <Box>
              <Grid container>
                <Grid item>
                  <Image
                    style={{
                      border: `1px solid ${BGCOLORS.DARK}`,
                      borderRadius: 5,
                    }}
                    alt={characterData.name}
                    objectFit="contain"
                    height={imageSize}
                    width={imageSize}
                    src={characterData.image}
                  />
                </Grid>
                <Grid item px={2}>
                  <Typography mb={2} variant={'h2'} fontWeight={'bold'}>
                    {characterData.name}
                  </Typography>
                  <Box>
                    <BoxDetail>
                      <TextBolded>Gender: </TextBolded>
                      {characterData.gender}
                    </BoxDetail>
                    <BoxDetail>
                      <TextBolded>Specie: </TextBolded>
                      {characterData.species}
                    </BoxDetail>
                    <BoxDetail>
                      <TextBolded>Status: </TextBolded>
                      {characterData.status}
                    </BoxDetail>
                    <BoxDetail>
                      <TextBolded>Location: </TextBolded>
                      {characterData.location.name}
                    </BoxDetail>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
          <Card sx={{ p: 1, mt: 2 }} variant={'elevation'}>
            <Box mt={4}>
              <Box>
                <Typography variant={'h3'}>Lista de episodios</Typography>
              </Box>
              <Divider sx={{ mt: 1, mb: 2 }} />
              {characterData.episode.map((link, index) => (
                <Box display={'flex'} key={index}>
                  <CustomLink href={'#'}>
                    <RiMovieLine />
                    {` ${link}`}
                  </CustomLink>
                </Box>
              ))}
            </Box>
          </Card>
        </Container>
      </PageLayout>
    </Box>
  );
};

const TextBolded = styled(Typography)(
  () => `
  font-weight: bold;
    display: inline-block;
    padding-right: 5px;
`
);

const BoxDetail = styled('span')(
  ({ theme }) => `
  font-size: ${FS_5};
  display: block;
  margin: ${theme.spacing(1)} 0;
`
);

export default Handler;
