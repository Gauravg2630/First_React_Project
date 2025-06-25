import React from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';

const dummyStories = [
  { image: image1, username: 'user1' },
  { image: image2, username: 'user2' },
];

function Stories() {
  return (
    <div className="d-flex p-2 overflow-auto">
      {dummyStories.map((story, index) => (
        <div key={index} className="text-center mx-2">
          <img src={story.image} alt="story" width={80} height={80} style={{ borderRadius: '50%' }} />
          <p>{story.username}</p>
        </div>
      ))}
    </div>
  );
}
export default Stories;