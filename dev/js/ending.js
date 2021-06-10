import { gsap } from "gsap";

export let endingTL = gsap.timeline();
     endingTL.fromTo("#lastscreen",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .9, ease:"power4.in"})