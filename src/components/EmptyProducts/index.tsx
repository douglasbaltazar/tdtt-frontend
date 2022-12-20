import { Typography } from "@mui/material";

export default function EmptyProducts() {
    return (
        <Typography variant="h5" color={'GrayText'} fontWeight='700' sx={{ marginTop: 2}}>
            Não há produtos cadastrados.
        </Typography>
    );
}
