import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import OfferProductAdditionalInfo from "../OfferProductAdditionalInfo";
import Link from "next/link";

export default function OfferProductCard() {
    return (
        <>
            <Card sx={{ display: "flex" }} elevation={5}>
                <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    image="https://mui.com/static/images/cards/live-from-space.jpg"
                    alt="Imagem Produto"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                            Nome Produto
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            A partir de
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.primary"
                            component="div"
                        >
                            R$ 3000,00 em 8x
                        </Typography>
                    </CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                pl: 1,
                                pb: 1,
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                component="div"
                            >
                                Compartilhar oferta
                            </Typography>
                            <IconButton aria-label="whatsapp" color="success">
                                <WhatsAppIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1, marginLeft: 12 }}>
                            <Link href={"/ofertas/1"}>
                                <Button
                                    size="small"
                                    color="error"
                                    variant="contained"
                                >
                                    Ir à Loja
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </>
    );
}
