import '../styles/home.css'
import Header from '../components/header'

const Home = () => {
    return (
        <div className='main'>
            <Header />
            <div className='quote'>
                <h1 className='q'>BEST IN KAPURTHALA</h1>
            </div>
            <div className='center_container'>
                <div className='img_cont1'>
                    <img className='img1' src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                </div>
                <div className='img_container'>
                    <div className='img_cont'>
                        <img className='img' src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                        <h1 className='img_header1'>ABCDEF</h1>
                    </div>
                    <div className='img_cont'>
                        <img className='img' src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                        <h1 className='img_header2'>ABCDEF</h1>
                    </div>
                    <div className='img_cont'>
                        <img className='img' src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                        <h1 className='img_header3'>ABCDEF</h1>
                    </div>
                    <div className='img_cont'>
                        <img className='img' src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                        <h1 className='img_header4'>ABCDEF</h1>
                    </div>
                </div>
                
            </div>
            <div className='aboutus_container'>
                <h1 className='aboutus'>About Us</h1>
                <p className='par'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smart solutions is the best computer/laptop repair shops in Kapurthala. We repair hardware of computer and fix computers PCs, laptops, Printers, at affordable rates in Kapurthala. We also offer quality and on time repairs without wasting your valuable time.</p>
                <p className='par'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We also offer Home & Business installations to ensure all your devices are connected and operating properly. We are open from Monday-Saturday and provide a NO FIX NO FEE SERVICE! We have over 20 years of experience fixing computers and guarantee a high level of service with 90% of repairs fixed within 48 hours.</p>
            </div>
        </div>
    )
}

export default Home