import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes(){
    return<>
     <Menu/>
        <Container>
            <Container className="border border-sm border-sucess rounded-pill text-center col-sm-6">
                Lista de produtos de esportes
            </Container>
            <Container>
                 Os produtos
            </Container>
        </Container>
        <Footer/>
    </>
}