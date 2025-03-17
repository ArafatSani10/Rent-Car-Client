import { FaLinkedin, FaFacebookMessenger, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#181E4B] to-[#1f2a6d] text-white py-8 px-6">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {/* Left Section with Logo and Social Links */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="https://i.ibb.co.com/bgjrnvfm/b5cf023abd09ddbe26dac95eebfedf04.png"
                        alt="Logo"
                        className="w-32 mb-4"
                    />
                    <p className="text-start md:text-left mb-4">
                        Welcome to our card collection! Get inspired and find the best designs for all occasions.
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://www.linkedin.com" className="text-2xl hover:text-yellow-500">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.messenger.com" className="text-2xl hover:text-yellow-500">
                            <FaFacebookMessenger />
                        </a>
                        <a href="https://www.twitter.com" className="text-2xl hover:text-yellow-500">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" className="text-2xl hover:text-yellow-500">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Company Section */}
                <div className="flex flex-col items-start md:items-start">
                    <h6 className="footer-title text-xl font-semibold mb-3">Company</h6>
                    <a href="#about" className="link link-hover mb-2 hover:text-yellow-500">About Us</a>
                    <a href="#designations" className="link link-hover mb-2 hover:text-yellow-500">Designations</a>
                    <a href="#shop" className="link link-hover mb-2 hover:text-yellow-500">Shop Cards</a>
                    <a href="#gallery" className="link link-hover mb-2 hover:text-yellow-500">Gallery</a>
                </div>

                {/* Useful Links Section */}
                <div className="flex flex-col items-start md:items-start">
                    <h6 className="footer-title text-xl font-semibold mb-3">Useful Links</h6>
                    <a href="#contact" className="link link-hover mb-2 hover:text-yellow-500">Contact</a>
                    <a href="#privacy" className="link link-hover mb-2 hover:text-yellow-500">Privacy Policy</a>
                    <a href="#terms" className="link link-hover mb-2 hover:text-yellow-500">Terms of Service</a>
                    <a href="#faq" className="link link-hover mb-2 hover:text-yellow-500">FAQ</a>
                </div>

                {/* Newsletter Form Section */}
                <div className="flex flex-col items-start md:items-start">
                    <h6 className="footer-title text-xl font-semibold mb-3">Join Our Newsletter</h6>
                    <p className="text-start md:text-left mb-4">Stay updated with our latest card designs and promotions.</p>
                    <form className="flex flex-col items-center md:items-start w-full max-w-xs mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full mb-4 py-2 px-3 text-black"
                        />
                        <button className="btn bg-yellow-500 text-white px-6 py-2 hover:bg-yellow-600 w-full">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Horizontal Line */}
            <hr className="my-6 text-white" />

            {/* Footer Bottom */}
            <div className="text-center text-sm">
                <p>&copy; 2025 Card Collections. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
