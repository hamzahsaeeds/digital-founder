export default function Section1() {
  return (
    <div className="w-full h-screen main-background pt-36">
      <div className="flex flex-col justify-center items-center text-center h-full space-y-12">
        <span className="font-extrabold text-7xl">
          Share your idea! <br />
          we`ll invest in your future
        </span>
        <div className="w-1/2">
          <span className="font-normal text-xl text-center">
            Have a groundbreaking idea but lack the funds to bring it to life?
            No worries! At Digital Founder, we invest in your vision, putting
            our money on the table to turn your digital idea into reality
          </span>
        </div>
        <div>
          <button className="flex items-center font-normal text-base text-gray-800 bg-violet-50">
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
