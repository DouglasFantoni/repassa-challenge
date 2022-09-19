import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { TEXTCOLORS } from '@constants/colors';

const CustomLink = styled(Link)(
  ({ theme }) => `
    display: block;
    cursor: pointer;
    user-select: none;
    color: ${TEXTCOLORS.URLLIGHT}; 

    &:hover: {
        color: ${TEXTCOLORS.URL}; 
    }
`
);

export default CustomLink;
