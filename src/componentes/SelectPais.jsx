import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material'
import useAxios from '../hooks/useAxios'

const SelectPais = (props) => {

  const { valor, setValor, label } = props;
  const paises = [
    {
      codigo: "CLP",
      nombre: "Chile",
    },
    {
      codigo: "VES",
      nombre: "Venezuela",
    },
    {
      codigo: "USD",
      nombre: "Ecuador",
    },
    {
      codigo: "UYU",
      nombre: "Uruguay",
    },
    {
      codigo: "PYG",
      nombre: "Paraguay",
    },
    {
      codigo: "PEN",
      nombre: "Peru",
    },
    {
      codigo: "ARS",
      nombre: "Argentina",
    },
    {
      codigo: "BRL",
      nombre: "Brasil",
    },
    {
      codigo: "COL",
      nombre: "Colombia",
    },
    {
      codigo: "BOB",
      nombre: "Bolivia",
    },

  ];

  const dataPais = paises.map(item => {
    return `${item.codigo} - ${item.nombre}`
  });
  console.log(dataPais)
  return (
    <Grid item xs={12} md={3}>
         <Autocomplete
            value={valor}
            disableClearable
            onChange={(event, nuevoValor) =>{
              setValor(nuevoValor)
            }}
            options={dataPais}
            renderInput={(params) => <TextField {...params} 
            label={label}
            />}
        />
    </Grid>
  )
}

export default SelectPais