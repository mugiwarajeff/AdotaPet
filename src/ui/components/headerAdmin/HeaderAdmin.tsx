import { HeaderContainer, Logo, LinkContainer } from "./HeaderAdmin.style"
import { Link, Box } from "@mui/material";
import NextLink from "next/link"
import { display } from "@mui/system";

export default function HeaderAdmin(){
    return (
        <HeaderContainer>
            <div>
                <Logo src={"/images/logo.svg"} alt={"Adote um pet"}></Logo>
                <LinkContainer>
                    <Link component={NextLink} href={"/pets/cadastro"}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={"/pet/relatorio"}>
                    <a>Relatorio 
                        <Box component={"span"} sx={
                            {display: { sm: "initial", 
                                        xs:"none"
                                       }}
                            }>
                            de adoçao
                        </Box>
                    </a>
                    </Link>
                </LinkContainer>
            </div>
        </HeaderContainer>
    )
}