import logo from '../../../assets/logoFF.png'
import Container from '../Container/Container';

const Footer = () => {
    return (
        <div className='bg-black'>
            <Container>
                <footer className="footer p-10 py-24 text-white">
                    <div>
                        <img className='w-52' src={logo} alt="" />
                        <p className='text-lg'>Sports Mastery<br />A Quality Full Sports Academy</p>
                    </div>
                    <div>
                        <span className="uppercase font-extrabold tracking-widest text-2xl">Quick Links</span>
                        <a className="link link-hover text-lg">About Us</a>
                        <a className="link link-hover text-lg">Services</a>
                        <a className="link link-hover text-lg">Admission</a>
                        <a className="link link-hover text-lg">News</a>
                    </div>
                    <div>
                        <span className="uppercase font-extrabold tracking-widest text-2xl">UseFull Links</span>
                        <a className="link link-hover text-lg">Privacy Policy</a>
                        <a className="link link-hover text-lg">Terms & Conditions</a>
                        <a className="link link-hover text-lg">Career</a>
                        <a className="link link-hover text-lg">FAQ</a>
                    </div>
                    <div>
                        <span className="uppercase font-extrabold tracking-widest text-2xl">Get In Touch</span>
                        <a className="link link-hover text-lg">Mirpur-1, Dhaka</a>
                        <a className="link link-hover text-lg">+880 16263-82361</a>
                        <a className="link link-hover text-lg">mhnoman75@gmail.com</a>
                    </div>
                </footer>
                <div className='bg-black text-white text-sm md:text-base text-center md:flex justify-between px-10 py-5 border-t-[1px]'>
                    <p>Sports Mastery Academy by <span className='font-bold tracking-wider'>Mahmudul Hasan</span></p>
                    <p>Copyright © 2023. All rights reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;