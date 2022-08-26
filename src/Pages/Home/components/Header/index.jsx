import { Typography } from '@mui/material';

export function Header() {
    return (
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
            Produtos
        </Typography>
    )
}