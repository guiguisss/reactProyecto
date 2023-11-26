import {Box, Container, Grid, Typography } from '@mui/material'
import Input from './componentes/Input'
import SelectPais from './componentes/SelectPais'
import Cambiar from './componentes/Cambiar'
import { useContext, useEffect, useState} from 'react';
import { MonedaContexto } from './contexto/MonedaContexto';
import axios from 'axios';
function App() {

  const {
    deMoneda,
    setDeMoneda,
    aMoneda,
    setAMoneda,
    primeraCant,

  } = useContext(MonedaContexto);

  
  const [resultadoMoneda, setResultado] = useState(0);
  const codigoMoneda = deMoneda.split("")[0] + deMoneda.split("")[1] + deMoneda.split("")[2];
  const codigoAMoneda = aMoneda.split("")[0] + aMoneda.split("")[1] + aMoneda.split("")[2];

  const codMon = codigoMoneda.toString();
  const codAMon = codigoAMoneda.toString();
  console.log(primeraCant);

  if (codMon == "CLP"){
    var result= primeraCant*0.0011;

    
  }
  else if (codMon == "VES"){
    var result= primeraCant*0.028235;

    
  }
  else if (codMon == "USD"){
    var result= primeraCant*1;

    
  }
  else if (codMon == "UYU"){
    var result= primeraCant*0.025436;

    
  }
  else if (codMon == "PYG"){
    var result= primeraCant*0.000135;


  }
  else if (codMon == "PEN"){
    var result= primeraCant*0.268257;


  }
  else if (codMon == "ARS"){
    var result= primeraCant*0.00281;

  
  }
  else if (codMon == "BRL"){
    var result= primeraCant*0.203982;

  
  }
  else if (codMon == "COL"){
    var result= primeraCant* 0.000247;

   
  }
  else if (codMon == "BOB"){
    var result= primeraCant*0.145194;

    
  }
  else {
    console.log(codAMon);
  }

  if (codAMon== "CLP"){
    var fin= result* 868.015155;
    
  }
  else if (codAMon== "VES"){
    var fin= result*  35.417171;
    
  }
  else if (codAMon== "USD"){
    var fin= result* 1;
    
  }
  else if (codAMon== "UYU"){
    var fin= result* 39.314396;
    
  }
  else if (codAMon== "PYG"){
    var fin= result* 7415.267986;
    
  }
  else if (codAMon== "PEN"){
    var fin= result* 3.727775;
    
  }
  else if (codAMon== "ARS"){
    var fin= result* 355.856805;
    
  }
  else if (codAMon== "BRL"){
    var fin= result* 4.9024;
    
  }
  else if (codAMon== "COL"){
    var fin= result* 4054.42675;
    
  }
  else if (codAMon= "BOB"){
    var fin= result*  6.887357;
    
  }
  else {
    console.log(codAMon);
  }

console.log(fin);

  
  const cajon = {
    background: "#fdfdfd",
    marginTop:"15rem",
    textAlign: "center",
    color: "purple",
    minHeight: "20rem",
    borderRadius: 3,
    padding:"4rem 2rem",
    boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }
  return (
  <Container maxWidth="md" sx={cajon}>
    <Typography variant='h5' sx={{ marginBottom: "4rem"}}>Convertidor de Divisas REACT</Typography>
  <Grid container spacing={3}>
    <Input/>
    <SelectPais valor={deMoneda} setValor={setDeMoneda} label="De"/>
    <Cambiar/>
    <SelectPais valor={aMoneda} setValor={setAMoneda} label="A"/>
  </Grid>
  {primeraCant ?(
    <Box>
      <Typography>Resultado:{fin}</Typography>

    </Box>
  ) : ""}
  </Container>
  )
}

export default App
