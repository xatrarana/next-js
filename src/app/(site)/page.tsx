import AboutSection from "@/components/sites/AboutWrapper";
import HomePage from "@/components/sites/HomePage";
import ManagementTeam from "@/components/sites/ManagementTeam";
import OrganizationProfile from "@/components/sites/OrganizationProfile";
import ServicesWrapper from "@/components/sites/ServicesWrapper";

export default function Home() {
  return (
   <>
    <HomePage/>
    <AboutSection/>
    <ServicesWrapper/>
    <OrganizationProfile/>
    <ManagementTeam/>
   </>
  );
}
