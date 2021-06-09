import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

// import {numberThing} from "./demo-this"

import { logoTL } from "./logo"
import { logoMorphTL } from "./logoMorph"
import { planetZoomTL } from "./planetZoom"
import { asteroidFlyTL } from "./asteroidFly"
import { landingTL } from "./landing"
import { shootingStarsTL } from "./shootingStars"
import { ufoEndingTL } from "./ufoEnding"



gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(logoTL)

        .add(logoMorphTL)

        .add(liftOffTL)
        
        .add(planetZoomTL)

        .add(landingTL) 
        
        .add(asteroidFlyTL)
        
        .add(shootingStarsTL)
        
        .add(ufoEndingTL);


// console.log(numberThing);


