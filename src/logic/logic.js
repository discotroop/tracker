// do I need recursive layers?

// needs to hold tracks *
// needs to add new tracks *
// needs to add up tracks
    // add total tracks
    // sort by date
    // sort by lists
// needs to track time in tracks *

function Logic() {
    const tracks = [
      {
        text: "hi",
        lists: [],
        complete: false,
        date: {
            year: 2020,
            month: 5,
            day: 4
        }
      },
    ];
    function newTrack(trackText) {
        let newDate = new Date();
        let newYear = newDate.getFullYear();
        let newMonth = newDate.getMonth();
        let newDay = newDate.getDate();
      return {
        text: trackText,
        lists: [],
        complete: false,
        date: {
            year: newYear,
            month: newMonth,
            day: newDay
        }
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

export default Logic;