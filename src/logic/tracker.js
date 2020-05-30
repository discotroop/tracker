function TrackerLogic() {
    const tracks = [1, 2, 3];
    function newTrack(trackText) {
      return {
        text: trackText,
        lists: [],
        complete: false,
      }

    }
    function buildTrack(trackText) {
      tracks.push(newTrack(trackText))
    }
  return {
      tracks: tracks,
      newTrack: newTrack,
      buildTrack: buildTrack,
  }
}

export default TrackerLogic;
