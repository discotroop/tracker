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
            day: 4,
            dateString: 202054
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
    function setDateToString(formattedDate) {
        let yearString = formattedDate.year.toString();
        let monthString = formattedDate.month.toString();
        let dayString = formattedDate.day.toString();
        return yearString + monthString + dayString;
    }
    function newTrack(trackText) {
        let thisDate = formatDate(new Date());
        let thisDateString = setDateToString(thisDate);
      return {
        text: trackText,
        lists: [],
        complete: false,
        date: thisDate,
        dateString: thisDateString,
      }
    }
    function buildTrack(trackText) {
      tracks.push(newTrack(trackText))
    }
    function buildCalendar() {
        let today = new Date(); 
        const calendar = [];
        for (let i = 364; i > 0; i--) {
            let formattedDay = formatDate(today);
            let setToString = setDateToString(formattedDay);
            calendar.push(
                {  
                    date: formattedDay,
                    dateString: setToString,
                    count: 0,
                })
            today.setDate(today.getDate() - 1);
        }
    return calendar;
    }
    const Calendar = buildCalendar();

    function populateCalendar() {
        for (let i = 0; i < tracks.length; i++) {
        let trackDate = tracks[i].dateString;
        for (let j = 0; j < Calendar.length; j++) {
            if (trackDate === Calendar[j].dateString) {
                Calendar[j].count++;
            }
        }
        }
    }
    populateCalendar();
  return {
      tracks: tracks,
      buildTrack: buildTrack,
      calendar: Calendar,
      populateCalendar: populateCalendar,
  }
}

export default Logic;