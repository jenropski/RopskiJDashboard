import { gsap } from "gsap";

export let gasSpeedTL = gsap.timeline();
gsap.set("#gas_speed",{transformOrigin:"center"});


gasSpeedTL.fromTo("#speed_gas",{alpha:0},{alpha:1, y:"+=0", x:"+=0",ease:"power4.in"})
gasSpeedTL.fromTo("#fuel_icon",{alpha:0},{alpha:1, y:"+=0", x:"+=0",ease:"power4.in"})
gasSpeedTL.fromTo("#fuel",{alpha:0},{alpha:1, y:"+=0", x:"+=0",ease:"power4.in"})
gasSpeedTL.fromTo("#mph",{alpha:0},{alpha:1, y:"+=0", x:"+=0",ease:"power4.in"})
gasSpeedTL.fromTo("#goodmorn",{alpha:0},{alpha:1, y:"+=10", x:"+=10", ease:"power4.in"})
gasSpeedTL.to("#goodmorn",{alpha:0, y:"+=0", x:"+=0", duration: 1, delay:2, ease:"power4.in"})
gasSpeedTL.fromTo("#slider",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .2, ease:"power4.in"})