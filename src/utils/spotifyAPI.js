const api = "https://api.spotify.com/v1/browse/featured-playlists"
const headers = {
  Accept: "application/json",
  Authorization: "",
  "Content-Type": "application/json"
}

export const getPlayLists = (country, limit, locale, timeStamp, offSet) =>
  fetch(`${api}?country=${country}&limit=${limit}&locale=${locale}&timestamp=${timeStamp}&offset=${offSet}`, {
    method:'GET',
    headers,
  })