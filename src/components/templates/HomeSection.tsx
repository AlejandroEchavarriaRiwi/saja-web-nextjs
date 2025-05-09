import Header from "../organisms/Header";
import SectionCard from "../organisms/SectionCard";
import SectionDiscover from "../organisms/SectionDiscover";
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
    </div>
  );
}
