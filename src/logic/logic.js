// do I need recursive layers?

// needs to hold tracks *
// needs to add new tracks *
// needs to add up tracks
    // add total tracks
    // sort by date
    // sort by lists
// needs to track time in tracks *
// need to build calendar

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
    function getToday() {
        let newDate = new Date();
        let newYear = newDate.getFullYear();
        let newMonth = newDate.getMonth();
        let newDay = newDate.getDate();
        return (
            {
                year: newYear,
                month: newMonth,
                day: newDay
            }
        )
    }
    function newTrack(trackText) {
      return {
        text: trackText,
        lists: [],
        complete: false,
        date: getToday()
      }
    }
    function buildTrack(trackText) {
      tracks.push(newTrack(trackText))
    }
    function buildCalendar() {
        const calendar = [];
        const today = getToday();
        for (let i = 365; i > 0; i--) {
            calendar.push("day")
        }
        return calendar;
    }
  return {
      tracks: tracks,
      buildTrack: buildTrack,
      calendar: buildCalendar(),
  }
}

export default Logic;