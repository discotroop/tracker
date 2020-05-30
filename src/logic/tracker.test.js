import tracker from './tracker.js';

const TrackerLogic = tracker();

test('TrackerLogic links up', () => {
    const testTrack = TrackerLogic.tracks[0];
  expect(testTrack).toBe(1);
});

test('Build track pushes new track to tracks', () => {
  const logic = TrackerLogic;
  const sampleText = 'new track';
  logic.buildTrack(sampleText);
  expect(logic.tracks[3].text).toBe(sampleText)
})
