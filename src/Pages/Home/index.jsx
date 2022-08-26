import Products from './components/Products'
import { Header } from './components/Header';
import Form from './components/Form';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export function Home() {
    return (
        <Box m={2}>
            <Container maxWidth="xl">
                <Header />
                <Products />
                <Form />
            </Container>
        </Box>
    )
}