export default function RocketPath() {
  return (
    <div className="relative flex justify-center items-end h-full">
      <img
        src="mask_group.svg"
        alt="rocket smoke"
        className="absolute bottom-0 left-0 w-[200px] xl:w-[300px] xl1:w-[400px] 2xl:w-[500px] opacity-20"
      />
      <img
        src="rocket_taking_off.svg"
        alt="rocket takeoff"
        className="fixed rotate-12 xl:rotate-6 2xl:rotate-3 w-[90px] xl:w-[120px] 2xl:w-[200px] -translate-x-[420px] xl:-translate-x-[500px] 2xl:-translate-x-[760px] -translate-y-1/2 top-1/2 lg:top-[560px] xl:top-[580px] 2xl:top-[800px]"
      />
      <img
        src="ellipse_12.svg"
        alt="ellipse 180"
        className="absolute left-auto lg:h-[550px] xl:h-[620px] 2xl:h-[900px] z-10 object-cover opacity-20"
      />
      <img
        src="rocket_coming_down.svg"
        alt="rocket coming down"
        className="fixed -rotate-12 xl:-rotate-6 2xl:rotate-0 w-[120px] xl:w-[150px] 2xl:w-[250px] translate-x-[350px] xl:translate-x-[450px] 2xl:translate-x-[700px] -translate-y-1/2 top-1/2 lg:top-[470px] xl:top-[490px] 2xl:top-[690px]"
      />
    </div>
  );
}
