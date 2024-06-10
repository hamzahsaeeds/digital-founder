export default function Section1() {
  return (
    <div className="w-full h-screen main-background">
      <div className="flex flex-col justify-center items-center text-center h-full space-y-12">
        <div className="font-extrabold text-7xl leading-[80px]">
          Share your idea! <br />
          we will invest in your future
        </div>
        <div className="w-2/5">
          <span className="font-normal text-xl text-center">
            Have a groundbreaking idea but lack the funds to bring it to life?
            No worries! At Digital Founder, we invest in your vision, putting
            our money on the table to turn your digital idea into reality
          </span>
        </div>
        <div>
          <button className="flex items-center text-gray-800 bg-violet-50">
            Lets Partner
            <img src="right_arrow.svg" alt="right arrow" />
          </button>
        </div>
        <div className="cursor-pointer">
          <img src="down_arrow.svg" alt="down arrow" />
        </div>
      </div>
    </div>
  );
}
