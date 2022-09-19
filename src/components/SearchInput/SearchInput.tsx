import Box from '@mui/material/Box';
import { IconButton, InputBase } from '@mui/material';
import { FcSearch } from 'react-icons/fc';

import React, { Dispatch, FunctionComponent } from 'react';

interface OwnProps {
  state: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = OwnProps;

const SearchInput: FunctionComponent<Props> = (props) => {
  return (
    <Box>
      {/*<IconButton  type="" sx={{ p: '10px' }} aria-label="search">*/}

      {/*</IconButton>*/}
      <InputBase
        startAdornment={<FcSearch style={{ marginRight: '5px' }} />}
        sx={{ pl: 2 }}
        placeholder="Busque um personagem"
        fullWidth
        value={props.state}
        onChange={props.onChange}
        inputProps={{ 'aria-label': 'Busque por um personagem' }}
      />
    </Box>
  );
};

export default SearchInput;
