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
import { Product } from "types/Product";
import { Chip } from "@mui/material";
import { green } from "@mui/material/colors";

type Props = {
    product: Product;
};

export default function OfferProductCard({ product }: Props) {
    function handleMsgWhatsApp(): string {
        /*
        Hey, olha o que eu encontrei no Pincei!
        *Mini Band Kit com 4 intensidades Leve, Moderado, Forte e Extra Forte - Life Zone* 
        *� R$ 33,08 à vista*
        _� R$ 9,92 pagando através da AME_�
        _Valor pode alterar a qualquer momento_
        �Link da Promoção: � https://pincei.co/e/87cc764a 
        _�Link do Grupo de ofertas Pincei_: https://join.pincei.co/whatsapp
        */
        /* 
       https://api.whatsapp.com/send?text=
       Hey,%20olha%20o%20que%20eu%20encontrei%20no%20Pincei!
       %0A%0A*Mini%20Band%20Kit%20com%204%20intensidades%20Leve,%20Moderado,%20Forte%20e%20Extra%20Forte%20-%20Life%20Zone*
       %0A%0A*%F0%9F%94%A5%20R$%2033,08%20%C3%A0%20vista*
       %0A_%E2%9D%A4%EF%B8%8F%20R$%209,92%20pagando%20atrav%C3%A9s%20da%20AME_
       %0A%0A%F0%9F%91%89%20_Valor%20pode%20alterar%20a%20qualquer%20momento_
       %0A%0A%F0%9F%9B%8D%EF%B8%8FLink%20da%20Promo%C3%A7%C3%A3o:%20%F0%9F%91%87%0Ahttps://pincei.co/e/87cc764a%0A%0A_%F0%9F%93%B2Link%20do%20Grupo%20de%20ofertas%20Pincei_:%0Ahttps://join.pincei.co/whatsapp
       */
        let price = product.newPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        let text =
            "Eitaaa,%20olhe%20o%20que%20encontrei%20na%20Tem%20de%20Tudo%20Tchelo!%20" +
            "%0A%0A*" +
            product.productName.replace(" ", "%20") +
            "*%0A%0A*%F0%9F%94%A5%20" +
            price.replace(" ", "%20") +
            "%0A_%E2%9D%A4%EF%B8%8F%20" +
            "Link%20%da%20Promo%C3%A7%C3%A3o:%20" +
            "https://bit.ly/temdetudotchelo" +
            "Link%20%do%20Grupo%20Tem%20de%20Tudo%20Tchelo%20" +
            "https://bit.ly/temdetudotchelo";
        return text;
    }
    return (
        <>
            <Card sx={{ display: "flex" }} elevation={5}>
                <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    image={product.imgCover}
                    alt={product.productName}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                            {product.productName}
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
                            {product.newPrice.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}{" "}
                            em 8x
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
                            <Link
                                href={`https://api.whatsapp.com/send?text=${handleMsgWhatsApp()}`}
                            >
                                <IconButton
                                    aria-label="whatsapp"
                                    sx={{
                                        backgroundColor: "rgba(0, 255, 0, 1)",
                                        borderRadius: "20px",
                                        minWidth: "65px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        transition: '0.2s',
                                        ":hover": {
                                            transform: 'scale(1.1)', 
                                            backgroundColor: "rgba(0, 120, 0, 1)"
                                        }
                                    }}
                                >
                                    <WhatsAppIcon />
                                </IconButton>
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1, marginLeft: 12 }}>
                            <Link href={product.link}>
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
