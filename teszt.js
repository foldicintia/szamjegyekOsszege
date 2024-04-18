import {szamjegyekOsszege} from "./main.js";

export function szamjegyekOsszegeTeszt() {
    const tesztLISTA = [
      {
        szam: 0,
        vart: 0,
      },
      {
        szam: 1,
        vart: 1,
      },      {
        szam: 2,
        vart: 2,
      },      {
        szam: 3,
        vart: 3,
      },      {
        szam: 4,
        vart: 4,
      },      {
        szam: 5,
        vart: 5,
      },      {
        szam: 6,
        vart: 6,
      },      {
        szam: 7,
        vart: 7,
      },
      {
        szam: 8,
        vart: 8,
      },
      {
        szam: 9,
        vart: 9,
      },
      {
        szam: 123456789,
        vart: 45,
      },
      {
        szam: -44,
        vart: 8,
      },
      {
        szam: 123,
        vart: 6,
      },
      {
        szam: 4000000000012,
        vart: 7,
      },
      {
        szam: 3.2,
        vart: 3,
      },
      {
        //max
        szam: Number.MAX_SAFE_INTEGER,
        vart: 76,
      },
      {
        //min
        szam: Number.MIN_SAFE_INTEGER,
        vart: 76,
      }
    ]

tesztLISTA.forEach((tesztEset) => {
    let eredmeny = szamjegyekOsszege(tesztEset.szam);
    console.assert(
      tesztEset.vart === eredmeny,
      "%o",
      `szam: ${tesztEset.szam} vart:${tesztEset.vart} kapott:${eredmeny}`,
      `HIBA!`
    );
  });
}
