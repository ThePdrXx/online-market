import { connect } from 'react-redux'
import * as ProductActions from '../../../../store/actions'

import { Grid, Typography, Button, } from '@mui/material';
import { Box } from '@mui/system';

import { CardCustom, ContentHidden, CustomButton, ProductAction, ContentUp } from './styles'

import rmv from '../../../../assets/rmv.svg'
import add from '../../../../assets/add.svg'
import { useState } from 'react';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../../../utils';

function Products({ products, updateCount }) {
    const [updatedProducts, setUpdatedProducts] = useState(products)

    const updateProducts = (action, id) => {
        const newProducts = updatedProducts.map(p => {
            if (p.id === id) {
                if (p.count === 0 && action === 'minus') {
                    return item
                }
                return { ...p, count: action === 'plus' ? p.count + 1 : p.count - 1 }
            }
            return p
        })

        setUpdatedProducts(newProducts)
    }

    const updateCart = (id, count) => {
        updateCount(id, count)
    }

    return (
        <Box mt={4} mb={4} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {updatedProducts.map((product) =>
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <CardCustom elevation={0}>
                            <img src={product.image} />
                            <ContentUp className='content-up'>
                                <Typography variant='subtitle2' color='gray'>
                                    {product.name}
                                </Typography>
                                <Typography variant='subtitle1' color='gray'>
                                    <strong>{formatPrice(product.price)}</strong>
                                </Typography>
                                <Typography variant='caption' color='#b0b6bd'>
                                    Em até 12x de
                                    {' ' + formatPrice(product.price / 12)} <br />
                                    {formatPrice(product.price - product.price / 10) + ' '}
                                    à vista (10% de desconto)
                                </Typography>
                                <ContentHidden className='content-hidden'>
                                    <ProductAction>
                                        <CustomButton onClick={() => updateProducts('minus', product.id)}><img src={add} alt="" /></CustomButton>
                                        <input className='input-card' disabled min='0' value={product.count} />
                                        <CustomButton onClick={() => updateProducts('plus', product.id)}><img src={rmv} alt="" /></CustomButton>
                                    </ProductAction>
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        onClick={() => updateCart(product.id, product.count)}
                                    >
                                        Adicionar
                                    </Button>
                                </ContentHidden>
                            </ContentUp>
                        </CardCustom>
                    </Grid>
                )}
            </Grid>
        </Box >
    )
}

const mapStateToProps = (state) => ({ products: state.products })

const mapDispatchToProps = (dispatch) => bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Products)