function Footer() {
    const date = new Date()
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; {date.getFullYear()} Александр Карев</p>
        </footer>
    )
}

export default Footer;