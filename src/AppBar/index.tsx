import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    return (
        <AppBar position="static" color='inherit'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='error'>
            Tem de Tudo Tchelo
          </Typography>
          <Button color="error" variant='contained'>Grupo de Ofertas</Button>
        </Toolbar>
      </AppBar>
    )
}