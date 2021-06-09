import { gsap } from "gsap";

export let logoTL = gsap.timeline();

gsap.set("#blackscreen",{transformOrigin:"center"});


logoTL.to("#blackscreen",{duration:1,ease: "power4.out"})
            
            .from("#hyundaistart",{ease: "power4.out", opacity: .2, duration: 0.3 })
            
            .to("#hyundaistart",{ease: "power4.out", opacity: 1, duration: 0.3 })
            .from("#hyundailogo",{ease: "power4.out", opacity: .1 , duration: .9 })
            
            