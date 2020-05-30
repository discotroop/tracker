function TrackerLogic() {
    const tracks = [
      {
        text: "hi",
        lists: [],
        complete: false,
      },
      {
        text: "hello",
        lists: [],
        complete: false,
      },
      {
        text: "bonsoir",
        lists: [],
        complete: false,
      }
    ];
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
