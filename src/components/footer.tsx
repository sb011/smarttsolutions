import "../styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <h1 className='header'>Smart Solutions</h1>
                    <p className='sub_header'>Simplify the Solution Smartly</p>
                </div>
                <div className="details">
                    <div className="card_container">
                        <div className="card">
                            <h3 className="card_header">Address</h3>
                            <p className="link">6A,Santpura, Kaprthala(144601) </p>
                        </div>
                        <div className="card">
                            <h3 className="card_header">Mobile No.</h3>
                            <p className="link">+91 9464794809 / +91 6280843245 </p>
                        </div>
                    </div>
                    <div className="card_container">
                        <div className="card">
                            <h3 className="card_header">Email</h3>
                            <a className="link" href="mailto:=smarttsolutions85@gmail.com">smarttsolutions85@gmail.com</a>
                        </div>
                        <div className="card">
                            <h3 className="card_header">Website</h3>
                            <a className="link" href="www.smarttsolutions.in">www.smarttsolutions.in</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='copyright'>copyright &copy;2023 <a href="/">smartsolutions</a></p>
            </div>
        </footer>
    )
}

export default Footer