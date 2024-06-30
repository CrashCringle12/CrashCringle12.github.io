import React, { useEffect, useState } from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Router
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
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
  const location = useLocation();
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

  return (
    <>
      <NavBar />
      <Hero name="The Cringle Collection" />
      <main>
        <Philosophy
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          philosophy={philosophy}
        />
        <ProjectPageTemplate
          title="Cringle Captivation"
          bannerImage="CaptivationBanner.png"
          description="Captivating no? Yeah this pack is my pink pack. I really enjoy bubbly music, every meghan trainor song I've charted is a good example of that. This pack is intended for songs that convey pink to me or are just feel bubbly, overwhelming positive, cute, or sweet. "
          bio="This pack is also still getting new content but I'm pretty picky about what will go in here. It's likely Hollow will finish before this pack does and another pack will start."
          moreInfo="I generally try to cap each pack out at 20 songs roughly, so that's an indicator on how close a pack is to finish."
          date="2024-"
          status="Ongoing"
          songs={getFilteredSongs("Cringle Captivation")}
        />
        <ProjectPageTemplate
          title="Cringle Hollow"
          bannerImage="HollowBanner.png"
          description="Right back to it with Cringle Hollow. This is my current 'default' pack right now. Any song that conveys green or a darker color will definitely go here as well."
          bio="This pack actually started because I felt I needed a green pack to put my 'green' content. So boom. This pack is still getting new content often so we're pretty much in the present now."
          moreInfo="If you're looking for Light Switch, Rhythm Hell, or Million Dollar Baby this is the pack."
          date="2022-"
          status="Ongoing"
          songs={getFilteredSongs("Cringle Hollow")}
        />
        <ProjectPageTemplate
          title="Cringle Odyssey"
          bannerImage="OdysseyBanner.png"
          description="Welcome to the Odyssey. So I got out of the sort of 'hole' I was in during the time of Cringle Desolation. I realized that I was nowhere near done charting so to sort of contrast the darker themes of desolation, the following pack, Odyssey was much more bright."
          bio="I put songs that conveyed White or Gold to me in here. Additionally any song that I charted that felt just open and freeing went here as well."
          moreInfo="Desolation and onwards are all my 'modern' packs. I consider things before Desolation as my older content and things after as newer. I' had become much more confident in the craft at this point."
          date="2021-"
          status="Ongoing"
          songs={getFilteredSongs("Cringle Odyssey")}
        />
        <ProjectPageTemplate
          title="Cringle Desolation"
          bannerImage="DesolationBanner.png"
          description="Cringle Desolation was intended to my final pack at the time. I wrote these charts during a very dark period in my life and each chart reflects on a certain feeling, moment, or event during the time. In a way the charts tell a story, one that I still have a hard time expressing in words."
          bio="Every song in this pack has a very specific 'thing' about it, more so than normal. Majority of the pack has some sort of gimmick. I put a lot of effort into the 'idea' for each chart in this, probably the most effort for any pack "
          moreInfo="It is recommended to use the 'Desolation' noteskin for content in this pack. Viewer Discretion is advised."
          date="2021-2023"
          status="Completed"
          songs={getFilteredSongs("Cringle Desolation")}
        />
        <ProjectPageTemplate
          title="Cringle Asylum"
          bannerImage="AsylumBanner.png"
          description="Asylum was an interesting pack. I started working on right as the pandemic basically started. Before we really knew what it would become. Asylum wasn't meant to be related to COVID in any way during its conception but just a reference to the sort of chaotic parts of my mind that should remain locked away. Being physically locked away from covid tho was really just a bonus"
          bio="I put songs that conveyed some combination of purple, pink, and red in this pack. During my time at cabby this was probably one of my most popular packs once it got filled up. It's got a lot of tv show and pop music in it (not all, but a good amount). The pack concluded when I finished 'Get Into It'"
          moreInfo="This pack also has the 'Tribute' song that I made to commerate the friends after we all get sent home due to COVID. There were a lot of emotions there but yeah it's in Doubles and I think that was my first time really trying to write a couples chart."
          date="2020 - 2024"
          status="Completed"
          songs={getFilteredSongs("Cringle Asylum")}
        />
        <ProjectPageTemplate
          title="Cringle Isle"
          bannerImage="IsleBanner.png"
          description="Ahh bikini bottom. This is the 'orange' pack. I put songs that convey that color or a sort of tropical/beach vibe to me. It's also probably apparent at this point that I like charting old tv show theme songs lol. I would say this pack marks the first turnaround point for me as a stepartist. I finally got my barrings and sorta knew more what I was doing."
          bio="Haven and Isle were the main squeezes for a while both being updated concurrently once Isle came into the picture. Isle is probably my favorite vibe overall and I concluded it's content recently with the addition of BBL Drizzy."
          moreInfo=""
          date="2019-2024"
          status="Completed"
          songs={getFilteredSongs("Cringle Isle")}
        />
        <ProjectPageTemplate
          title="Cringle Haven"
          bannerImage="HavenBanner.png"
          description="Ahh Cringle Haven. This is the sort of gimmicky future-bass type pack I suppose? I put songs that were either that or conveyed the color 'blue' to me in this pack. This is my second pack that I started shortly after starting Paradise. The two were concurrent for a while. Most things in here are gonna be gimmicky"
          bio="Squeaky Beds and Leaky Faucets was a big inspiration and motivator during the peak of this pack."
          moreInfo="While the pack is technically ongoing, I don't necessarily plan on adding any new content to it. Rather there are still a couple songs in my backlog that I started and never finished that will go in here. I don't plan on putting any *new* charts here."
          date="2019-2023"
          status="Completed**"
          songs={getFilteredSongs("Cringle Haven")}
        />
        <ProjectPageTemplate
          title="Cringle Paradise"
          bannerImage="ParadiseBanner.png"
          description="Cringle Paradise was my first ever pack and my first attempt at charting. I was inspired to create a diverse pack where you could find just about anything and was specifically sparked by U.P.S. I thought about remaking this pack now, but I think it's good to leave it as it is for now. I like seeing how much I've grown as a stepartist."
          bio="My First ever chart, 'Magic' is....pretty bad. No no like reallllly bad. No no you still don't get it. Not like haha U.P.S random 'bad' no this is like....bad. I didn't have any prior experience with rhythm games or music theory so I thought I just cooked up a masterpiece but when I look at it all the years later mannnnn. Soo that chart I keep as a sort of meme so ig in a way it became haha bad, but yeah. There are some early charts that I've canned but I kept the first chart for memories."
          moreInfo="Anyways, there are still some gems in here despite it being my first pack. I leave it here for the world now."
          date="2018"
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
