import React, { useEffect, useState } from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import BackToTop from "../components/BackToTop";
import ProjectPageTemplate from "../components/ProjectPageTemplate";
import NavBar from "../components/NavBar";
import chartsData from "../data/charts.json"; // Adjust the path according to your directory structure

// Config
import { philosophy } from "../config";
// Utils
import { updateTitle } from "../utils";

const fetchChartsData = async () => {
  const response = await fetch("/path/to/charts.json");
  const data = await response.json();
  return data;
};

// #region component
const Packs = () => {
  const { data: userData } = useGetUsersQuery();
  const [charts, setCharts] = React.useState(chartsData); // Use imported JSON data

  useEffect(() => {
    const loadChartsData = async () => {
      const data = await fetchChartsData();
      setCharts(data);
    };

    loadChartsData();
  }, []);

  useEffect(() => {
    updateTitle(`${userData.name} | Packs`);
  }, [userData]);

  const getFilteredSongs = (packName) => {
    return charts.filter(chart => chart.pack === packName);
  };

  return (
    <>
      <NavBar />
      <Hero name={userData.name} />
      <main>
        <Philosophy
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          philosophy={philosophy}
        />
        <ProjectPageTemplate
          title="Cringle Captivation"
          bannerImage="CaptivationBanner.png"
          bio="This is some bio information."
          moreInfo="Additional information about the project."
          date="June 18, 2024"
          status="Work in Progress"
          songs={getFilteredSongs("Cringle Captivation")}
        />
        <ProjectPageTemplate
          title="Cringle Hollow"
          bannerImage="HollowBanner.png"
          bio="This is some bio information for Cringle Hollow."
          moreInfo="Additional information about the Cringle Hollow project."
          date="June 20, 2024"
          status="Completed"
          songs={getFilteredSongs("Cringle Hollow")}
        />
        <ProjectPageTemplate
          title="Cringle Odyssey"
          bannerImage="OdysseyBanner.png"
          bio="This is some bio information for Cringle Odyssey."
          moreInfo="Additional information about the Cringle Odyssey project."
          date="July 10, 2024"
          status="Not Started"
          songs={getFilteredSongs("Cringle Odyssey")}
        />
        <ProjectPageTemplate
          title="Cringle Desolation"
          bannerImage="DesolationBanner.png"
          bio="This is some bio information for Cringle Desolation."
          moreInfo="Additional information about the Cringle Desolation project."
          date="August 5, 2024"
          status="Work in Progress"
          songs={getFilteredSongs("Cringle Desolation")}
        />
        <ProjectPageTemplate
          title="Cringle Asylum"
          bannerImage="AsylumBanner.png"
          bio="This is some bio information for Cringle Asylum."
          moreInfo="Additional information about the Cringle Asylum project."
          date="September 12, 2024"
          status="Completed"
          songs={getFilteredSongs("Cringle Asylum")}
        />
        <ProjectPageTemplate
          title="Cringle Isle"
          bannerImage="IsleBanner.png"
          bio="This is some bio information for Cringle Isle."
          moreInfo="Additional information about the Cringle Isle project."
          date="October 18, 2024"
          status="Not Started"
          songs={getFilteredSongs("Cringle Isle")}
        />
        <ProjectPageTemplate
          title="Cringle Haven"
          bannerImage="HavenBanner.png"
          bio="This is some bio information for Cringle Haven."
          moreInfo="Additional information about the Cringle Haven project."
          date="November 1, 2024"
          status="Work in Progress"
          songs={getFilteredSongs("Cringle Haven")}
        />
        <ProjectPageTemplate
          title="Cringle Paradise"
          bannerImage="ParadiseBanner.png"
          bio="This is some bio information for Cringle Paradise."
          moreInfo="Additional information about the Cringle Paradise project."
          date="December 25, 2024"
          status="Completed"
          songs={getFilteredSongs("Cringle Paradise")}
        />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Packs;
