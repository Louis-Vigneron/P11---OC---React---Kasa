import Logo from "../../Assets/LOGO FOOTER.svg"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src = {Logo} alt='Logo' />
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer