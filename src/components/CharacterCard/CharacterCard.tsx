import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FunctionComponent } from 'react';
import { ICharacterData } from '../../models/characterData';
import Image from 'next/image';

interface OwnProps {
  character: ICharacterData;
}

type Props = OwnProps;

const CharacterCard: FunctionComponent<Props> = ({ character }) => {
  return (
    <Box>
      <Card variant={'elevation'} sx={{ p: 1 }}>
        <Image src={character.image} width={150} height={150} />
        <Typography my={1} variant={'h5'}>
          {character.name}
        </Typography>
      </Card>
    </Box>
  );
};

export default CharacterCard;
