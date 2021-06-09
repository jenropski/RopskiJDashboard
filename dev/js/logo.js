import { gsap } from "gsap";

export let logoTL = gsap.timeline();

gsap.set("#blackscreen",{transformOrigin:"center"});


logoTL.from("#blackscreen",{duration:1,ease: "power4.out"})
            .to("#hyundaistart",{ease: "power4.out", opacity: .2, duration: 0.7 })
            .to("#hyundaistart",{ease: "power4.out", opacity: 1, duration: 0.3 })