import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Product from "../../types/Product";
import Link from "next/link";

type Props = {
    product?: Product;
};
export default function ProductCard({ product }: Props) {
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
                <Link href={"/ofertas/1"}>
                    <Button
                        size="small"
                        color="error"
                        variant="contained"
                        fullWidth
                    >
                        Ir à Loja
                    </Button>
                </Link>
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
