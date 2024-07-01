import React, { useEffect } from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Router
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
// Components
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import BackToTop from "../components/BackToTop";
import ProjectPageTemplate from "../components/ProjectPageTemplate2";
import NavBar from "../components/NavBar";
import chartsData from "../data/other-charts.json"; // Adjust the path according to your directory structure
import SpecialChartSearch from "./SpecialChartSearch"; // Import the AllCharts component
import styled from "styled-components";

// Config
import { philosophy } from "../config";
// Utils
import { updateTitle } from "../utils";


// #region component
const SpecialPacks = () => {
  const { data: userData } = useGetUsersQuery();
  const [charts, setCharts] = React.useState(chartsData); // Use imported JSON data

  const location = useLocation();

  useEffect(() => {
    updateTitle(`${userData.name} | SpecialPacks`);
  }, [userData]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const scrollTo = query.get("scrollTo");

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  const getFilteredSongs = (packName) => {
    return charts.filter(chart => chart.pack === packName);
  };
  
// #region styled-components
const StyledPageComponent = styled.div`
.da-bottom {
  margin-bottom: 11%;
}
`

  return (
    <>
      <NavBar />
      <main>
          <SpecialChartSearch /> {/* Include the AllCharts component here */}
          <StyledPageComponent>
          <ProjectPageTemplate
          title="R.I.G.H.T.S 2"
          bannerImage="R.I.G.H.T.S 2Banner.png"
          description=" R.I.G.H.T.S 2 pack."
          bio="Organized by Crash Cringle and TheNick (mimiguity)"
          moreInfo="Pollock Commons, 215 Bigler Rd, University Park PA 16802"
          date="January 27th 2024"
          songs={getFilteredSongs("R.I.G.H.T.S 2")}
          downloadLink="https://drive.google.com/file/d/1oaesA4O9_0mLLtn1HP_bb8YzDcSrY7e5/view?usp=drive_link"
        />
        <ProjectPageTemplate
          title="R.I.G.H.T.S"
          bannerImage="R.I.G.H.T.SBanner.png"
          description="Rhythm In Gaming"
          bio="Organized by Crash Cringle and TheNick (mimiguity)"
          moreInfo="Pollock Commons, 215 Bigler Rd, University Park PA 16802"
          date="January 14th 2023"
          songs={getFilteredSongs("R.I.G.H.T.S")}
          downloadLink="https://drive.google.com/file/d/1q7MVjzLmMbRKF_0hzWoo1s3z6XucrkOi/view?usp=sharing"
        />
        <ProjectPageTemplate
          title="Squeaky Beds and Leaky Faucets (Nightly Beta)"
          bannerImage="Squeaky Beds and Leaky Faucets (Nightly Beta)Banner.png"
          description="Explore several charmed songs in a mysterious pack replete with over 80 creative stepcharts. Over an approximately two-hundred hour playing duration, you will face unique challenges, ponderous ideas, and feebly amusing in-jokes."
          bio="[About Squeaky Beds and Leaky Faucets](https://www.squeakybedsandleakyfaucets.com/about)"
          moreInfo="[Squeaky Beds Lore](https://www.squeakybedsandleakyfaucets.com/lore)"
          date="TBD"
          status="Ended"
          songs={getFilteredSongs("Squeaky Beds and Leaky Faucets (Nightly Beta)")}
          downloadLink="https://www.dropbox.com/s/vukxtgbcydfan5h/Squeaky%20Beds%20and%20Leaky%20Faucets%20(14.02.2023%20Beta).zip?dl=0"
          spoilerFile="Joke Explainer 6000.txt"
        />
        <ProjectPageTemplate
          title="UPSMH Online"
          bannerImage="UPSMH OnlineBanner.png"
          description="A tournament taking place over the pandemic from the hosts of U.P.S.  and S.M.H., the first ever online iteration of the respective tournament where participants compete completely remotely and in real time.."
          bio="Organised by teejusb & bkirz"
          moreInfo="Additional information about the UPSMH Online pack."
          date="July 31st-Aug 1st 2021"
          status="Ended"
          songs={getFilteredSongs("UPSMH Online")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EU9d0bJaWzVPsJjuPcGtWaYBCDYJ4xf8LNgVZ-EL_F01vA?e=xCIKae"
        />
        <ProjectPageTemplate
          title="UPS 5"
          bannerImage="UPS 5Banner.png"
          description="University Park StepCharts 5 - Organised by teejusb"
          bio="The fifth and final iterations of the U.P.S series."
          moreInfo="Pollock Commons, 215 Bigler Rd, University Park PA 16802"
          date="2020"
          status="Ended"
          songs={getFilteredSongs("UPS 5")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EdaiWvHviflBttJjUl_RdXcBzWiVgYSPjYstzIgLENRS8Q?e=YBBSNr"
        />
        <ProjectPageTemplate
          title="UPS 4"
          bannerImage="UPS 4Banner.png"
          description="University Park StepCharts 4"
          bio="Organised by teejusb"
          moreInfo="Pollock Commons, 215 Bigler Rd, University Park PA 16802"
          date="2019"
          status="Ended"
          songs={getFilteredSongs("UPS 4")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EXiQK1WeRaBOggQLf5UhJ5EB1b_6LFqHzKLyyLm8ZsIQHg?e=RlldPO"
        />
        <ProjectPageTemplate
          title="UPS 3"
          bannerImage="UPS 3Banner.png"
          description=" UPS 3 pack."
          bio="Organised by teejusb"
          moreInfo="Pollock Commons, 215 Bigler Rd, University Park PA 16802"
          date="2018"
          status="Ended"
          songs={getFilteredSongs("UPS 3")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EWqZwQd5VCpKpkFtH9oFe-MBO3J3Lh1RcXPkdh3mxlK6Nw?e=rOPQ5Q"
        />
        <ProjectPageTemplate
          title="UPS 2"
          bannerImage="UPS 2Banner.png"
          description=" UPS 2 pack."
          bio="Organised by teejusb"
          moreInfo="Pollock Commons, 215 Bigler Rd, University Park PA 16802"
          date="2017"
          status="Ended"
          songs={getFilteredSongs("UPS 2")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EejzmNt6ggZNh6lmbZetTAAB30eBkn6ioE6cgaRz-4MEZQ?e=dQza7s"
        />
        <ProjectPageTemplate
          title="UPS"
          bannerImage="UPSBanner.png"
          description="The first iteration of the U.P.S series, spiritual successor to the D.O.W.N.S series."
          bio="Organised by teejusb"
          moreInfo="Findlay Commons, University Park PA 16802"
          date="2016"
          status="Ended"
          songs={getFilteredSongs("UPS")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/Ee6k7Yl79TpMo4MWcXBK-S8BXAZfocRzyon8MR0reB6NPg?e=0gu59A"
        />
        <ProjectPageTemplate
          title="UPSRT2.5 - Locked Away"
          bannerVideo="UPSRT2.5 - Locked Away.mp4"
          description=" UPSRT2.5 - Locked Away pack."
          bio="Bio information for UPSRT2.5 - Locked Away pack."
          moreInfo="See UPSRT2.5 Credits"
          date="April 1st 2022"
          status="Ended"
          songs={getFilteredSongs("UPSRT2.5 - Locked Away")}
        />
        <ProjectPageTemplate
          title="UPSRT"
          bannerImage="UPSRTBanner.png"
          description=" UPSRT pack."
          bio="Bio information for UPSRT pack."
          moreInfo="See UPSRT Credits"
          date="2016"
          status="Ended"
          songs={getFilteredSongs("UPSRT")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EdaiWvHviflBttJjUl_RdXcBzWiVgYSPjYstzIgLENRS8Q?e=YBBSNr"
        />
        <ProjectPageTemplate
          title="D.O.W.N.S 5"
          bannerImage="D.O.W.N.S 5Banner.png"
          description='"The fifth and final iteration of the D.O.W.N.S series - [For more information](http://aaronin.jp/boards/viewtopic.php?t=11010)'
          bio="Organised by Zetorux"
          moreInfo="Family Fun Center, East Harrisburg Mall, PA (3501 Paxton St, Harrisburg, PA 17111)"
          date="January 3rd-4th, 2015"
          status="Ended"
          songs={getFilteredSongs("D.O.W.N.S 5")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EYiM_lfMp3xJkM7n_6dDz-EBqkzb6U17YTKWhm9seKaXvw?e=Xjh2Kf"
        />
        <ProjectPageTemplate
          title="D.O.W.N.S 4"
          bannerImage="D.O.W.N.S 4Banner.png"
          description=" D.O.W.N.S 4 pack [For more information](http://aaronin.jp/boards/viewtopic.php?t=10580)."
          bio="Organised by Zetorux"
          moreInfo="Family Fun Center, East Harrisburg Mall, PA (3501 Paxton St, Harrisburg, PA 17111)" 
          date="January 24th-26th, 2014"
          status="Ended"
          songs={getFilteredSongs("D.O.W.N.S 4")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EXDQ5cjfrL9FoaZzhKb0X70Bzwju5Me8qSFoh_0Pzi7JXA?e=ER7nTa"
        />
        <ProjectPageTemplate
          title="D.O.W.N.S 3"
          bannerImage="D.O.W.N.S 3Banner.png"
          description="Dancing Over the Weekend to New Stepcharts 3 [For more information](http://aaronin.jp/boards/viewtopic.php?t=9866)"
          bio="D.O.W.N.S. 3 Tournament Pack"
          moreInfo="Family Fun Center, East Harrisburg Mall, PA (3501 Paxton St, Harrisburg, PA 17111)"
          date="January 26th, 2013"
          status="Ended"
          songs={getFilteredSongs("D.O.W.N.S 3")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EVNEt0H-LkNBotWNNf_ioHQB2QMUeu9suS-O6P0VkM6-ug?e=mLzxlu"
        />
        <ProjectPageTemplate
          title="D.O.W.N.S 2"
          bannerImage="D.O.W.N.S 2Banner.png"
          description="Dancing Over the Weekend to New Stepcharts 2"
          bio="Organised by Zetorux"
          moreInfo="Adventure Park USA (New Market, MD)"
          date="January 14th, 2012"
          status="Ended"
          songs={getFilteredSongs("D.O.W.N.S 2")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/ETLMrCpMv79Mt7UiorUz0cMBBXqSzHLwuhHlBNm_8YWuBA?e=HwHHFU"
        />
        <ProjectPageTemplate
          title="D.O.W.N.S 1"
          bannerImage="D.O.W.N.S 1Banner.png"
          description="Dancing Over the Weekend to New Stepcharts. [For more information](http://aaronin.jp/boards/viewtopic.php?p=407511)"
          bio="Organised by Zetorux"
          moreInfo="Adventure Park USA (New Market, MD)"
          date="March 5th, 2011"
          status="Ended"
          songs={getFilteredSongs("D.O.W.N.S 1")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EekZVSUN8kdPuoVsXSoFDEgBZPXmShMEVW3pg2qOpET-cA?e=FbYypJ"
        />
        <ProjectPageTemplate
          title="J.U.M.P.S"
          bannerImage="J.U.M.P.SBanner.png"
          description="Junior UPS Makes Potential Stars."
          bio="**What Is Jumps**? [Jumps Info](https://github.com/CrashCringle12/Simply-Love-SM5/wiki/J.U.M.P.S)"
          moreInfo="**Bracket**: [Jumps Bracket]( https://challonge.com/juniorups)"
          date="January 8th 2020"
          status="Ended"
          songs={getFilteredSongs("J.U.M.P.S")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/ETjDg5e4XWxGn2rKEgLYKXsBDVD71wzgg1PSEIFBstGDkA?e=4Zhk3k"
        />
        <ProjectPageTemplate
          title="J.U.M.P.S 2"
          bannerImage="J.U.M.P.S 2Banner.png"
          description="Junior UPS Makes Potential Stars."
          bio="**What Is Jumps?** https://github.com/CrashCringle12/Simply-Love-SM5/wiki/J.U.M.P.S"
          moreInfo="**Bracket**: [Jumps Bracket](https://challonge.com/jumps2two)"
          date="November 12th 2020"
          status="Ended"
          songs={getFilteredSongs("J.U.M.P.S 2")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EfL0ZElj7rJCrEnYNEztX_gBijgRYtYNuvx9OjPTqPlqUA?e=hayiBb"
        />
        <ProjectPageTemplate
          title="J.U.M.P.S 3"
          bannerImage="J.U.M.P.S 3Banner.png"
          bio="**What Is Jumps?** [Jumps Info](https://github.com/CrashCringle12/Simply-Love-SM5/wiki/J.U.M.P.S)"
          moreInfo="**Bracket:** [Jumps Bracket](https://challonge.com/p3qvja13)"
          status="Ended"
          date="October 24th 2021"
          songs={getFilteredSongs("J.U.M.P.S 3")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/ESB3jKTJk1VEr0jhFWt1ETcB7cqz6Q5KSCBNQ-vjisrnpw?e=S2bOrs"
        />
        <ProjectPageTemplate
          title="J.U.M.P.S 4"
          bannerImage="J.U.M.P.S 4Banner.png"
          description="Junior UPS Makes Potential Stars."
          bio="**What Is Jumps?** [Jumps Info](https://github.com/CrashCringle12/Simply-Love-SM5/wiki/J.U.M.P.S)"
          moreInfo="**Bracket:** [Jumps Bracket](https://challonge.com/p3qvja13)"
          date="February 26th 2023"
          status="Ended"
          songs={getFilteredSongs("J.U.M.P.S 4")}
          downloadLink="https://pennstateoffice365-my.sharepoint.com/:u:/g/personal/lbc5186_psu_edu/EfO9jDJ6PMlLqkmFeZqvVuUBXzfX92GYzuM8xkkQ1tesbA?e=b4NGpo"
        />
        <ProjectPageTemplate
          title="Good Reads 1"
          bannerImage="Good Reads3Banner.png"
          description=" Good Reads 3 pack. https://challonge.com/goodreads"
          bio="Bio information for Good Reads 3 pack."
          moreInfo="Additional information about the Good Reads 3 pack."
          date="November 1st, 2018"
          status="Ended"
          songs={getFilteredSongs("Good Reads 1")}
        />
        <ProjectPageTemplate
          title="Good Reads 2"
          bannerImage="Good Reads3Banner.png"
          description=" Good Reads 3 pack. https://challonge.com/cgtuln0v"
          bio="Bio information for Good Reads 3 pack."
          moreInfo="Additional information about the Good Reads 3 pack."
          date="April 13th, 2019"
          status="Ended"
          songs={getFilteredSongs("Good Reads 2")}
        />  
        <ProjectPageTemplate
          title="Good Reads 2.5"
          bannerImage="Good Reads3Banner.png"
          description=" Good Reads 3 pack."
          bio="Bio information for Good Reads 2.5  pack. https://challonge.com/o2arz7v0"
          moreInfo="Additional information about the Good Reads 3 pack."
          date="November 8th, 2019"
          status="Ended"
          songs={getFilteredSongs("Good Reads 2.5")}
        />
        <ProjectPageTemplate
          title="Good Reads 3"
          bannerImage="Good Reads3Banner.png"
          description=" Good Reads 3 pack. https://challonge.com/o2arz7v0"
          bio="Bio information for Good Reads 3 pack."
          moreInfo="Additional information about the Good Reads 3 pack."
          date="2024-"
          status="Ended"
          songs={getFilteredSongs("Good Reads 3")}
        />
        <div className="da-bottom"></div>
        </StyledPageComponent>
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default SpecialPacks;
