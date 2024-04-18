import { szamjegyekOsszegeTeszt } from "./teszt.js";

export function szamjegyekOsszege(szam) {
    let osszeg = 0;
    if (szam<0) {
        szam = -szam;
    }
    while (szam > 0) {
        let szamJegy = szam % 10;
        osszeg = osszeg + szamJegy;
        szam = Math.floor(szam/10);
    }
    return osszeg;
}

console.log(szamjegyekOsszege(213))
szamjegyekOsszegeTeszt()