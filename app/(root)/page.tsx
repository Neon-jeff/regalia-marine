import { IntroSection, Seminar, Student } from "@/components/layout/header";
import Header from "@/components/layout/header/header";





export default function Home() {
  return <div className=" font-[family-name:var(--font-geist-sans)] relative overflow-x-hidden  bg-gray-50 text-slate600 font-normal h-screen">
  
    <Header/>
    <IntroSection/>
    <Student/>
    <Seminar/>
  </div>;
}
