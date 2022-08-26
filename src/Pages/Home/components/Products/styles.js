import styled from 'styled-components';
import { Card } from '@mui/material';

export const CardCustom = styled(Card)`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  img {
    width: auto;
    max-height: 10rem;
  }

   &:hover {
    box-shadow: 0px 0px 4px 3px #cecece;
  }
  
  .content-up {
    width: 100%;
    transition: all .3s;
  }
  &:hover .content-up {
    transform: translateY(0);
  }
  &:hover .content-hidden {
    max-height: 100%;
  }
  `

export const ContentUp = styled.div`
  overflow: hidden;
  transform: translateY(7rem);

`

export const ContentHidden = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: all .3s;
 `

export const ProductAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  .input-card {
    border: 1px solid #b0b6bd;
    border-radius: 5px;
    text-align: center;
    width: 8rem;
  }

`

export const CustomButton = styled.button`
  background-color: #F1F1F1;
  height: 2rem;
  width: 2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #b0b6bd;
    transition: all .2s;
  }
`