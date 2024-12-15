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
  id: string;
};
export const gameslider: Props[] = [
  { src: brawl, alt: "brawl", name: "Brawlstars", id: "1" },
  { src: coc, alt: "coc", name: "Clash of clans", id: "2" },
  { src: cod, alt: "cod", name: "Call of duty", id: "3" },
  { src: EF, alt: "EF", name: "Efootball", id: "4" },
  { src: FC, alt: "FC", name: "FC mobile", id: "5" },
  { src: ml, alt: "ml", name: "Mobile legends", id: "6" },
  { src: pubgl, alt: "pubgl", name: "Pubglite", id: "7" },
];

export const imageArr: Props[] = [
  { src: pubgimg, alt: "pubgimage", name: "pubg", id: "8" },
  { src: codimg, alt: "codimg", name: "Call of duty", id: "9" },
  { src: ffimg, alt: "ffimg", name: "freefire", id: "10" },
];
export const GiftArray: Props[] = [
  { src: amzon, alt: "amzon", name: "Amazon GiftCard", id: "11" },
  { src: google, alt: "google", name: "google GiftCard", id: "12" },
  { src: itunes, alt: "itunes", name: "Itunes", id: "13" },
  { src: playst, alt: "playst", name: "Playstation GiftCard", id: "14" },
  { src: steam, alt: "steam", name: "Steam", id: "15" },
  { src: xbox, alt: "xbox", name: "Xbox GiftCard", id: "16" },
];

export const CombinedData: Props[] = [...gameslider, ...GiftArray];
