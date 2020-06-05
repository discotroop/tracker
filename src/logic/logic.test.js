import logic from './logic.js';

let TrackerLogic = logic();

// Tracks array methods
test('Build track pushes new track to tracks', () => {
  const logic = TrackerLogic;
  const sampleText = 'new track';
  logic.buildTrack(sampleText);
  expect(logic.tracks[1].text).toBe(sampleText)
})

// Date Creation
test('newTrack returns object with present year', () => {
    const logic = TrackerLogic;
    logic.buildTrack("testing year");
    let today = new Date();
    let year = today.getFullYear();
    expect(logic.tracks[1].date.year).toBe(year);
})
test('newTrack returns object with present month', () => {
    const logic = TrackerLogic;
    logic.buildTrack("testing month");
    let today = new Date();
    let month = today.getMonth();
    expect(logic.tracks[1].date.month).toBe(month);
})
test('newTrack returns object with present day', () => {
    const logic = TrackerLogic;
    logic.buildTrack("testing day");
    let today = new Date();
    let day = today.getDate();
    expect(logic.tracks[1].date.day).toBe(day);
})
test('pushing new track bumbs calendar count', () => {
    const logic = TrackerLogic;
    logic.tracks.length = 0;
    logic.buildTrack("testing calendar");
    logic.populateCalendar();
    expect(logic.calendar[0].tracks).toBe(1);
})