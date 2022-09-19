import Box from "@mui/material/Box";
import {Backdrop, CircularProgress} from "@mui/material";
import React, {FC} from "react";

interface IProps {
    open: boolean,

}

const CustomBackdrop: FC<IProps> = ({open}) => {

    return (
        <Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}

export default CustomBackdrop;
