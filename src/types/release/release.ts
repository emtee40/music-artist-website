import {Track} from "./track";
import {ReleaseLinks} from "./release-links";

export interface Release {
    title: string
    artists: Array<string>
    label: string
    explicit: boolean
    copyright: string
    ean: string
    genres: Array<string>
    date: string
    tracks: Array<Track>
    links: ReleaseLinks
}
