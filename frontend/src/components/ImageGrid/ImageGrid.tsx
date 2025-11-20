import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ImageGrid.css";

const ImageGrid: React.FC = () => {
  return (
    <div className="image-grid-container">
      <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fHww" />
          <Card.Body>
            <Card.Title>Sports</Card.Title>
            <Card.Text>
              Coverage of athletic competitions, teams, athletes, and major sporting events worldwide.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?_gl=1*b0b1iy*_ga*MTA1OTIxNDU0My4xNzYzNTcwMjg2*_ga_8JE65Q40S6*czE3NjM2NTA5NTckbzIkZzEkdDE3NjM2NTA5NjMkajU0JGwwJGgw" />
          <Card.Body>
            <Card.Title>Technology</Card.Title>
            <Card.Text>
              Breakthroughs, innovations, gadgets, and trends shaping the digital and tech landscape.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" />
          <Card.Body>
            <Card.Title>Health</Card.Title>
            <Card.Text>
              Insights into medical advancements, wellness, diseases, and personal well-being practices.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D" />
          <Card.Body>
            <Card.Title>Entertainment</Card.Title>
            <Card.Text>
              News on movies, music, celebrities, TV shows, and pop culture phenomena.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D" />
          <Card.Body>
            <Card.Title>Business</Card.Title>
            <Card.Text>
              Updates on markets, companies, economies, and global financial trends.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D" />
          <Card.Body>
            <Card.Title>Science</Card.Title>
            <Card.Text>
              Discoveries, research, and explanations of natural phenomena and scientific progress.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default ImageGrid;
