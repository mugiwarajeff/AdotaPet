import { NextPage } from "next";
import Title from "../../ui/components/title/title";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"
import { useRelatorio } from "../../data/hooks/pages/pets/useRelatorio"

const Relatorio: NextPage = () => { 

    const { listaRelatorio } = useRelatorio()
    console.log(listaRelatorio[1])
    return ( 
        <>
            <Title 
                title={"Relátorio de Adoçäo"}
                subtitle={"Veja a lista dos pets adotados"}
            ></Title>
            <TableContainer component={Paper} sx={{ maxWidth: 830, mx:"auto", p: {xs: 3, md: 5}}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={"right"}>Valor Mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaRelatorio.map((relatorio) => (
                            <TableRow key={relatorio.id}>
                            <TableCell>{relatorio.pet}</TableCell>
                            <TableCell>{relatorio["e-mail"]}</TableCell>
                            <TableCell align={"right"}>{relatorio.valor}</TableCell>
                        </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Relatorio;