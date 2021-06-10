import { gsap } from "gsap";

gsap.set("#hyundailogo",{transformOrigin:"center"})
gsap.set("#expand",{transformOrigin:"center"})
;


export let logoZoomTL = gsap.timeline();

logoZoomTL.fromTo("#hyundailogo",{alpha:1, scale:1},{alpha:0, duration:4, scale:5, y:"+=0", x:"+=100",ease:"power4.in"})
logoZoomTL.fromTo("#expand",{alpha:0, scale:1},{alpha:1, duration:.4, y:"+=0", x:"+=0",ease:"power4.in"})
logoZoomTL.fromTo("#new_expand",{alpha:0, scale:1},{alpha:1, duration:.4, y:"+=0", x:"+=0",ease:"power4.in"})
logoZoomTL.fromTo("#temp_loco",{alpha:0, scale:1},{alpha:1, duration:.4, y:"+=0", x:"+=0",ease:"power4.in"})