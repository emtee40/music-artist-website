import {Artist} from "./artist/artist";
import {Release} from "./release/release";

export interface Data {
    artists: Array<Artist>
    releases: Array<Release>
}
