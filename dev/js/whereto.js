import { gsap } from "gsap";

export let wheretoTL = gsap.timeline();
        wheretoTL.to("#expand",{alpha:0} )
        wheretoTL.to("#speed_gas",{alpha:0} )
        wheretoTL.to("#mph",{y:"10", x:"-300"} )
        wheretoTL.to("#fuel_icon",{y:"-118", x:"320"} )
        wheretoTL.to("#fuel",{y:"-20", x:"275"})
        wheretoTL.fromTo("#whereto",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .9, ease:"power4.in"})
        wheretoTL.fromTo("#locations",{alpha:0},{alpha:1, y:"+=0", x:"+=0", delay: 1, ease:"power4.in"})
        wheretoTL.fromTo("#arrow",{alpha:0},{alpha:1, y:"+=0", x:"+=0", ease:"power4.in"})
        wheretoTL.to("#whereto",{alpha:0, delay: 2})
        wheretoTL.to("#arrow",{alpha:0})
        wheretoTL.to("#locations",{alpha:0})
        wheretoTL.fromTo("#box_slider",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .2, ease:"power4.in"})
        wheretoTL.fromTo("#music",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: 2, ease:"power4.in"})
        wheretoTL.to("#box_slider",{y:"-76", x:"60", delay:2})
        wheretoTL.to("#music",{alpha:0})
        wheretoTL.fromTo("#message",{alpha:0},{alpha:1, y:"+=0", x:"+=0", duration: .9, ease:"power4.in"})
        wheretoTL.fromTo("#voicebars",{alpha:0},{alpha:1, y:"+=0", x:"+=0", stagger:2, duration: .9, delay:4, ease:"bounce"})
        wheretoTL.to("#voicebars",{alpha:0})
        wheretoTL.to("#message",{alpha:0})
        wheretoTL.to("#box_slider",{y:"-150", x:"119"})

