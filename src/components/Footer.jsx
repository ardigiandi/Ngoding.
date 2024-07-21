const Footer = () => {
  return (
    <div className="footer bg-white mt-20" id="sosial">
      <div className="container flex justify-between items-center mx-auto px-4">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">Ardi Keren</span>
        </p>
        <div className="sosial-footer items-center flex sm:gap-7 gap-3">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-linkedin-box-fill text-2xl"></i>
          <i className="ri-reddit-fill text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
