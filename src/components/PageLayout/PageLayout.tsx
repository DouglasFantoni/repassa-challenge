import { BGCOLORS } from '@constants/colors';
import Container from '@mui/material/Container';
import { FC } from 'react';

const PageLayout: FC<any> = ({ children }) => {
  return (
    <Container disableGutters sx={{ backgroundColor: BGCOLORS.GRAY, m: 0 }}>
      {children}
    </Container>
  );
};
export default PageLayout;
