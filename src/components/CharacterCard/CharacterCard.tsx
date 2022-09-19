import Box from '@mui/material/Box';
import { Badge, Button, ButtonBase, Card, Chip, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FunctionComponent } from 'react';
import { ICharacterData } from '../../models/characterData';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { BGCOLORS } from '@constants/colors';
import { useRouter } from 'next/router';

interface OwnProps {
  character: ICharacterData;
}

type Props = OwnProps;

const CharacterCard: FunctionComponent<Props> = ({ character }) => {
  const imageSize = '180px';
  const router = useRouter();

  const onCLickHandler = () =>
    router.push(
      `/characters/${character.id}`
      // {
      //   query: { character: character.id },
      // }
    );
  return (
    <Box>
      <Box display={'flex'} flexDirection={'column'}>
        <ButtonImageWrapper onClick={onCLickHandler}>
          <Image layout="fill" objectFit="contain" src={character.image} />
        </ButtonImageWrapper>
        <CustomCard>
          <Button onClick={onCLickHandler} fullWidth={true}>
            <Box>
              <Typography mt={1} variant={'h5'}>
                {character.name}
              </Typography>
              <Chip
                size={'small'}
                label={character.species}
                variant={'outlined'}
                color="primary"
              />
              <Typography textAlign={'center'} variant={'h6'}>
                #{character.id}
              </Typography>
            </Box>
          </Button>
        </CustomCard>
      </Box>
    </Box>
  );
};

const ButtonImageWrapper = styled(Button)(
  ({ theme }) => `
    position: relative;
    // top: -20px;
    border-radius: 5px;
    width: 100%;
    height: 192px;
    transition: all .2s ease;
    overflow: hidden;
    top: 0;
    
    &:hover {
        top: 10px;
        transform: rotate(1deg);
    }
`
);

const CustomCard = styled('div')(
  ({ theme }) => `
    margin-top: ${theme.spacing(1)};
    position: relative;
    width: 100%;
    background: white;
    border-radius: 5px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`
);

export default CharacterCard;
