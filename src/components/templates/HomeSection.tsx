import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SectionBuild from "../organisms/SectionBuild";
import SectionCard from "../organisms/SectionCard";
import SectionClient from "../organisms/SectionClients";
import SectionConnect from "../organisms/SectionConnect";
import SectionDiscover from "../organisms/SectionDiscover";
import SectionExploreOur from "../organisms/SectionExploreOur";
import SectionInnovate from "../organisms/SectionInnovate";
import SectionYourTrusted from "../organisms/SectionYourTrusted";

export default function HomeSection(): React.ReactNode {
  return (
    <div className="">
      <Header />
      <SectionInnovate />
      <SectionCard />
      <SectionDiscover />
      <SectionYourTrusted />
      <SectionClient />
      <SectionExploreOur />
      <SectionConnect />
      <SectionBuild />
      <Footer />
    </div>
  );
}
