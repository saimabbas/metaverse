import React, { useEffect } from "react";
import { FaDiscord, FaTwitterSquare } from "react-icons/fa";
import { MdArrowUpward, MdMenu, MdClose } from "react-icons/md";
import HeroBanner from "./assets/hero-banner.jpeg";
import Logo from "./assets/logo.png";
import TokenImg1 from "./assets/icons/2.png";
import TokenImg2 from "./assets/icons/6.png";
import TokenImg3 from "./assets/icons/lock.png";
import TokenImg4 from "./assets/icons/metaverse.png";
import UCimg1 from "./assets/icons/case.png";
import UCimg2 from "./assets/icons/revrese.png";
import UCimg3 from "./assets/icons/vr.png";
import UCimg4 from "./assets/icons/gaming.png";
import T1 from "./assets/team/1.jpeg";
import T2 from "./assets/team/2.jpeg";
import T3 from "./assets/team/3.jpeg";
import T4 from "./assets/team/4.jpeg";

import { Power4, Linear } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const data = [
  { name: "Group A", value: 7 },
  { name: "Group B", value: 3 },
  { name: "Group C", value: 20 },
  { name: "Group D", value: 5 },
  { name: "Group D", value: 30 },
  { name: "Group D", value: 35 },
];

const COLORS = [
  "#d80081",
  "#8395a7",
  "#d80081",
  "#8395a7",
  "#d80081",
  "#8395a7",
];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="graph-text"
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /* Scroll-to-Top button visibility control */
    gsap.fromTo(
      ".moveToTop",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#section1",
          toggleActions: "play pause resume none",
          start: "bottom 0%",
          scrub: true,
        },
      }
    );
  }, []);
  /* Desktop Anchors */
  const moveToHome = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#sectionHome",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
  };
  /* Mobile Anchors */
  const moveTo1Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo2Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo3Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo4Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo5Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  /* Move To Top Button */
  const handleToTop = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
  };
  /* Mobile Header Visibility */
  const showMobHeader = () => {
    $(".header-mob").slideDown(500);
    $(".close").css({
      display: "flex",
    });
    $(".burger").css({
      display: "none",
    });
  };
  const hideMobHeader = () => {
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  return (
    <div className="space">
      <img src={HeroBanner} alt="" className="space-bg" />
      {/* MoveToTop Button */}
      <span className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </span>

      {/* Header */}
      <div className="header">
        <div className="box">
          <div className="header-content">
            <img onClick={moveTo1} src={Logo} alt="" />
            <div className="header-pc">
              <a onClick={moveToHome} className="mt mtHome">
                Home
              </a>
              <a onClick={moveTo1} className="mt mt2">
                About
              </a>
              <a onClick={moveTo2} className="mt mt3">
                Tokenomics
              </a>
              <a onClick={moveTo3} className="mt mt4">
                Use Cases
              </a>
              <a onClick={moveTo4} className="mt mt5">
                Roadmap
              </a>
              <a onClick={moveTo5} className="mt mt5">
                Team
              </a>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  NFT Market
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="https://cryptosnowmen.com/">
                    CryptoSnowmen
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Whitepaper
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="https://exoticmetaverse.io/Exotic-Metaverse-Lite-Paper.pdf">
                    Litepaper
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <MdMenu className="burger" onClick={showMobHeader} />
            <MdClose className="close" onClick={hideMobHeader} />
            <div className="header-mob">
              <main>
                <a onClick={moveToHome} className="mt mtHome">
                  Home
                </a>
                <a onClick={moveTo1Mob} className="mt mt2">
                  About
                </a>
                <a onClick={moveTo2Mob} className="mt mt3">
                  Tokenomics
                </a>
                <a onClick={moveTo3Mob} className="mt mt4">
                  Use Cases
                </a>
                <a onClick={moveTo4Mob} className="mt mt5">
                  Roadmap
                </a>
                <a onClick={moveTo5Mob} className="mt mt5">
                  Team
                </a>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    NFT Market
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="https://cryptosnowmen.com/">
                      CryptoSnowmen
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Whitepaper
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="https://exoticmetaverse.io/Exotic-Metaverse-Lite-Paper.pdf">
                      Litepaper
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-banner">
        {/* <div className="hero-banner-content">
          <div className="box">
            <h1>
              <span>EXOTIC</span> METAVERSE
            </h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias expedita quis eius blanditiis officia rem, consectetur
              delectus quasi amet, odit quam est velit libero, magni animi
              soluta nisi veritatis voluptatum?
            </h2>
          </div>
        </div> */}
      </div>

      {/* About Section */}
      <div className="about section " id="section1">
        <div className="box">
          <div className="about-content">
            <h2 className="mainHeading">About</h2>
            <main>
              <h6>
                The New Decentralized Game Publisher and Metaverse Gaming Token.
                Launched on Ethereum Blockchain our ERC20 Token has a Max supply
                of 10M. Will be used to play upcoming games released on our
                distribution platform, and inside the metaverse were developing.
                Exotic Token will also be used to Verify your membership with
                our Tiger Clan which gets you access to new cool features and
                perks such as airdrops of NFTs and more.
              </h6>
              <h6>
                Exotic Token will also be used to Verify your membership with
                our Tiger Clan which gets you access to new cool features and
                perks such as airdrops of NFTs and more.
              </h6>
              <h6>
                Features Coming soon our very own NFT marketplace,
                <br />
                Play to Earn gaming, NFT airdrops, and Swap Dex.
                <br />
                Players can play games with their NFTs as well Earn rewards and
                token prizes.
              </h6>
            </main>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div className="token section" id="section2">
        <div className="box">
          <h2 className="mainHeading">Tokenomics</h2>
          <div className="token-content">
            <div className="token-grid">
              <div className="token-grid-cell">
                <span>
                  <img src={TokenImg1} alt="" />
                </span>
                <main>
                  <h6>2% Liquidity</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias provident
                  </p>
                </main>
              </div>
              <div className="token-grid-cell">
                <span>
                  <img src={TokenImg1} alt="" />
                </span>
                <main>
                  <h6>2% Back to Holders</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias provident
                  </p>
                </main>
              </div>
              <div className="token-grid-cell">
                <span>
                  <img src={TokenImg2} alt="" />
                </span>
                <main>
                  <h6>6% Marketing/Dev</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias provident
                  </p>
                </main>
              </div>
              <div className="token-grid-cell">
                <span>
                  <img src={TokenImg3} alt="" />
                </span>
                <main>
                  <h6>Locked</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias provident
                  </p>
                </main>
              </div>
              <div className="token-grid-cell">
                <span>
                  <img src={TokenImg4} alt="" />
                </span>
                <main>
                  <h6>Liquidity</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias provident
                  </p>
                </main>
              </div>
            </div>
            <div className="token-graph-grid">
              <div className="token-graph-grid-cell">
                <h6>
                  <b> 7%</b> locked for 6 months for Marketing the Metaverse to
                  bring millions of users
                </h6>
                <h6>
                  <b>3%</b> locked for 3 months for Airdrop/giveaways
                </h6>
                <h6>
                  <b>20%</b> locked 1 year for building the Exotic swap
                  platform, Version 1 of Metaverse and developing the meta
                  world.
                </h6>
                <h6>
                  <b>5%</b> locked for 6 months allocated for dev team to make
                  sure the metaverse is properly functioning and maintenance,
                  bugs, updates, DLC content and NFT integrations.
                </h6>
                <h6>
                  <b>30%</b> liquidity pancakeswap
                </h6>
                <h6>
                  <b>35%</b> to public and locked for cex listings
                </h6>
              </div>
              <div className="token-graph-grid-cell">
                <div className="token-graph-box">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width="100%" height="100%">
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius="85%"
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="use section" id="section3">
        <div className="box">
          <h2 className="mainHeading">Use Cases</h2>
          <div className="use-content">
            <div className="use-grid">
              <div className="use-grid-cell">
                <span>
                  <img src={UCimg1} alt="" />
                </span>
                <h6>NFT Marketplace</h6>
              </div>
              <div className="use-grid-cell">
                <span>
                  <img src={UCimg2} alt="" />
                </span>
                <h6>Exotic Swap</h6>
              </div>
              <div className="use-grid-cell">
                <span>
                  <img src={UCimg3} alt="" />
                </span>
                <h6>Planet Exotic</h6>
              </div>
              <div className="use-grid-cell">
                <span>
                  <img src={UCimg4} alt="" />
                </span>
                <h6>Gaming</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap section" id="section4">
        <div className="box">
          <h2 className="mainHeading">Roadmap</h2>
          <div className="roadmap-content">
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Q3 2021</h4>
                <p>➥ Market Research On Metaverse</p>
                <p>➥ Metaverse Strategy and Use case</p>
                <p>➥ Create Utility for the Token</p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Q4 2021</h4>
                <p>➥ Create smart contract</p>
                <p>➥ Launch website</p>
                <p>➥ Stealth launch $Exotic</p>
                <p>➥ Add pancakeswap liquidity</p>
                <p>➥ Lock tokens on unicrypt</p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Q1 2022</h4>
                <p>➥ Cg listing </p>
                <p>➥ Cmc listing </p>
                <p>➥ Smart contract audit </p>
                <p>➥ Marketing push </p>
                <p>➥ Build project awareness </p>
                <p>➥ Early coin launchpads </p>
                <p>➥ Deploy on eth and bridge </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Q2 2022</h4>
                <p>➥ Influencers/ collaborations</p>
                <p>➥ Metaverse partnerships</p>
                <p>➥ Airdrop event</p>
                <p>➥ Release Metaverse Concepts/ designs</p>
                <p>➥ Metaverse Demo Video</p>
                <p>➥ Launch NFT (staking and early pass)</p>
                <p>➥ Raise liquidity & marketing from NFT</p>
                <p>➥ Bridge to polygon</p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Q3 2022</h4>
                <p>➥ Launch ExoticSwap Platform</p>
                <p>➥ Launch NFT Marketplace</p>
                <p>➥ Launch Planet Exotic ( metaverse land NFTs)</p>
                <p>➥ E3 Event showcase Gaming Metaverse</p>
                <p>➥ Bridge to avax</p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4>Q4 2022</h4>
                <p>➥ Update Roadmap</p>
                <p>➥ Update Website full interactive</p>
                <p>➥ Massive Marketing Push</p>
                <p>➥ Partnership with Music Artists</p>
                <p>➥ Partnership with Gamers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about2 section">
        <div className="box">
          <div className="about-content"></div>
        </div>
      </div>

      {/* Team */}
      <div className="team section" id="section5">
        <div className="box">
          <div className="mainHeading">Team</div>
          <div className="team-content">
            <div className="team-card">
              <img src={T2} alt="" />
              <h2>Nefu</h2>
              <h3>Lead Dev / Digital Marketing</h3>
            </div>
            <div className="team-card">
              <img src={T1} alt="" />
              <h2>Kurt</h2>
              <h3>Full Stack Dev</h3>
            </div>
            <div className="team-card">
              <img src={T3} alt="" />
              <h2>Syed Bilal</h2>
              <h3>GameDev / VR / Openworld</h3>
            </div>
            <div className="team-card">
              <img src={T4} alt="" />
              <h2>Smith</h2>
              <h3>Communications / Partnerships</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="box">
          <div className="footer-content"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
