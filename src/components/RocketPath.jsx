export default function RocketPath() {
  return (
    <div className="relative flex justify-center items-end h-full">  {/* Set container styles */}
      <img
        src="mask_group.svg"
        alt="rocket smoke"
        className="absolute bottom-0 left-0 opacity-20"
      />
      <img
        src="rocket_taking_off.svg"
        alt="rocket takeoff"
        className="absolute bottom-36 left-28"
      />
      <img
        src="ellipse_12.svg"
        alt="ellipse 180"
        className="absolute left-[120px] xl:w-80vw z-10 object-cover opacity-20"
      />
      <img
        src="rocket_coming_down.svg"
        alt="rocket coming down"
        className="absolute bottom-64 right-36"
      />  {/* Position landing rocket */}
    </div>
  );
}
