import Logo from "../assets/logo/logo.svg";
import LinkedInSvg from "../assets/icons/linkedin.svg";
import InstaSvg from "../assets/icons/insta.svg";
import FbSvg from "../assets/icons/fb.svg";
import XSvg from "../assets/icons/x.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0A0C33] py-5 text-white">
      <section className="px-7 md:px-12 lg:px-15">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 py-15">
          <div className="pe-10">
            <Link to="/">
            <img src={Logo} alt="footer logo" className="h-15 mb-2 cursor-pointer" />
            </Link>
            <p className="text-gray-500">
              Collect. Payout. Reconcile. All-in-one fintech infrastructure
              built for modern merchants.
            </p>
            <div className="flex gap-5 mt-5">
              <img src={XSvg} alt="X" className="cursor-pointer" />
              <img src={FbSvg} alt="FaceBook" className="cursor-pointer" />
              <img src={InstaSvg} alt="Instagram" className="cursor-pointer" />
              <img src={LinkedInSvg} alt="LinkedIn" className="cursor-pointer" />
            </div>
          </div>
          <div className="grid md:col-span-2 gap-4 xl:col-span-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="grid sm:grid-cols-2 col-span-2">
              <div>
                <h6 className="text-gray-500 mb-3">Product</h6>
                <ul>
                  <li className="mb-2 text-gray-200">BridgOnboard</li>
                  <li className="mb-2 text-gray-200">BridgVerify</li>
                  <li className="mb-2 text-gray-200">BridgVault</li>
                  <li className="mb-2 text-gray-200">BridgCollect</li>
                  <li className="mb-2 text-gray-200">BridgPay</li>
                  <li className="mb-2 text-gray-200">BridgRoute</li>
                  <li className="mb-2 text-gray-200">BridgRecon</li>
                </ul>
              </div>
              <ul>
                <li className="mb-2 text-gray-200">Developers</li>
                <li className="mb-2 text-gray-200">Docs</li>
                <li className="mb-2 text-gray-200">Sandbox</li>
              </ul>
            </div>
            <div>
              <h6 className="text-gray-500 mb-3">Company</h6>
              <ul>
                <li className="mb-2 text-gray-200">About us</li>
                <li className="mb-2 text-gray-200">Careers</li>
                <li className="mb-2 text-gray-200">Blogs</li>
                <li className="mb-2 text-gray-200">Privacy Policy</li>
                <li className="mb-2 text-gray-200">Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400 py-5 text-sm">
            © 2025 bridg.money · All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
