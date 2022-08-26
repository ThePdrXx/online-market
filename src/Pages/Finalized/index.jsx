import { Typography, Box, Button } from "@mui/material";

import { FinishBox } from "./styles";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { calcTotal } from '../../utils';

import purchase from '../../assets/purchase.png'

function Finalized({ products, user }) {
    console.log(products);

    console.log(user);

    const total = calcTotal(products)

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'lightgray',
                height: '100vh',
            }}
        >
            <FinishBox elevation={0}>
                <Typography variant="h5" sx={{ lineHeight: 2 }}>
                    {user?.name}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                    Sua compra no valor <strong>{total + ' '}</strong>
                    foi finalizada com sucesso.
                </Typography>
                <Box ml={4}>
                    <img src={purchase} alt="" width='120rem' />
                </Box>
                <Link to='/'>
                    <Button
                        variant='contained'
                        type='submit'
                        id='register'
                        color='warning'
                    >
                        Iniciar nova compra
                    </Button>
                </Link>
            </FinishBox>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.user
})

export default connect(mapStateToProps)(Finalized)