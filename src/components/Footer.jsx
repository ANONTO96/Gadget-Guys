

const Footer = () => {
    return (
      <footer className="bg-zinc-200 p-10">
        <div className="text-center mb-5">
          <h1 className="text-2xl md:text-3xl">
            Gadget Guys
          </h1>
          <p className="text-lg text-gray-500">
          Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
      <div className="footer flex justify-evenly">
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Github</a>
      </nav>
      <nav>
        <h6 className="footer-title">Explore</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </nav>
      </div>
    </footer>
    );
};

export default Footer;