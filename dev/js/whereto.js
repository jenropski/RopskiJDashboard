import { gsap } from "gsap";

export let wheretoTL = gsap.timeline();
        wheretoTL.to("#expand",{alpha:0} )
        wheretoTL.to("#speed_gas",{alpha:0} )
        wheretoTL.to("#mph",{y:"500", x:"100"} )
        wheretoTL.to("#fuel_icon",{y:"300", x:"400"} )
        wheretoTL.to("#fuel",{y:"-20", x:"250"} )
