import { AiOutlineMoon } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import PortfolioStore from "./useStore";

const ThemeToggle = () => {
  const theme = PortfolioStore((state) => state.theme);
  const toggle = PortfolioStore((state) => state.toggle);
  const setRipplePos = PortfolioStore((state) => state.setRipplePos);


  const playToggleSound = (e) => {
    const audio = new Audio('/src/assets/click_sound.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Autoplay blocked'));
    toggle();
  };

  return (
    <div>
      <span onClick={playToggleSound} className={` ${theme ? "text-black" : "text-white"} flex items-center gap-2 cursor-pointer`}>
        {theme ? <IoSunnyOutline /> : <AiOutlineMoon />}
      </span>
    </div>
  );
};

export default ThemeToggle;

