import { Link } from "react-router-dom";
import twitter from "@/assets/x.png";
import discord from "@/assets/discord.png";

export const MobileFooter = () => (
  <div className="grid grid-cols-1 pl-[23px] pt-[30px] pr-[17.5px] pb-2 bg-black text-brand-white font-season-sans">
    <div aria-label="social media" className="flex gap-x-[7.25px] pb-6">
      <Link to="#" rel="noopener noreferrer" target="_blank">
        <img src={discord} className="size-[37px]" />
      </Link>
      <Link
        to="https://x.com/HastraFi"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={twitter} className="size-[37px]" />
      </Link>
    </div>
    <div
      aria-label="links"
      className="flex flex-col space-y-[21px] text-lg font-season-sans leading-[116%] pb-4 font-[470]"
    >
      <Link to="/privacy">Privacy</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/brand-guide">Press & Media Kit</Link>
      {/* <a href="#" className="termly-display-preferences">
        Cookie Preferences
      </a> */}
    </div>
    <p className="text-end text-base leading-[140%]">
      @ Copyright© {new Date().getFullYear()}
      Signum Ltd.
    </p>
  </div>
);
