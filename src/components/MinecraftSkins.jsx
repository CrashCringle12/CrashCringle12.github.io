import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Container } from "react-bootstrap";
import ReactSkinview3d from "react-skinview3d"
import { WalkingAnimation } from "skinview3d"
import { FlyingAnimation } from "skinview3d"
import { RunningAnimation } from "skinview3d"
// #region styled-components
const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem);
`;
// #endregion

// Skin data
const skins = [
    "Chaos Crash.png",
    "Rogue Crash.png",
    "Prime Crash.png",
    "Old Crash.png",
    "Corrupt Crash.png",
    "Heretic Crash.png",
    "Holy Crash.png",
    "Kramp Cringle.png",
    "Crash Kringle.png",
  ];
// #region component
const MinecraftSkins = () => {
    return (
      <Element name={"MinecraftSkins"} id="MinecraftSkins">
        <StyledSection className="d-flex flex-column justify-content-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"MinecraftSkins"} />
          </Container>
          <Container>
            {skins.map((skin, index) => (
              <ReactSkinview3d
                key={index}
                className="viewer"
                skinUrl={`${process.env.PUBLIC_URL}/${skin}`}
                height={300}
                width={150}
                onReady={({ viewer }) => {
                    // Add an animation
                    // Random which animation to use
                    
                    const random = Math.random();
                    if (random < 0.33) viewer.animation = new WalkingAnimation();
                    else if (random < 0.66) viewer.animation = new RunningAnimation()
                    else viewer.animation = new WalkingAnimation();


                    // Randomize the animation speed
                    viewer.animation.speed = Math.random() * 0.5 + 0.5;
                    // Randomize the direction
                    viewer.nameTag = skin.replace(".png", "");
                    viewer.autoRotateSpeed = Math.random() * 1 + 0.5;
                    viewer.zoom = 0.75;
                    // Between -360 and 360 
                    viewer.animation.direction = Math.random() * 720 - 360;
                    // Enabled auto rotate
                    viewer.autoRotate = true;
                }}
              />
            ))}
          </Container>
        </StyledSection>
      </Element>
    );
  };
  // #endregion
  
  export default MinecraftSkins;