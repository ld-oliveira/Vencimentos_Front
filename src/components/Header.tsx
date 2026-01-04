import logo from "../assets/logo.ico";
import "../styles/Header.scss";



function Header (){
    return(
        <>
        <section className="Section-header">
            <div className="Div-header">
                <img className="logo-header" 
                src={logo} 
                alt="logo do sistema"/>
             
            </div>
            <div>
                <a href="https://lnk.bio/Leo.oliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-header"> Contato </a>

            </div>

        </section>
        </>
    )
}

export default Header