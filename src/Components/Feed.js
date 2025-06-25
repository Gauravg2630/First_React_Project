import React from 'react';
import { Card } from 'react-bootstrap';
import image1 from './image1.jpg';
import image2 from './image2.jpg';


const posts = [
  { id: 1, username: 'Gaurav1', image: image1, caption: 'Nice day!' },
  { id: 2, username: 'Gaurav2', image: image2, caption: 'Loving this vibe!' },
];

function Feed() {
  return (
    <div className="feed p-3">
      {posts.map(post => (
        <Card key={post.id} className="mb-3">
          <Card.Header>{post.username}</Card.Header>
          <Card.Img variant="top" src={post.image} height={400} width={200} />
          <Card.Body>
            <Card.Text>{post.caption}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Feed;
