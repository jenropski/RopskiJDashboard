import { gsap } from "gsap";

export let wheretoTL = gsap.timeline();
        wheretoTL.to("#expand",{alpha:0} )
        wheretoTL.to("#speed_gas",{alpha:0} )
        wheretoTL.to("#mph",{y:"0", x:"-300"} )
        wheretoTL.to("#fuel_icon",{y:"-118", x:"320"} )
        wheretoTL.to("#fuel",{y:"-20", x:"275"} )
        wheretoTL.fromTo("#whereto",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .2, ease:"power4.in"})
        wheretoTL.fromTo("#locations",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .2, ease:"power4.in"})
        wheretoTL.fromTo("#arrow",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .2, ease:"power4.in"})