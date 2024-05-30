import NavMenu from "./Components/NavMenu";
import { Card } from "react-bootstrap";
import pict from "../App/Images/logo192.png"

function Profile() {
    return (
        <>
            <NavMenu />
            <Card>
                <Card.Body style={{ textAlign: "center" }}>
                    <h4 style={{ marginBottom: 50 }}>MY PROFILE</h4>
                    <img src={pict} alt="profil"/>
                    <Card.Title style={{ marginTop:25 }}>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default Profile