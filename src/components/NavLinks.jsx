export default function NavLinks({ isColumn }) {
  return (
    <div
      className={`w-4/5 ${
        isColumn
          ? "flex flex-col space-y-2"
          : "flex justify-between items-center"
      } font-normal text-sm`}
    >
      <a
        href="#"
        className="bg-white text-[#52525d] text-xs xl:text-sm 2xl:text-2xl"
      >
        Home
      </a>
      <a
        href="#"
        className="bg-white text-[#52525d] text-xs xl:text-sm 2xl:text-2xl"
      >
        The philosophy
      </a>
      <a
        href="#"
        className="bg-white text-[#52525d] text-xs xl:text-sm 2xl:text-2xl"
      >
        Services
      </a>
      <a
        href="#"
        className="bg-white text-[#52525d] text-xs xl:text-sm 2xl:text-2xl"
      >
        How it works
      </a>
      <a
        href="#"
        className="bg-white text-[#52525d] text-xs xl:text-sm 2xl:text-2xl"
      >
        Contact us
      </a>
    </div>
  );
}
