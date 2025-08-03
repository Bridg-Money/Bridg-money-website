import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Optional: If using React Router
import LogoLight from "../assets/logo/logo.svg";
import LogoDark from "../assets/logo/logo dark.svg";
import ArrowSvg from "../assets/icons/arrow.svg";
import Dropdown from "./DropDown";
import BridgOnboardSvg from "../assets/svg/bridgonboard.svg";
import BridgVerifySvg from "../assets/svg/bridgverify.svg";
import BridgVaultSvg from "../assets/svg/bridgvault.svg";
import BridgCollectSvg from "../assets/svg/bridgcollect.svg";
import BridgPaySvg from "../assets/svg/bridgpay.svg";
import BridgRouteSvg from "../assets/svg/bridgroute.svg";
import BridgReconSvg from "../assets/svg/bridgrecon.svg";

import NBFCsAndLendersSvg from "../assets/svg/NBFCs & Lenders.svg";
import MarketplacesSvg from "../assets/svg/Marketplaces.svg";
import SaaSAndEdTechSvg from "../assets/svg/SaaS & EdTech.svg";
import RewardsAndGamingSvg from "../assets/svg/Rewards & Gaming.svg";
import InsuranceAndAgenciesSvg from "../assets/svg/Insurance & Agencies.svg";
import LogisticsAndFleetsSvg from "../assets/svg/Logistics & Fleets.svg";
import NeoBanksAndFintechsSvg from "../assets/svg/Neo-Banks & Fintechs.svg";
import FranchisesAndAggregatorsSvg from "../assets/svg/Franchises & Aggregators.svg";
import WealthTechAndInvestmentSvg from "../assets/svg/WealthTech & Investment.svg";
import UtilitiesAndBillersSvg from "../assets/svg/Utilities & Billers.svg";

const navbarMenus = [
  {
    title: "Products",
    type: "dropdown",
    items: [
      {
        icon: BridgCollectSvg,
        heading: "BridgCollect",
        text: "Payment collection APIs",
        link: "",
      },
      {
        icon: BridgPaySvg,
        heading: "BridgPay",
        text: "Instant payouts to anyone, anytime",
        link: "",
      },
      {
        icon: BridgVaultSvg,
        heading: "BridgVault",
        text: "Pooled and current account infra",
        link: "",
      },
      {
        icon: BridgVerifySvg,
        heading: "BridgVerify",
        text: "– Real-time KYC & KYB validation",
        link: "",
      },
      {
        icon: BridgReconSvg,
        heading: "BridgRecon",
        text: "Automated reconciliation engine",
        link: "",
      },
      {
        icon: BridgRouteSvg,
        heading: "BridgRoute",
        text: "Smart multi-bank routing engine",
        link: "",
      },
      {
        icon: BridgOnboardSvg,
        heading: "BridgOnboard",
        text: "Merchant onboarding APIs",
        link: "",
      },
    ],
  },
  {
    title: "Use Cases",
    type: "dropdown",
    items: [
      {
        icon: NBFCsAndLendersSvg,
        heading: "NBFCs & Lenders",
        text: "Disburse, collect, reconcile—faster than your underwriting. KYC? Built-in",
        link: "",
      },
      {
        icon: MarketplacesSvg,
        heading: "Marketplaces",
        text: "Onboard sellers, collect payments, and split cash flows. Zero chaos.",
        link: "",
      },
      {
        icon: SaaSAndEdTechSvg,
        heading: "SaaS & EdTech",
        text: "Recurring billing? Check. Bulk payouts? Done. User verification? Instant",
        link: "",
      },
      {
        icon: RewardsAndGamingSvg,
        heading: "Rewards & Gaming",
        text: "Instant wins, instant payouts. With player KYC and fraud defense built in.",
        link: "",
      },
      {
        icon: InsuranceAndAgenciesSvg,
        heading: "Insurance & Agencies",
        text: "KYB, onboarding, and split commissions—handled like clockwork.",
        link: "",
      },
      {
        icon: LogisticsAndFleetsSvg,
        heading: "Logistics & Fleets",
        text: "Real-time agent payouts. Verified deliveries. Cash collection, bridg’d.",
        link: "",
      },
      {
        icon: NeoBanksAndFintechsSvg,
        heading: "Neo-Banks & Fintechs",
        text: "Your embedded finance engine—accounts, payments, APIs, all in one stack.",
        link: "",
      },
      {
        icon: FranchisesAndAggregatorsSvg,
        heading: "Franchises & Aggregators",
        text: "Sub-ledgers, smart settlements, and streamlined onboarding for every unit.",
        link: "",
      },
      {
        icon: WealthTechAndInvestmentSvg,
        heading: "WealthTech & Investment",
        text: "Move funds with confidence. Compliance, KYC, payouts—all pre wired",
        link: "",
      },
      {
        icon: UtilitiesAndBillersSvg,
        heading: "Utilities & Billers",
        text: "Auto-reconcile every bill. Collect, ledger, and repeat—no manual drama.",
        link: "",
      },
    ],
  },
  { title: "About Us", type: "link", path: "/about" },
  { title: "Contact", type: "link", path: "/contact" },
  { title: "Blogs", type: "link", path: "/blogs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const homeRoute = location.pathname === "/";

  return (
    <nav className={`${homeRoute ? "bg-[#0A0C33]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={homeRoute ? LogoLight : LogoDark} alt="logo" />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-sm text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            {navbarMenus.map((nav, index) =>
              nav.type === "dropdown" ? (
                <Dropdown
                  key={index}
                  button={
                    <div
                      className={`${
                        homeRoute ? "text-gray-300" : "text-gray-700"
                      } text-sm hover:border-b hover:border-b-[#A5EB14] cursor-pointer`}
                    >
                      {nav.title}
                    </div>
                  }
                >
                  <ul className="py-2 text-sm text-gray-700 grid grid-cols-3 max-w-[90vw] w-full">
                    {nav.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.link}
                          className="px-3 py-2 hover:bg-gray-100 hover:rounded-xl flex items-center gap-3"
                        >
                          {item?.icon && (
                            <div className="p-2 bg-[#0A0C33] rounded-full flex-shrink-0">
                              <img
                                src={item.icon}
                                alt={item.heading}
                                className="w-4 h-4"
                              />
                            </div>
                          )}
                          <div>
                            <div className="font-medium">{item.heading}</div>
                            <div className="text-xs text-gray-500">
                              {item.text}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Dropdown>
              ) : (
                <Link
                  key={index}
                  to={nav.path}
                  className={`${
                    homeRoute ? "text-gray-300" : "text-gray-700"
                  } text-sm hover:border-b hover:border-b-[#A5EB14]`}
                >
                  {nav.title}
                </Link>
              )
            )}
          </div>

          <div>
            <button className="bg-[#A5EB14] text-[12px] rounded-3xl py-2 px-5 flex gap-3 items-center">
              Get Started <img src={ArrowSvg} alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={toggleMenu}
          className="absolute inset-0 bg-black opacity-50"
        ></div>

        <div
          className={`relative flex flex-col w-85 bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="self-end p-4 focus:outline-none"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-4 px-6 py-4 overflow-y-auto h-full max-w-[100vw]">
            {navbarMenus.map((nav, index) =>
              nav.type === "dropdown" ? (
                <div key={index}>
                  <button
                    onClick={() => handleDropdownToggle(nav.title)}
                    className="flex justify-between w-full text-gray-700 font-medium"
                  >
                    {nav.title}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === nav.title ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openDropdown === nav.title ? "mt-2" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <div className="pl-2 flex flex-col gap-2 my-5 gap-y-5">
                      {nav.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.link}
                          className="flex gap-3 items-start hover:text-[#A5EB14]"
                        >
                          {item.icon && (
                            <div className="p-2 bg-[#0A0C33] flex-shrink-0 rounded-full">
                              <img
                            src={item.icon}
                            alt={item.heading}
                            className="w-4 h-4 object-contain"
                          />
                            </div>
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-700">
                              {item.heading}
                            </div>
                            <div className="text-xs text-gray-500">
                              {item.text}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={nav.path}
                  className="text-gray-700 text-sm hover:text-[#A5EB14]"
                >
                  {nav.title}
                </Link>
              )
            )}
            <button className="bg-[#A5EB14] text-[12px] rounded-3xl py-2 px-5 flex gap-3 items-center">
              Get Started <img src={ArrowSvg} alt="arrow" />
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
