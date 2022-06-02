import { Button } from "@mui/material"
import { TextService } from "../../../data/services/TextService" 
import {
    ListStyled,
    ListItemStyled, 
    PhotoStyled,
    InformationStyled,
    NameStyled,
    DescriptionStyled
} from "./lista.style"
import { Pet } from "../../../data/@types/Pet"

interface ListProps {
    pets: Pet[]
}
export default function List(props: ListProps){
    const tamanhoMaximo = 200;
    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ListItemStyled key={pet.id}>
                <PhotoStyled src={pet.photo}></PhotoStyled>
                <InformationStyled>
                    <NameStyled>
                        {pet.name}
                    </NameStyled>
                    <DescriptionStyled>
                       {TextService.limitarTexto(pet.history, tamanhoMaximo)};
                    </DescriptionStyled>
                    <Button variant={"contained"} fullWidth>adotar {pet.name}</Button>
                </InformationStyled>
                </ListItemStyled>
            ))}
            
        </ListStyled>
    )
}


