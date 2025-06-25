import React from 'react';

const dummyReels = [
  { videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { videoUrl: 'https://www.w3schools.com/html/movie.mp4' }
];

function Reels() {
  return (
    <div className="p-3">
      <h2>Reels</h2>
      {dummyReels.map((reel, index) => (
        <video key={index} width="100%" height="400" controls src={reel.videoUrl} className="mb-3" />
      ))}
    </div>
  );
}

export default Reels;
