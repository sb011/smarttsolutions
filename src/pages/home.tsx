import '../styles/home.css'
import Header from '../components/header'

const Home = () => {
    return (
        <div className='main'>
            <Header />
            <div className='quote'>
                <h1 className='q'>BEST IN KAPURTHALA</h1>
            </div>
            <div className='aboutus_container'>
                <h1 className='aboutus'>About Us</h1>
                <p className='par'>Smart solutions is the best computer/laptop repair shops in Kapurthala. We repair hardware of computer and fix computers PCs, laptops, Printers, at affordable rates in Kapurthala. We also offer quality and on time repairs without wasting your valuable time.</p>
                <p className='par'>We also offer Home & Business installations to ensure all your devices are connected and operating properly. We are open from Monday-Saturday and provide a NO FIX NO FEE SERVICE! We have over 20 years of experience fixing computers and guarantee a high level of service with 90% of repairs fixed within 48 hours.</p>
            </div>
        </div>
    )
}

export default Home