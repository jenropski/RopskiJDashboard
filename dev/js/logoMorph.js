import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);



export let logoMorphTL = gsap.timeline();

gsap.set("#hyundaistart",{transformOrigin:"center"});
gsap.set("#hyundailogo",{transformOrigin:"center"});
gsap.set("#expand",{transformOrigin:"center"});



logoMorphTL.to("#hyundaistart", {duration: .7, morphSVG:"#hyundailogo", ease: "elastic"});
logoMorphTL.to("#hyundaistart",{alpha:0} );


        


