import { NextPage } from "next"
import { useCadastro } from "../../data/hooks/pages/pets/useCadastro"
import Title from "../../ui/components/title/title"
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material"
import { SlowBuffer } from "buffer"

const Cadastro: NextPage = () => {
    const { 
        name,
        history,
        photo,
        setName,
        setHistory,
        setPhoto,
        cadastrar,
        message,
        setMessage
    } = useCadastro();

    return (
        <>
            <Title
                title={"Cadastro de Pets para Adoçäo"}
                subtitle={"Preencha os dados do novo pet"}
            ></Title>

            <Paper sx={{ maxWidth: 970, mx:"auto", p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={"Nome"}
                            placeholder={"Digite o nome do pet"}
                            fullWidth
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        value={history}
                        onChange={(e) => setHistory(e.target.value)}
                        label={"Historia do Pet"}
                        multiline
                        fullWidth
                        rows={4}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={photo}
                            onChange={ (e) => setPhoto(e.target.value)}
                            label={"Foto"}
                            fullWidth
                            placeholder={"Digite o endereço da imagem"}
                        ></TextField>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            sx={ { mt: 2}}
                            component={"a"}
                            href={"https://imgur.com/upload"}
                            target={"_blank"}
                        >Enviar Imagem</Button>
                        <Grid item xs={12} sx={{ textAlign: "center"}}>
                            <Button
                                onClick={cadastrar}
                                variant="contained"
                                fullWidth
                                sx={{ maxWidth: {md: 200}, mt:4}}
                            >Cadastrar Pet</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar
                open={message.length > 0 }
                autoHideDuration={ 2500}
                onClose={() => setMessage("")}
                message={message}
            ></Snackbar>
        </>
    )
}

export default Cadastro;