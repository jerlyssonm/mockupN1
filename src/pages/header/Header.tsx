import { Icons } from '../../assets/icons'
import './header.scss'


function Header () {
    return(
        <header>
            <div className="sub-header">
                <span>{Icons.GoSync}PRIMEIRA TROCA GRÁTIS</span>
                <span>{Icons.HiTruck}FRETE GRÁTIS NAS COMPRAS ACIMA DE R$500</span>
                <span>PARCELE EM ATÉ 6X SEM JUROS</span>
            </div>
            <div className="main-header">
                <div className="logo"><h5>agência<span>N1</span></h5></div>
                <nav className="navbar">
                    <a href="">Lançamento</a>
                    <a href="">Tênis</a>
                    <a href="">T-shirts</a>
                    <a href="">Calças</a>
                    <a href="">Inverno</a>
                    <a href="">Off</a>
                </nav>
                <div className="nav-utils">
                    <form action="">
                        <input type="text" placeholder="O que esta procurando"/>
                        <a href="">{Icons.Search}</a>
                    </form>
                    <a href="">{Icons.User}</a>
                    <a href="">{Icons.Cart} <span>3</span> </a>
                </div>
            </div>
        </header>
    )
}

export default Header