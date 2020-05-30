import tracker from './tracker.js';

const TrackerLogic = tracker();

test('Build track pushes new track to tracks', () => {
  const logic = TrackerLogic;
  const sampleText = 'new track';
  logic.buildTrack(sampleText);
  expect(logic.tracks[3].text).toBe(sampleText)
})
