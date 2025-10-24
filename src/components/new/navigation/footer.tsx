import { MobileFooter } from "./mobile-footer";
import { useIsMobile } from "@/hooks/use-mobile";
import purpleLight from "@/assets/hastra-purple-light.png";
import { Link } from "react-router-dom";
import twitter from "@/assets/x.png";
import discord from "@/assets/discord.png";

const footerText = "font-season-sans md:text-[17px] md:leading-[126%]";

export const Footer = () => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <MobileFooter />
  ) : (
    <footer className="bg-black dark:bg-black md:px-[30px] lg:px-[60px] pt-[60px] pb-[35px] font-season-sans">
      <div className="lg:container mx-auto">
        <div className="grid grid-cols-2 gap-20 h-fit">
          <div className="grid grid-cols-[0.3fr_1fr] items-start">
            <img src={purpleLight} className="md:w-[50px] xl:w-[67px]" />
            <div className="flex flex-col gap-4 max-w-[400px]">
              <p className="font-season-sans text-brand-light-purple text-[25px]">
                Stay Updated
              </p>
              <div className="flex flex-col text-[10.5px] text-frost-white">
                <p>
                  By submitting this form, you consent to receiving email
                  communications from Provenance Blockchain and agree to our{" "}
                  <Link to="/terms" className="underline">
                    terms of use
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="underline">
                    privacy policy
                  </Link>
                </p>
              </div>
              <iframe
                className="bg-provenance-black"
                src="https://subscribe-forms.beehiiv.com/5579f454-0820-4ca3-af6c-d9616c25a9e6"
                // class="beehiiv-embed"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: "500px",
                  height: "46px",
                  margin: "0",
                  borderRadius: "0px 0px 0px 0px",
                  backgroundColor: "#000000",
                  boxShadow: "0 0 #0000",
                  maxWidth: "100%",
                }}
              ></iframe>
            </div>
          </div>
          <div aria-label="footer navigation" className="grid grid-cols-3">
            <ul className="space-y-6">
              <p className={`text-brand-light-purple ${footerText}`}>Company</p>
              <li className={`text-frost-white ml-4 ${footerText}`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`text-frost-white ml-4 ${footerText}`}>
                <Link to="/earn">Earn</Link>
              </li>
              <li className={`text-frost-white ml-4 ${footerText}`}>
                <Link to="/learn">Learn</Link>
              </li>
            </ul>
            <ul className="space-y-6">
              <p className={`text-brand-light-purple ${footerText}`}>
                Products
              </p>
              <li className={`text-frost-white ml-4 ${footerText}`}>
                <Link to="/wylds">wYLDS</Link>
              </li>
              <li className={`text-frost-white ml-4 ${footerText}`}>
                <Link to="/prime">PRIME</Link>
              </li>
            </ul>
            <ul className="space-y-6">
              <p className={`text-brand-light-purple ${footerText}`}>Legal</p>
              <li className={`text-brand-white ml-4 ${footerText}`}>
                <Link to="/terms">Terms</Link>
              </li>
              <li className={`text-brand-white ml-4 ${footerText}`}>
                <Link to="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          aria-label="social links"
          className="flex gap-x-[7.25px] justify-end pt-[54px]"
        >
          <Link to="#" rel="noopener noreferrer" target="_blank">
            <img src={discord} className="size-[36px]" />
          </Link>
          <Link
            to="https://x.com/HastraFi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} className="size-[36px]" />
          </Link>
        </div>
        <div className="flex mt-8 justify-between text-frost-white text-[17px] font-season-sans font-normal">
          <p className="tracking-tight">Signum Ltd.</p>
          <div className="flex justify-between gap-12">
            {/* <a href="#" className="termly-display-preferences">
              Cookies
            </a> */}
            <Link to="/brand-guide">Press & Media</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
