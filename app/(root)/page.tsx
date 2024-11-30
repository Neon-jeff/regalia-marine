import { IntroSection, Seminar, Student } from "@/components/layout/header";
import Header from "@/components/layout/header/header";
import { Nav } from "@/components/navigation";


export default function Home() {
  return <div className=" font-[family-name:var(--font-geist-sans)] relative overflow-x-hidden  bg-gray-50 text-black font-normal h-screen">
    <Nav/>
    <Header/>
    <IntroSection/>
    <Student/>
    <Seminar/>
  </div>;
}
