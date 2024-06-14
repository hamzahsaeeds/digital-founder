import Header from "./Header";
import Section1 from "./Section1";

export default function MainPage() {
  return (
    <div className="w-full h-screen flex flex-col font-sans">
      <Header />
      <Section1 />
    </div>
  );
}
