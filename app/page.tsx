import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Projects from "@/app/components/projects";
import TechnicalSkills from "@/app/components/technicalSkills";
import Intro from "@/app/components/introduction";
import Contact from "@/app/components/contact";
import Personal from "@/app/components/personal";

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <Projects />
            <TechnicalSkills />
            <Personal />
            <Contact />
            <Footer />
        </>
    );
}
