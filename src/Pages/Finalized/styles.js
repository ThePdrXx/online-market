import styled from "styled-components";
import { Paper } from '@mui/material';

export const FinishBox = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    padding-bottom: 2rem;
    width: 18rem;
    
    a {
        margin-top: 2rem;
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }
`