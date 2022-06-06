import { useState, useEffect } from "react"
import { Pet } from "../../../data/@types/Pet"
import { ApiService } from "../../services/ApiService"
import { AxiosError } from 'axios'

export function useIndex(){
    const [listaPets, atualizaLista] = useState<Pet[]>([]),

    [petSelecionado, setPetSelecioando] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [valor, setValor] =useState(""),
    [mensagem, setMensagem] = useState("")

    useEffect(
        () => {
            ApiService.get("/pets")
            .then((response) => {
                atualizaLista(response.data);
            })
        }, [])

    useEffect(() => {
            if(petSelecionado === null){
                limparFormulario()
            }
        }, [petSelecionado]
    )

    function adotar(){
        if(petSelecionado !== null){
            if(validarDadosAdocao()){
                ApiService.post("/adocoes", {
                    pet_id: petSelecionado.id,
                    "e-mail": email,
                    valor: valor,
                })
                .then(() => {
                    setPetSelecioando(null);
                    setMensagem("Pet adotado com sucesso");
                    limparFormulario();
                })
                .catch((error: AxiosError) => {
                    setMensagem(error.response?.data.message)
                })
            }else {
                setMensagem("Preencha todos os campos corretamente")
            }
        }
    }

    function validarDadosAdocao(){
        return email.length > 0 && valor.length > 0
    }

    function limparFormulario(){
        setEmail("");
        setValor("");
    }
    return {
        listaPets,
        petSelecionado,
        setPetSelecioando,
        email,
        setEmail,
        valor,
        setValor,
        mensagem, 
        setMensagem,
        adotar
    }
}