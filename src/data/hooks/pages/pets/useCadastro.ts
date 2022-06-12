import { NOMEM } from "dns";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";
import { Axios, AxiosError } from "axios"

export function useCadastro(){
    const [name, setName] = useState(""),
        [history, setHistory] = useState(""), 
        [photo, setPhoto] = useState(""),
        [message, setMessage] = useState("")

    function cadastrar(){
        if (validarFormulario()){
            ApiService.post("/pets", {
                name,
                history, 
                photo
            })
            .then(() => { 
                limpar();
                setMessage("Pet cadastrado com sucesso!")
            })
            .catch((error: AxiosError) => { 
                setMessage(error.response?.data.message)
            })
        }else { 
            setMessage("Preencha todos os campos!")
        }
    }

    function validarFormulario(){
        return name.length > 2 && history.length > 20 && photo.length > 20
    }

    function limpar(){
        setName("");
        setHistory("");
        setPhoto("");
    }

    return { name,
        history,
        photo,
        setName,
        setHistory,
        setPhoto,
        cadastrar,
        message,
        setMessage}
}


