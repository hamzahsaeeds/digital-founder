import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <div className="bg-white text-center flex justify-between items-center p-4 md:px-8 xl:px-24">
      <img src="Logo.svg" alt="logo" />
      <div className="flex md:w-2/3 xl:w-1/2 justify-between">
        <NavLinks />
        <button className="bg-[#303036] flex justify-center items-center h-1/2">
          <img src="green_ellipse.svg" alt="online" />
          <span className="pl-2 font-normal text-sm">Lets Speak</span>
        </button>
      </div>
    </div>
  );
}
