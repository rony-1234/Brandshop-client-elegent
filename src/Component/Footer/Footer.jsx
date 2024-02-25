

const Footer = () => {
    return (
        <footer className="footer text-black opacity-90 p-10 bg-gradient-to-r from-[#FEB692] via-purple-500 to-[#FFD3B6]">
        <aside>
        <img className="w-15 h-10 rounded-lg" src="https://i.ibb.co/8rhJLMz/12121.png"/>

          <span className="font-bold text-3xl text-pink-700">ELEGENT</span>
          <p>Fashion is a popular aesthetic expression<br/>Providing reliable tech since 1992</p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Home Monitoring</a> 
          <a className="link link-hover">Air filter</a> 
          <a className="link link-hover">Smart Building</a> 
          <a className="link link-hover">For Contractor</a>
        </nav> 
        <nav>
          <header className="footer-title">My Account</header> 
          <a className="link link-hover">My Account</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Shopping Cart</a> 
          <a className="link link-hover">Shop</a>
        </nav> 
        <nav>
          <header className="footer-title">Contact Info</header> 
          <a className="link link-hover">Address:</a> 
          <a className="link link-hover">Phone </a> 
          <a className="link link-hover">Email</a>
        </nav>
      </footer>
    );
};

export default Footer;