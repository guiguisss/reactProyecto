import { Grid, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { MonedaContexto } from '../contexto/MonedaContexto'

const Input = () => {

  const {primeraCant, setPrimeraCant} = useContext(MonedaContexto);
  return (
    <Grid item xs={10}>
        <TextField
            value={primeraCant}
            onChange={e => setPrimeraCant(e.target.value)}
            label="Cantidad"
            fullWidth
            InputProps={{
                type: "number"
            }}
        />
    </Grid>
  )
}

export default Input