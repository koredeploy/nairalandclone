import Slider from "../components/Slider";
import Rootlayout from "../layout/Rootlayout";
import "../styles/LandingPage.css";

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import HomepageSwiper from "../components/homepageSwiper";
import Section4a from "../components/Section4a";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Navbar from "../components/Navbar";
const LandingPage = () => {
  // const data2=   Object.entries(data.results)
  // console.log(data[0]);

  return (
    <Rootlayout>
      <div>
        <Navbar/>
        <Slider />
        <div style={{ backgroundColor: "#E0E0E0" }}>
          <Section1 />
          <Section2 />
          <Section3 />
          <HomepageSwiper />
          <Section4a/>
          <Section5/>
          <Section6/>
        </div>
      </div>
    </Rootlayout>
  );
};

export default LandingPage;
