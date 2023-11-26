import {Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { MonedaContexto } from '../contexto/MonedaContexto';

const Cambiar = () => {
  const {
    deMoneda,
    setDeMoneda,
    aMoneda,
    setAMoneda

  } = useContext(MonedaContexto)

  const handleSwitch = () => {
    setDeMoneda(aMoneda);
    setAMoneda(deMoneda);
  }
  return (
    <Grid item xs={12} md="auto">
       <Button onClick={handleSwitch} sx={{
        borderRadius: 2,
        height: "120%"
       }}>
        <CurrencyBitcoinIcon sx={{ fontSize: 40}}/>
        Cambiar
       </Button>
    </Grid>
  )
}

export default Cambiar