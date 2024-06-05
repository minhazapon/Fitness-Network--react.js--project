



const Footer = () => {
    return (
        <div>

<footer className="footer p-10 bg-base-200 text-base-content">
  <aside>

    <img src="https://i.ibb.co/mBQWDSX/running.png" alt="" />
    <p className=" text-6xl font-serif">Fitness <span className=" text-yellow-400">Network</span></p>
  </aside> 
  <nav>
                <h6 className="footer-title">Social</h6> 
                <div className=' flex items-center gap-2'>
     <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="" /> 
    <a href="https://www.facebook.com/profile.php?id=100011336918123" className="link link-hover">Facebook</a>
    </div>
    <div className=' flex items-center gap-2'>
      <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="" />
    <a href="https://www.linkedin.com/in/minhazul-abedin-apon-346b52297/" className="link link-hover">Linkedin</a>
    </div>


    <div className=' flex items-center gap-2'>
      <img className=' h-[30px]' src="https://i.ibb.co/b6ktwqm/twitter-2.png" alt="" />
    <a href="" className="link link-hover">twitter</a>
    </div>


    </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Gym</a>
    <a className="link link-hover">Clients</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Address</h6> 
    <a className="link link-hover text-xl font-serif ">Email: FitnessNetwork@gmail.com</a>
    <a className="link link-hover  text-xl font-serif ">Number: +8801950374409</a>
    <a className="link link-hover  text-xl font-serif">location: America, New York City</a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;