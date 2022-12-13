import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function NavBar() {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Link href={"/"}>
                        <Typography
                            variant="h6"
                            component="div"
                            
                            color="error"
                        >
                            Tem de Tudo Tchelo
                        </Typography>
                    </Link>
                </Box>
                <Button color="error" variant="contained">
                    Grupo de Ofertas
                </Button>
            </Toolbar>
        </AppBar>
    );
}
