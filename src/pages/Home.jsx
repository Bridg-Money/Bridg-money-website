import DevFirstApiPlatformImg from "../assets/svg/developer first api platform.svg";
import { ArrowSvg } from "../components/Svg";
import BridgSvg from "../assets/svg/bridg.svg";
import BridgOnboardSvg from "../assets/svg/bridgonboard.svg";
import BridgVerifySvg from "../assets/svg/bridgverify.svg";
import BridgVaultSvg from "../assets/svg/bridgvault.svg";
import BridgCollectSvg from "../assets/svg/bridgcollect.svg";
import BridgPaySvg from "../assets/svg/bridgpay.svg";
import BridgRouteSvg from "../assets/svg/bridgroute.svg";
import BridgReconSvg from "../assets/svg/bridgrecon.svg";
import AicpaSvg from "../assets/images/aicpa soc.png";
import RbiSvg from "../assets/images/rbi.png";
import IsoSvg from "../assets/images/iso.png";
import PciSvg from "../assets/images/pci.png";
import TestimonalSvg from "../assets/svg/client container.svg";
import DurationSvg from "../assets/icons/duration.svg";
import CodeSvg from "../assets/icons/code.svg";
import SlaSvg from "../assets/icons/sla.svg";
import GradeSvg from "../assets/icons/grade.svg";
import HeroDecorDashboardSvg from "../assets/svg/hero decor dahboard.svg";
import AutomatedReconciliationEngine from "../assets/images/automated reconciliation engine.png";

const products = [
  {
    id: 1,
    icon: BridgOnboardSvg,
    title: "BridgOnboard",
    heading: "Onboard Merchants & Businesses.Fast, Compliant, Automated.",
    text: "Build seamless onboarding journeys with KYB flows, instant verification, and decision automation — all powered by APIs.",
    lists: [
      "Digital onboarding with PAN, GST, Aadhaar & Bank validation",
      "Auto-approval engine based on business types",
      "Upload + OCR for documents with fraud detection",
      "Real-time status updates via webhook",
      "Audit trails and timeline view for every merchant",
    ],
  },
  {
    id: 2,
    icon: BridgVerifySvg,
    title: "BridgVerify",
    heading: "Verify Identities. In Real Time.",
    text: "Plug in KYC & KYB verification with ultra-fast response times —built for scale, trust, and regulatory peace of mind.",
    lists: [
      "PAN, Aadhaar, GSTIN & Bank account verification",
      "UBO and Director checks for entity verification",
      "Blacklist, watchlist & sanction screening",
      "Instant API-based responses, audit-ready trails",
      "Secure, compliant, and developer-first",
    ],
  },
  {
    id: 3,
    icon: BridgVaultSvg,
    title: "BridgVault",
    heading: "Banking Infrastructure, Delivered via API.",
    text: "Create virtual or current accounts with sub-ledgers, ledgering rules, and fund segregation under your brand, across banks.",
    lists: [
      "Virtual & current account creation via API",
      "Sub-ledgering for pooled models",
      "Compliant fund flow logic (T+1/T+N)",
      "Bring your own bank or use Bridg's partner banks",
      "Real-time account status, lifecycle hooks & webhooks",
    ],
  },
  {
    id: 4,
    icon: BridgCollectSvg,
    title: "BridgCollect",
    heading: "Collect Payments Seamlessly Across Channels.",
    text: "From UPI to virtual accounts, unify your collections under one API layer —with reconciliation built in.",
    lists: [
      "Accept UPI, netbanking, cards, and virtual account transfers",
      "Dynamic QR code and smart link support",
      "Auto-reconciliation with BridgRecon",
      "Transaction success/failure alerts via webhook",
      "Retry logic for failed payments",
    ],
  },
  {
    id: 5,
    icon: BridgPaySvg,
    title: "BridgPay",
    heading: "Payouts at Scale. Built for Reliability.",
    text: "Disburse funds instantly via UPI, IMPS, or NEFT — with smart retries, maker-checker flow, and audit logs.",
    lists: [
      "API-based and bulk payout support",
      "UPI, IMPS, NEFT coverage 24•7",
      "Maker-checker approval workflows",
      "Payout logs, tracking & retry engine",
      "Works with pooled or current accounts",
    ],
  },
  {
    id: 6,
    icon: BridgRouteSvg,
    title: "BridgRoute",
    heading: "Route Transactions Across Banks, Smartly.",
    text: "Optimize cost and uptime by routing collections and payouts across partner banks with intelligent fallback logic.",
    lists: [
      "Dynamic routing rules per transaction type",
      "Bank performance monitoring (success rate, downtime)",
      "Fallback & load-balancing support",
      "Dashboard for config & override",
      "Works natively with BridgPay and BridgCollect",
    ],
  },
  {
    id: 7,
    icon: BridgReconSvg,
    title: "BridgRecon",
    heading: "Automated Reconciliation Engine.",
    text: "Close your books faster with realtime matching of collections, payouts, and settlements — no spreadsheets needed.",
    lists: [
      "Auto-match virtual accounts and transaction logs",
      "T+0/T+1 reconciliation workflows",
      "GST & MIS-ready downloadable reports",
      "Ledger updates with webhook triggers",
      "API or dashboard export for finance teams",
    ],
  },
];

const Home = () => {
  const ApiIntegrationFeatures = [
    {
      icon: DurationSvg,
      header: "5 min",
      txt: "Setup time",
    },
    {
      icon: GradeSvg,
      header: "Bank Grade",
      txt: "Security",
    },
    {
      icon: SlaSvg,
      header: "99.9%",
      txt: "Uptime SLA",
    },
    {
      icon: CodeSvg,
      header: "REST/ GraphQL",
      txt: "API Types",
    },
  ];
  return (
    <div>
      <section className="bg-[#0A0C33]">
        <div className="px-6 xl:px-20 pt-10">
          <h1 className="text-white text-4xl lg:px-60 lg:text-5xl mb-4 leading-[3.5rem] lg:leading-[4.2rem] font-extrabold text-center">
            Need to Move Money, Fast?{" "}
            <span className="inline-flex items-baseline gap-4">
              Just
              <img
                src={BridgSvg}
                alt="Bridg Money"
                className="h-[.8em] align-baseline"
              />
              Bridg It.
            </span>
          </h1>
          <p className="text-gray-300 text-center px-10 md:px-30 xl:px-50 text-lg xl:text-xl">
            Your trusted Technology Service Provider for secure, scalable, and
            compliant financial infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 my-10">
            <button className="bg-[#A5EB14] text-sm rounded-3xl py-2 px-5 flex gap-3 items-center">
              Get Started <ArrowSvg />
            </button>
            <button className="border text-sm border-white text-white rounded-3xl py-2 px-5 flex gap-3 items-center">
              Book a Demo <ArrowSvg color="white" />
            </button>
          </div>
          <div className="flex justify-center">
            <img src={HeroDecorDashboardSvg} alt="dashboard" />
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#FCF9F0] p-6 md:p-10 xl:p-15 mb-10">
        <div className="flex justify-center my-5">
          <h1
            className="
                    relative px-7 before:content-[''] before:absolute before:left-[7px] before:top-1/2 before:-translate-y-1/2 before:w-[11px] before:h-[11px] before:rounded-full before:bg-[#CDFF66] 
                    after:content-[''] after:absolute after:right-[7px] after:top-1/2 after:-translate-y-1/2 after:w-[11px] after:h-[11px] after:rounded-full after:bg-[#CDFF66]
                    text-sm my-2 bg-[#1E1E1E] w-max rounded-2xl py-1 text-white"
          >
            Product
          </h1>
          <span className="rounded-full bg-[#A5EB14]"></span>
        </div>

        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          <span className="text-[#A5EB14]">Solutions</span> built for modern
          Business
        </h1>
        <p className="text-center lg:px-30 xl:px-50 mb-10 text-lg">
          From onboarding to payouts, our comprehensive suite of financial APIs
          provides everything you need to build world-class fintech products
          with proven industry applications.
        </p>
        <Products products={products} />
      </section>

      <section className="px-6 md:px-15 lg:px-10 xl:px-30 my-20">
        <h1 className="text-4xl leading-11 lg:leading-14 lg:text-5xl font-extrabold mb-3 md:mb-4">
          <span className="text-[#A5EB14]"> All-in-One</span> Money
          <br /> Movement Infrastructure
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7 xl:gap-10 my-10">
          <div className="col-span-2 flex flex-wrap lg:flex-nowrap justify-center gap-3 xl:gap-5">
            <h1 className="bg-[#F2FCDC] border [writing-mode:sideways-rl] text-xl rounded-xl py-12 xl:py-14 p-10 border-[#A5EB14]">
              Unified Onboarding & Verification
            </h1>
            <h1 className="bg-[#F2FCDC] border [writing-mode:sideways-rl] text-xl rounded-xl py-12 xl:py-14 p-10 border-[#A5EB14]">
              Virtual Account Collections
            </h1>
            <h1 className="bg-[#F2FCDC] border [writing-mode:sideways-rl] text-xl rounded-xl py-12 xl:py-14 p-10 border-[#A5EB14]">
              Bulk & Instant Payouts
            </h1>
            <h1 className="bg-[#F2FCDC] border [writing-mode:sideways-rl] text-xl rounded-xl py-12 xl:py-14 p-10 border-[#A5EB14]">
              Multi-Bank Smart Routing
            </h1>
          </div>
          <div className="bg-[#F2FCDC] border rounded-xl px-7 p-5 border-[#A5EB14]">
            <h1 className="text-2xl font-bold">
              Automated Reconciliation Engine
            </h1>
            <p>
              Match incoming and outgoing payments to internal records with
              AI-powered reconciliation — saving hours of manual work.
            </p>
            <div className="flex justify-center mt-5">
              <img
                className="rounded-xl h-70"
                src={AutomatedReconciliationEngine}
                alt="Automated Reconciliation Engine"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-2xl xl:text-4xl text-center font-bold">
          Secure and compliant
        </h2>
        <div className="flex justify-center my-10 gap-5 md:gap-10">
          <img src={RbiSvg} alt="RBI" className="h-[60px]" />
          <img src={PciSvg} alt="PCI" className="h-[60px]" />
          <img src={IsoSvg} alt="ISO" className="h-[60px]" />
          <img src={AicpaSvg} alt="AICPA SOC" className="h-[60px]" />
        </div>
      </section>

      <section className="bg-[#FCF9F0]">
        <div className="grid md:grid-cols-2 py-15 gap-y-7 px-5 lg:px-10 xl:px-15">
          <div className="px-3 md:px-5 xl:px-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-14 sm:leading-16 lg:leading-20 font-bold mb-2">
              {"< Developer-First "}
              <br />
              <span className="text-[#A5EB14]">API Platform</span>
              {" >"}
            </h1>
            <p className="text-lg">
              All Bridg.Money products are 100% API-first, modular, and
              developer-friendly
            </p>
            <div className="grid grid-cols-2 items-center my-5 md:gap-4 gap-3">
              {ApiIntegrationFeatures.map((data, idx) => (
                <div key={idx} className="flex gap-2 lg:gap-3 items-center">
                  <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
                    <img src={data?.icon} alt={data?.txt} className="h-[20px] w-[20px] object-contain" />
                  </div>
                  <div>
                    <p className="break-word">{data?.header}</p>
                    <p className="text-sm">{data?.txt}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#A5EB14] text-sm rounded-3xl py-2 px-5 flex gap-3 items-center">
                View Documentation <ArrowSvg />
              </button>
              <button className="border text-sm border-black rounded-3xl py-2 px-5 flex gap-3 items-center">
                Try Sandbox <ArrowSvg />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={DevFirstApiPlatformImg}
              className="w-100"
              alt="Developer-First API Platform"
            />
          </div>
        </div>
      </section>

      <section className="my-15 px-6">
        <div className="flex justify-center my-3">
          <img src={TestimonalSvg} alt="testimonal" className="h-[40px]" />
        </div>
        <h2 className="text-2xl text-center md:text-3xl font-extrabold mb-3">
          Still have questions?
        </h2>
        <p className="text-center mb-4">
          Can’t find the answer you’re looking for? Please contact us to our
          friendly team.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#A5EB14] text-sm rounded-3xl py-2 px-5 flex gap-3 items-center">
            Contact Us <ArrowSvg />
          </button>
        </div>
      </section>

      <section className="px-6 sm:px-20 my-10 md:my-15 flex justify-center">
        <div className="w-5xl rounded-2xl border border-[#A5EB14] py-15 bg-[#F9FFED]">
          <h1 className="text-center text-2xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-[#A5EB14]">Bridg</span> the Gap?
          </h1>
          <p className="text-center mb-4 px-5 md:px-20 lg:px-30">
            Join thousands of businesses using Bridg.Money to streamline their
            financial operations. Start accepting payments and managing payouts
            in minutes.
          </p>
          <div className="flex justify-center">
            <button className="border text-sm border-black rounded-3xl py-2 px-5 flex gap-3 items-center">
              Book Demo <ArrowSvg />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

const Products = ({ products }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2 justify-center">
      {products.map((data) => {
        return (
          <div
            key={data.id}
            className="rounded-xl break-words overflow-hidden transition-shadow duration-300 hover:shadow-[0px_21px_25px_0px_rgba(201,153,9,0.15)] p-6 border bg-white border-[#FDE59E]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#0A0C33] rounded-lg p-2">
                <img
                  src={data?.icon}
                  alt="icons"
                  className="h-[25px] w-[25px] object-contain"
                />
              </div>
              <div>
                <p className="rounded-full border break-all border-[#A5EB14] bg-[#A5EB1440] text-sm py-0.5 mb-1 px-4 w-max">
                  {data?.title}
                </p>
                <p className="text-lg font-[500] break-all">{data?.heading}</p>
              </div>
            </div>
            <div>
              <h6 className="break-word mb-3">{data?.text}</h6>
              <ul className="space-y-2">
                {data?.lists.map((list, idx) => (
                  <li
                    key={idx}
                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[11px] before:h-[11px] before:rounded-full before:bg-[#CDFF66] before:border before:border-[#74AA0233] before:shadow-[0px_0px_3px_0px_#A5EB14]  text-sm text-gray-700 my-2"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
