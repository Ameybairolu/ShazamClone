export interface ArtistInterface {
    data: ArtistDatum[];
}

export interface ArtistDatum {
    attributes: PurpleAttributes;
    avatar: string;
    href: string;
    id: string;
    meta: PurpleMeta;
    relationships: Relationships;
    type: FluffyType;
    views: DatumViews;
}

export interface PurpleAttributes {
    artistBio: string;
    artwork: Artwork;
    bornOrFormed: string;
    editorialArtwork: PurpleEditorialArtwork;
    genreNames: GenreName[];
    name: Name;
    origin: string;
    url: string;
}

export interface Artwork {
    bgColor: string;
    hasP3: boolean;
    height: number;
    imageTraits?: string[];
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
    textGradient?: TextGradient[];
    url: string;
    width: number;
}

export enum TextGradient {
    Ffffff = "ffffff",
    The000000 = "000000",
}

export interface PurpleEditorialArtwork {
    bannerUber?: Artwork;
    centeredFullscreenBackground?: Artwork;
    originalFlowcaseBrick?: Artwork;
    storeFlowcase?: Artwork;
    subscriptionHero?: Artwork;
    vipSquare?: Artwork;
}

export enum GenreName {
    Music = "Music",
    Pop = "Pop",
    Rock = "Rock",
}

export enum Name {
    TheBeatles = "The Beatles",
}

export interface PurpleMeta {
    views: MetaViews;
}

export interface MetaViews {
    order: string[];
}

export interface Relationships {
    albums: Albums;
}

export interface Albums {
    data: AlbumsDatum[];
    href: string;
    next?: string;
}

export interface AlbumsDatum {
    attributes?: FluffyAttributes;
    href: string;
    id: string;
    type: PurpleType;
}

export interface FluffyAttributes {
    albumName?: string;
    artistName?: Name;
    artwork: Artwork;
    audioTraits?: AudioTrait[];
    copyright?: string;
    curatorName?: string;
    description?: Description;
    durationInMillis?: number;
    editorialArtwork: FluffyEditorialArtwork;
    editorialNotes?: EditorialNotes;
    genreNames?: string[];
    has4K?: boolean;
    hasCollaboration?: boolean;
    hasHDR?: boolean;
    isChart?: boolean;
    isCompilation?: boolean;
    isComplete?: boolean;
    isMasteredForItunes?: boolean;
    isPrerelease?: boolean;
    isSingle?: boolean;
    isrc?: string;
    lastModifiedDate?: Date;
    name: string;
    playParams: PurplePlayParams;
    playlistType?: PlaylistType;
    previews?: PurplePreview[];
    recordLabel?: RecordLabel;
    releaseDate?: Date;
    supportsSing?: boolean;
    trackCount?: number;
    trackNumber?: number;
    upc?: string;
    url: string;
    videoTraits?: any[];
}

export enum AudioTrait {
    Atmos = "atmos",
    HiResLossless = "hi-res-lossless",
    Lossless = "lossless",
    LossyStereo = "lossy-stereo",
    Spatial = "spatial",
}

export interface Description {
    short: string;
    standard: string;
}

export interface FluffyEditorialArtwork {
    bannerUber?: Artwork;
    originalFlowcaseBrick?: Artwork;
    playlistVIPSquare?: Artwork;
    staticDetailSquare?: Artwork;
    staticDetailTall?: Artwork;
    storeFlowcase?: Artwork;
    subscriptionCover?: Artwork;
    subscriptionHero?: Artwork;
    superHeroTall?: Artwork;
    superHeroWide?: Artwork;
}

export interface EditorialNotes {
    name?: string;
    short: string;
    standard?: string;
    tagline?: string;
}

export interface PurplePlayParams {
    id: string;
    kind: PurpleKind;
    versionHash?: string;
}

export enum PurpleKind {
    Album = "album",
    MusicVideo = "musicVideo",
    Playlist = "playlist",
}

export enum PlaylistType {
    Editorial = "editorial",
}

export interface PurplePreview {
    artwork: Artwork;
    hlsUrl: string;
    url: string;
}

export enum RecordLabel {
    UMCUniversalMusicCatalogue = "UMC (Universal Music Catalogue)",
}

export enum PurpleType {
    Albums = "albums",
    MusicVideos = "music-videos",
    Playlists = "playlists",
}

export enum FluffyType {
    Artists = "artists",
}

export interface DatumViews {
    "featured-albums": FeaturedAlbums;
    "full-albums": FullAlbums;
    "latest-release": FeaturedAlbums;
    playlists: FullAlbums;
    "similar-artists": SimilarArtists;
    "top-music-videos": FullAlbums;
    "top-songs": TopSongs;
}

export interface FeaturedAlbums {
    attributes: FeaturedAlbumsAttributes;
    data: AlbumsDatum[];
    href: string;
}

export interface FeaturedAlbumsAttributes {
    title: string;
}

export interface FullAlbums {
    attributes: FeaturedAlbumsAttributes;
    data: AlbumsDatum[];
    href: string;
    next: string;
}

export interface SimilarArtists {
    attributes: FeaturedAlbumsAttributes;
    data: SimilarArtistsDatum[];
    href: string;
    next: string;
}

export interface SimilarArtistsDatum {
    attributes: TentacledAttributes;
    href: string;
    id: string;
    relationships: Relationships;
    type: FluffyType;
}

export interface TentacledAttributes {
    artistBio: string;
    artwork: Artwork;
    bornOrFormed?: string;
    classicalUrl?: string;
    editorialArtwork: PurpleEditorialArtwork;
    genreNames: GenreName[];
    name: string;
    origin?: string;
    url: string;
}

export interface TopSongs {
    attributes: FeaturedAlbumsAttributes;
    data: TopSongsDatum[];
    href: string;
    next: string;
}

export interface TopSongsDatum {
    attributes: StickyAttributes;
    href: string;
    id: string;
    meta?: FluffyMeta;
    type: TentacledType;
}

export interface StickyAttributes {
    albumName: string;
    artistName: Name;
    artwork: Artwork;
    audioLocale: AudioLocale;
    audioTraits: AudioTrait[];
    composerName: string;
    discNumber: number;
    durationInMillis: number;
    editorialArtwork: TentacledEditorialArtwork;
    genreNames: GenreName[];
    hasCredits: boolean;
    hasLyrics: boolean;
    hasTimeSyncedLyrics: boolean;
    isAppleDigitalMaster: boolean;
    isMasteredForItunes: boolean;
    isVocalAttenuationAllowed: boolean;
    isrc: string;
    name: string;
    playParams: FluffyPlayParams;
    previews: FluffyPreview[];
    releaseDate: Date;
    trackNumber: number;
    url: string;
}

export enum AudioLocale {
    EnUS = "en-US",
}

export interface TentacledEditorialArtwork {}

export interface FluffyPlayParams {
    id: string;
    kind: FluffyKind;
}

export enum FluffyKind {
    Album = "album",
    MusicVideo = "musicVideo",
    Song = "song",
}

export interface FluffyPreview {
    url: string;
}

export interface FluffyMeta {
    formerIds: string[];
}

export enum TentacledType {
    Songs = "songs",
}
