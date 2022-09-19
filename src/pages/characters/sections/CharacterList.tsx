import React, { Dispatch, FC, useState } from 'react';
import { CircularProgress, Grid, Pagination, Paper } from '@mui/material';
import CharacterCard from '@components/CharacterCard/CharacterCard';
import useSWR from 'swr';
import { ICharacterGetAll } from '../../../models/requests/characterGetAll';
import { API_CHARACTER_GETALL } from '@constants/apiUrls';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IProps {
  characterFilter: string;
  paginationValue: number;
  paginationOnChange: Dispatch<React.SetStateAction<number>>;
}

const CharacterList: FC<IProps> = ({
  paginationValue,
  paginationOnChange,
  characterFilter,
}) => {
  const url = new URL(API_CHARACTER_GETALL);

  console.log('renderizou lkista');

  characterFilter.length > 2 &&
    url.searchParams.append('name', characterFilter);
  url.searchParams.append('page', `${paginationValue}`);

  const fetcher = async (urlString: string) => {
    setBackdropIsVisible(true);

    return await axios.get(urlString).then((res) => {
      setBackdropIsVisible(false);
      return res.data;
    });
  };

  const { data, error } = useSWR<ICharacterGetAll>(url.href, fetcher);

  const [backdropIsVisible, setBackdropIsVisible] = useState<boolean>(
    data === undefined
  );

  return (
    <Box>
      {error ? (
        <NothingHere />
      ) : backdropIsVisible || !data ? (
        <Box display={'flex'} justifyContent={'center'}>
          <CircularProgress thickness={3} size={60} color="inherit" />
        </Box>
      ) : (
        <Box>
          <Grid container spacing={4}>
            {data.results.map((character) => (
              <Grid item key={character.id} xs={12} md={3}>
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
          <Box mt={2} display={'flex'} justifyContent={'end'}>
            <Paper sx={{ p: 1 }}>
              <Pagination
                page={paginationValue}
                onChange={(e, value) => {
                  paginationOnChange(value);
                }}
                count={data.info.count}
              />
            </Paper>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const NothingHere = () => {
  return (
    <Box>
      <Typography variant={'h3'}>Nenhum personagem encontrado</Typography>
      <Typography variant={'h5'}>
        Experimente procurar por outro nome
      </Typography>
    </Box>
  );
};

export default CharacterList;
