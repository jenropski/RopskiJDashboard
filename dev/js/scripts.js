import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

// import {numberThing} from "./demo-this"

import { logoTL } from "./logo"
import { logoMorphTL } from "./logoMorph"
import { logoZoomTL } from "./logoZoom"
import { gasSpeedTL } from "./gasSpeed"
import { wheretoTL } from "./whereto"
import { endingTL } from "./ending"



gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(logoTL)

        .add(logoMorphTL)

        .add(logoZoomTL)

        .add(gasSpeedTL) 
        
        .add(wheretoTL)
        
        .add(endingTL);


// console.log(numberThing);


