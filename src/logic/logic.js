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
    function formatDate(date) {
        let newDate = date;
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
        date: formatDate(new Date())
      }
    }
    function buildTrack(trackText) {
      tracks.push(newTrack(trackText))
    }
    function buildCalendar() {
        let today = new Date();
        const calendar = [];
        for (let i = 365; i > 0; i--) {
            calendar.push(
                { 
                    day: "day", 
                    date: formatDate(today)
                })
            today.setDate(today.getDate() - 1);
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