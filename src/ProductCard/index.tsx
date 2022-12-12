import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
    id?: string;
    imgCover?: string;
    productName?: string;
    newPrice?: string;
    link?: string;
};
export default function ProductCard({ id, imgCover, productName, newPrice, link }: Props) {
    return (
        <Card sx={{ maxWidth: 315, borderRadius: 1 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Nome Produto
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A partir de
                </Typography>
                <Typography variant="body1" color="text.primary">
                    R$ 10.00
                </Typography>
            </CardContent>
            <CardActions sx={{ paddingX: 4 }}>
                <Button size="small" color="error" variant="contained" fullWidth >
                    Ir à Loja
                </Button>
            </CardActions>
            <Box display="flex">
                <Box sx={{ flexGrow: 1 }} />
                <Typography
                    sx={{ padding: 1 }}
                    fontSize={10}
                    justifyContent={"flex-end"}
                >
                    Há X minutos
                </Typography>
            </Box>
        </Card>
    );
}
