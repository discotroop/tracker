import tracker from './tracker.js';

const TrackerLogic = tracker();

test('TrackerLogic links up', () => {
    const testTrack = TrackerLogic.tracks[0];
  expect(testTrack).toBe(1);
});
