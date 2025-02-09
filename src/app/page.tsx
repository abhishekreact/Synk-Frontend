import Image from "next/image";

import { NAV_LINK_CONFIG } from "./utils/constant";

export default function IndexPage() {
  return (
    <div className=" w-full min-h-screen  ">
      <nav className="w-full h-[10%] py-[1.3vmax] px-[4vmax]   flex items-center justify-between ">
        <div className="logo-wrapper  flex items-center gap-[0.6vmax]">
          <img src="/synk-logo.png" alt="synk-logo" className="w-[2vmax]" />

          <h3 className="text-[1.6vmax]">Synk</h3>
        </div>

        <ul className="nav-links flex justify-between items-center gap-[2.4vmax]">
          {NAV_LINK_CONFIG.map((item) => (
            <li className="text-[--light-grey] text-[1.1vmax]" key={item?.id}>
              {item.name}
            </li>
          ))}
        </ul>

        <div className="beta-access-btn bg-white text-[#030303] rounded-full text-[1.2vmax] px-[1.2vmax] py-[0.5vmax]">
          Join beta
        </div>
      </nav>

      <section className="py-[2vmax] pl-[4vmax]">
        <div className="hero-container overflow-hidden   flex justify-between items-center">
          <div className="w-1/2  ">
            <small className="bg-[#414141] mb-[0.6vmax] inline-block py-[0.8vh] px-[1.6vh] rounded-lg text-white text-[1vmax]">
              We've raised $3M series A
            </small>
            <div className="hero-text-wrapper leading-none text-[4.8vmax] ">
              <h2>a home for the</h2>
              <h2>musical minds</h2>
            </div>

            <p className="hero-content w-1/2 py-[1.6vmax] leading-snug text-[1.2vmax] text-[#aaaaaa]">
              A place for musicians to connect, collaborate, discover gigs,
              share their work, and find opportunities.
            </p>

            <div className="beta-access-btn w-fit bg-white text-[#030303] rounded-full text-[1.2vmax] px-[1.2vmax] py-[0.5vmax]">
              Join beta
            </div>
          </div>
          <div className="w-1/2">
            <img src="/hero-ui.png" className="w-full " alt="hero-ui" />
          </div>
        </div>
      </section>

      <section className="py-[4vmax]  px-[4max]">
        <div className="w-2/3 py-[8vw]  mx-auto ">
          <div className="feature-content">
            <h3 className="text-[3vmax] pb-[1.6vmax] leading-none">
              For anyone with <br /> music to make
            </h3>
            <p className="w-1/2  text-[1.2vmax] leading-snug text-[#aaaaaa]">
              A place for musicians to connect, collaborate, discover gigs,
              share their work, and find opportunities.
            </p>
          </div>

          <div className="w-full bg-[#1d1d1d] mt-[4vmax] rounded-xl">
            <div className="px-[2vmax] py-[1.2vmax] ">
              <h4 className="pb-[0.4vmax] text-[1.6vmax]">Expertise</h4>
              <p className="w-1/2 text-[1.2vmax] leading-snug  text-[#aaaaaa]">
                Get unlimited design and development with a <br /> simple
                monthly subscription.
              </p>
            </div>
            <div className="feature-img-wrapper w-full pt-[2vmax] flex justify-end ">
              <div className="w-[90%]">
                <img src="./feature-ui-1x01.png" className="w-full" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex gap-[1vmax] mt-[1vmax] ">
            <div className=" bg-[#1d1d1d] px-[2vmax] pt-[3vmax] w-1/2  rounded-xl">
              <p className="text-[1.2vmax] leading-snug  text-[#aaaaaa]">
                Find information across your entire library. Ask questions, get
                answers, find files instantly.
              </p>

              <div className="feature-img-wrapper py-[6vmax] flex justify-center">
                <div className="w-2/3">
                  <img src="./feature-ui-1x02.png" className="w-full" alt="" />
                </div>
              </div>
            </div>
            <div className=" bg-[#1d1d1d] px-[2vmax] pt-[3vmax] w-1/2  rounded-xl"></div>
          </div>
        </div>
      </section>

      <section className="py-[4vmax]  px-[4vmax]">
        <div className="news-wrapper ">
          <div className="tagline text-[2.4vmax] pb-[2vmax]">News</div>

          <div className="news-wrapper-inner  flex gap-[1vmax] ">
            <div className="news w-1/3  rounded-xl">
              <div className="news-img-wrapper w-full  rounded-xl overflow-hidden  ">
                <img src="./news-1x01.png" className="w-full" alt="" />
              </div>

              <div className="news-content py-[0.6vmax] leading-snug">
                <h3 className="text-[1.2vmax]">Synk launches new features</h3>
                <small className="text-[#979797] text-[0.9vmax]">
                  News / December 19, 2024
                </small>
              </div>
            </div>

            <div className="news w-1/3  rounded-xl">
              <div className="news-img-wrapper w-full  rounded-xl overflow-hidden  ">
                <img src="./news-1x02.png" className="w-full" alt="" />
              </div>

              <div className="news-content py-[0.6vmax] leading-snug">
                <h3 className="text-[1.2vmax]">Synk launches new features</h3>
                <small className="text-[#979797] text-[0.9vmax]">
                  News / December 19, 2024
                </small>
              </div>
            </div>

            <div className="news w-1/3  rounded-xl">
              <div className="news-img-wrapper w-full  rounded-xl overflow-hidden  ">
                <img src="./news-1x03.png" className="w-full" alt="" />
              </div>

              <div className="news-content py-[0.6vmax] leading-snug">
                <h3 className="text-[1.2vmax]">Synk launches new features</h3>
                <small className="text-[#979797] text-[0.9vmax]">
                  News / December 19, 2024
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[4vmax]  px-[4vmax]">
        <footer>
          <div className="text-center py-[8vmax]">
            <h2 className="text-[3vmax] leading-snug">
              Let your music <br />
              do the magic
            </h2>

            <div className="py-[1.6vmax]">


            <button className="beta-access-btn w-fit  bg-white text-[#030303] rounded-full text-[1.2vmax] px-[1.2vmax] py-[0.5vmax]">
              Join beta
            </button>
            </div>
          </div>

          <ul className="flex pb-[2vmax] justify-center gap-[4vmax] text-[0.9vmax] text-[#969696]">

            <li>Home</li>
            <li>About</li>
            <li>Privacy Policy</li>



          </ul>

          <div className="text-[#5c5c5c] pb-[4vmax] text-center text-[0.9vmax]">
          More ways to shop: <span className="underline">Find an Apple Store</span>  or <span className="underline">other retailer</span>  near you. Or call 000800 040 1966.
          </div>
        </footer>
      </section>
    </div>
  );
}
