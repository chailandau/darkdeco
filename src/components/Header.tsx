import Image from "next/image";

const Header = () => {
  return (
    <header className="container">
      <div>
        <div className="left">
          <a href="/">🧵 Embroiderize</a>
        </div>
        <div className="right">
          <a href="https://octo.ai/?utm_source=embroiderize" target="_blank">
            <span>powered by</span>
            <Image
              src="/icons/octo.svg"
              alt="OctoAI Icon"
              width="22"
              height="24"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;