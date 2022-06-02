import { TitleStyled, SubtitleStyled } from "./title.style";

interface TituloProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TituloProps){
    return (
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <SubtitleStyled>{props.subtitle}</SubtitleStyled>
        </>
    
    )
}
