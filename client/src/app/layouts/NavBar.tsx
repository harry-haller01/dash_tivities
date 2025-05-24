import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, MenuItem, Typography } from '@mui/material';
import { Group } from '@mui/icons-material';

type Props = {
  openForm: () => void
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #24292f 0%, #2a2f35 50%, #20252b 100%)'
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize='large'/>
                <Typography variant='h5'>Dash-Tivities</Typography>
              </MenuItem>
            </Box>
            <Box sx={{display: 'flex'}}>
              <MenuItem sx={{
                fontSize: '1rem', textTransform: 'uppercase', fontWeight: 'bold'
              }}>
                Activities
              </MenuItem>
              <MenuItem sx={{
                fontSize: '1rem', textTransform: 'uppercase', fontWeight: 'bold'
              }}>
                About
              </MenuItem>
              <MenuItem sx={{
                fontSize: '1rem', textTransform: 'uppercase', fontWeight: 'bold'
              }}>
                Contact
              </MenuItem>
            </Box>
            <Button size='small' variant='outlined' color='inherit' onClick={openForm}>
              Create activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
