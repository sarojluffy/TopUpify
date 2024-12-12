import brawl from "/images/brawl.jpeg";
import coc from "/images/Coc.jpg";
import cod from "/images/CODMob.jpeg";
import EF from "/images/EF.jpg";
import FC from "/images/FC.jpg";
import ml from "/images/ML.png";
import pubgl from "/images/pubglte.jpg";
import pubgimg from "/images/pubg.jpg";
import codimg from "/images/cod.jpg";
import ffimg from "/images/ff.jpg";
import amzon from "/giftcards/amzon (1).jpg";
import google from "/giftcards/googlecardart (1).png";
import itunes from "/giftcards/ituens-card (1).jpg";
import playst from "/giftcards/spotify.jpeg";
import steam from "/giftcards/steam.jpeg";
import xbox from "/giftcards/xbox.jpeg";

type Props = {
  src: string;
  alt: string;
  name: string;
};
export const gameslider: Props[] = [
  { src: brawl, alt: "brawl", name: "Brawlstars" },
  { src: coc, alt: "coc", name: "Clash of clans" },
  { src: cod, alt: "cod", name: "Call of duty" },
  { src: EF, alt: "EF", name: "Efootball" },
  { src: FC, alt: "FC", name: "FC mobile" },
  { src: ml, alt: "ml", name: "Mobile legends" },
  { src: pubgl, alt: "pubgl", name: "Pubglite" },
];

export const imageArr: Props[] = [
  { src: pubgimg, alt: "pubgimage", name: "pubg" },
  { src: codimg, alt: "codimg", name: "Call of duty" },
  { src: ffimg, alt: "ffimg", name: "freefire" },
];
export const GiftArray: Props[] = [
  { src: amzon, alt: "amzon", name: "Amazon GiftCard" },
  { src: google, alt: "google", name: "google GiftCard" },
  { src: itunes, alt: "itunes", name: "Itunes" },
  { src: playst, alt: "playst", name: "Playstation GiftCard" },
  { src: steam, alt: "steam", name: "Steam" },
  { src: xbox, alt: "xbox", name: "Xbox GiftCard" },
];

export const CombinedData: Props[] = [...gameslider, ...GiftArray];
