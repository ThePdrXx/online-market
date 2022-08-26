import { Box, Typography, TextField, Button, Autocomplete, Grid } from '@mui/material';

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { useNavigate } from 'react-router-dom';

import * as Actions from '../../../../store/actions'

import { calcTotal } from '../../../../utils';
import { formatPrice } from '../../../../utils';

const options = ['F', 'M', 'Nenhum']

const formValidationSchema = zod.object({
    name: zod.string().min(1, 'Informe seu nome'),
    email: zod.string().email(1, 'Informe um email válido'),
    gender: zod.string().min(1, 'Informe seu sexo'),
})

function Form({ products, saveUserData }) {
    const navigate = useNavigate()

    const total = calcTotal(products)

    const { register, handleSubmit, watch, formState } = useForm({
        resolver: zodResolver(formValidationSchema),
    })

    function handlePurchase(data) {
        saveUserData(data)
        return navigate('/finalized')
    }

    const name = watch('name')
    const isSubmitDisabled = !name

    return (
        <Box>
            <Typography
                variant='h5'
                color='gray'
                sx={{
                    fontWeight: '700',
                    borderBottom: 1,
                    borderColor: 'lightgray',
                    lineHeight: 2.2
                }}
            >
                Dados do Cliente
            </Typography>
            <form onSubmit={handleSubmit(handlePurchase)}>
                <Box mt={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                id="register"
                                label="Nome"
                                placeholder='Nome do cliente aqui'
                                {...register('name')}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                id="register"
                                label="Email"
                                placeholder='Digite seu email aqui'
                                {...register('email')}
                                error={formState.errors?.email}
                                helperText={formState.errors?.email?.message}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Autocomplete
                                disablePortal
                                id="register"
                                options={options}
                                fullWidth
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label="Sexo"
                                        placeholder='Selecione'
                                        {...register('gender')}
                                    />}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={5} sx={{ textAlign: 'end' }}>
                    <Typography variant='h5' color='gray'
                        sx={{
                            fontWeight: '900',
                            lineHeight: 2,
                        }}
                    >
                        Total: {total}
                    </Typography>
                    <Button
                        variant='contained'
                        type='submit'
                        id='register'
                        color='warning'
                        disabled={isSubmitDisabled}
                    >
                        Finalizar Compra
                    </Button>
                </Box>
            </form>
        </Box >
    )
}



const mapStateToProps = (state) => ({
    products: state.products,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)