import { Container, Row, Col } from "react-bootstrap";

export default function ListingDetails(props) {
  return (
    <>
      <Container>
        <Row>
          <Col lg>
            <img
              onError={(event) => {
                event.target.onerror = null; // Remove the event handler to prevent infinite loop
                event.target.src = 
                  "https://placehold.co/600x400?text=Photo+Not+Available";
              }}
              className="img-fluid w-100"
              src={props.listing.images.picture_url 
                    ? props.listing.images.picture_url 
                    : "https://placehold.co/600x400?text=Photo+Not+Available"}
              alt="Listing Image"
            />
            <br />
            <br />
          </Col>
          <Col lg>
            <div>
              {props.listing.neighborhood_overview 
                && <p>{props.listing.neighborhood_overview}</p>}
            </div>
            <b>Price:</b> ${parseFloat(props.listing.price).toFixed(2)}<br />
            <b>Room:</b> {props.listing.room_type}<br />
            <strong>Bed:</strong> Real Bed (1)<br /><br />
            <strong>Rating:</strong> 99/100 (291 Reviews)<br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}