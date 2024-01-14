import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootObject } from "./shazamInterfaces";
import { ArtistInterface } from "./getArtistInterface";
import { TrackDetailsObject } from "./getTrackDetails";

const options = {
    method: "GET",
    url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
    headers: {
        "x-RapidAPI-Key": "e3ece52a6emsh3e97c631e5f1731p134ed8jsnf25a25682869",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set("x-RapidAPI-Key", "e3ece52a6emsh3e97c631e5f1731p134ed8jsnf25a25682869");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query<RootObject[], void>({
            query: () => "v1/charts/world",
        }),
        getSongsByGenre: builder.query<RootObject[], void>({
            query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
        }),
        getSongsByCountry: builder.query<RootObject[], void>({
            query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
        }),
        getSongsBySearch: builder.query<RootObject[], void>({
            query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
        }),
        getArtistDetails: builder.query<ArtistInterface, { artistId: string | undefined }>({
            query: ({ artistId }) => `v2/artists/details?artist_id=${artistId}`,
        }),
        getSongDetails: builder.query<TrackDetailsObject, { songid: string | undefined }>({
            query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
        }),
        getSongRelated: builder.query<RootObject[], { songid: string | undefined }>({
            query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;
