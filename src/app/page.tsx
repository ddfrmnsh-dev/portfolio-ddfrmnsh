import AboutMeSection from "@/components/home/AboutMeSection";
import IntroduceSection from "@/components/home/IntroduceSection";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <IntroduceSection />
      <AboutMeSection />
    </>
  );
}
