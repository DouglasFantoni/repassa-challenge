import { BGCOLORS } from '@constants/colors';
import Container from '@mui/material/Container';
import { FC } from 'react';

const PageLayout: FC<any> = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: `100vh`,
        backgroundColor: BGCOLORS.GHOSTWHITE,
        m: 0,
        py: 2,
      }}
    >
      {children}
    </Container>
  );
};
export default PageLayout;
