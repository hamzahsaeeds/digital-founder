export default function Section1() {
  return (
    <div className="w-full h-screen main-background pt-36">
      <div className="flex flex-col justify-center items-center text-center h-full space-y-12">
        <span className="font-extrabold text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl z-20">
          Share your idea! <br />
          we`ll invest in your future
        </span>
        <div className="w-1/2 z-20">
          <span className="font-normal text-center text-xs md:text-base xl:text-lg 2xl:text-2xl">
            Have a groundbreaking idea but lack the funds to bring it to life?
            No worries! At Digital Founder, we invest in your vision, putting
            our money on the table to turn your digital idea into reality
          </span>
        </div>
        <div className="z-20">
          <button className="flex justify-center items-center font-normal text-gray-800 bg-violet-50 text-xs md:text-base xl:text-lg 2xl:text-2xl 2xl:w-[340px]">
            Lets Partner
            <img src="right_arrow.svg" alt="right arrow" className="pl-1 2xl:size-1/6" />
          </button>
        </div>
        <div className="cursor-pointer size-5 md:size-7 z-20">
          <img src="down_arrow.svg" alt="down arrow" />
        </div>
      </div>
    </div>
  );
}
