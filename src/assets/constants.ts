import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph } from "react-icons/hi";

import { IconType } from "react-icons";

export const genres: {
    title: string;
    value: string;
}[] = [
    { title: "Pop", value: "POP" },
    { title: "Hip-Hop", value: "HIP_HOP_RAP" },
    { title: "Dance", value: "DANCE" },
    { title: "Electronic", value: "ELECTRONIC" },
    { title: "Soul", value: "SOUL_RNB" },
    { title: "Alternative", value: "ALTERNATIVE" },
    { title: "Rock", value: "ROCK" },
    { title: "Latin", value: "LATIN" },
    { title: "Film", value: "FILM_TV" },
    { title: "Country", value: "COUNTRY" },
    { title: "Worldwide", value: "WORLDWIDE" },
    { title: "Reggae", value: "REGGAE_DANCE_HALL" },
    { title: "House", value: "HOUSE" },
    { title: "K-Pop", value: "K_POP" },
];

export const links: {
    name: string;
    to: string;
    icon: IconType;
}[] = [
    { name: "Discover", to: "/", icon: HiOutlineHome },
    { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
    { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];
