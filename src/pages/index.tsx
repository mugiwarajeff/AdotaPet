import type { NextPage } from 'next'
import Title from "../ui/components/title/title"
import List from "../ui/components/lista/lista"
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from "@mui/material"
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {

  const { 
    listaPets,
    petSelecionado,
    setPetSelecioando,
    valor,
    setValor,
    email,
    setEmail,
    mensagem,
    setMensagem,
    adotar
   } = useIndex()
  return (
  <div>
    <Title title="" subtitle={<span>
      Com um pequeno valor mensal, voce <br/> pode <strong>adotar um pet virtualmente</strong>
    </span>}></Title>
    <List 
    pets={listaPets}
    onSelect={(pet) => setPetSelecioando(pet)}/>

    <Dialog 
      open={petSelecionado !== null}
      fullWidth
      PaperProps={{ sx: { p: 5}}} //dar uma pesquisada no atributo sx
      onClose={() => setPetSelecioando(null)}
     >
       <Grid container spacing={2}>
         <Grid item xs={ 12 }>
          <TextField 
            label={"E-mail"} 
            fullWidth 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
         </Grid>
        <Grid item xs={ 12 }>
          <TextField 
            label={"Quantia por Mes"} 
            fullWidth 
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          ></TextField>
        </Grid>
       </Grid>

       <DialogActions sx={{mt: 5}}>
          <Button 
            color={"secondary"}
            onClick={() => setPetSelecioando(null)}
          >
            Cancelar
          </Button>
          <Button 
            variant='contained'
            onClick={() => adotar()}
          >
            Confirmar adoçäo 
          </Button> 
       </DialogActions>
     </Dialog>

     <Snackbar 
      open={mensagem.length > 0}
      message={mensagem}
      autoHideDuration={2500}
      onClose={() => setMensagem("")}
     ></Snackbar>
  </div>)
}

export default Home
