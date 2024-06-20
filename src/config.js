// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/2021-07-10_12.45.50.png";
import CringleImg from "./images/Image.png";
// Projects Images (add your images to the images directory and import below)
import Logo from "./images/crashcringle.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "CrashCringle12";

// Navbar Logo image
export const navLogo = CringleImg;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I try to make content that brings smiles to folks. I make 'interesting' charts for Dance Dance Revolution / In The Groove. When I'm not doing rhythm games I'm making content for my Minecraft server.";

export const philosophy = "My motivation for playing ITG has always been for fun. I don't like to align myself with any particular group, playstyle or \"box\", I just do whatever I personally enjoy. I find enjoyment in Stamina, Mods, Tech, DDR, freestyle...doubles..singles. There's enjoyment to be found in all ways of enjoying the game. Despite their differences, I believe that the various popular styles of enjoying dance games are all completely valid. I find that post-2020 there's a large focus on tech and sometimes, it kinda feels like that's all there is nowadays. But when I remember how I got into this and think about what my fellow peers enjoy, I'm reminded that the community is broad and all encompassing. I guess what I'm getting at here is I know that non-tech enjoyers and stepartists might feel some sort of a way nowadays and I just want to say that \"it's okay\". I feel the sense of openness when I'm making charts just as I do when I'm playing them. There's a lot of diversity in the charts I have here. There's some mod heavy charts, stamina heavy, meme heavy, freestyle heavy, tech heavy, etc etc. Just really depends on what you pick I suppose. I have no intentions of fitting my charts to a specific meta or rhetoric. I just kinda chart the song the way I vibe to it. Most of what I've made was for the audience at Penn State and many of the songs were suggested by my fellow club members.\nThere is no overall charting theme to any of these packs with the exception of Cringle Desolation. The reason a chart is in one pack and not the other is because of...well \"color\". Each song kinda screams a certain color or vibe to me and that plays a part in what pack I put it in. That kind of implies these packs are living sorta? Kinda...Once a pack hits 20 songs I'm not likely to update it anymore or if a significant amount of time has passed since I created it. Idk I'm weird.<br><br>If you encounter any issues or find a mistake you think I made please feel free to reach out to me on discord. I am very very far from perfect so I'm sure something will come up.";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/movaaqpn";
