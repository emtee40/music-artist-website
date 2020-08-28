# Kratzen und Fauchen Website

Website for Kratzen und Fauchen.

Someday it will be at [https://kratzen-und-fauchen.com](https://kratzen-und-fauchen.com)…

## Development Notes

- It's *required* that the `svg` element in `logo.svg` has the property `pointer-events="bounding-box"`!!!
    - If you edit that file with any image tool check it's still in there!
- Because of javascript routing being not the same as "real" browser routing, the `<ScrollToTop />` component has to be added somewhere in every page.
- I18N keys should be in lowercase and use dashes as separator (eg. `hello-world` instead of `hello_world`)

### Adding Releases

New releases should be added to the `releases` array in `static/data.json`, the format is:
```json
{
    "title": "",
    "artists": [""],
    "label": "",
    "explicit": false,
    "copyright": "",
    "ean": "",
    "genres": [""],
    "date": "1970-01-31",
    "tracks": [{
      "title": "",
      "artists": [""],
      "version": "",
      "isrc": "",
      "copyright": "1970 Holder",
      "recording": ""
    }],
    "links": {
        "apple": "https://music.apple.com/...",
        "spotify": "https://open.spotify.com/...",
        "youtube": "https://www.youtube.com/watch?v=...",
        "deezer": "https://www.deezer.com/...",
        "soundcloud": "https://soundcloud.com/...",
        "amazon": "https://music.amazon.com/..",
        "tidal": "https://listen.tidal.com/...",
        "napster": "https://napster.com/...",
        "yandex": "https://music.yandex.ru/..."
    }
}
```

### Adding Covers

New covers should be added in full size to `static/covers/<ean>.jpeg`, where "full size" means the 3000x3000 version sent to stores.

The image file name *must* be the release EAN followed by `.jpeg`! 

The resizing then can be done by using the following commands:
```shell script
cd <path-to-covers>
magick mogrify -verbose -path md -resize 50% -quality 100 ./*.jpeg
magick mogrify -verbose -path sm -resize 50% -quality 100 md/*.jpeg
magick mogrify -verbose -path xs -resize 50% -quality 100 sm/*.jpeg
```

The images should also be optimized manually.
