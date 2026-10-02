import "./Footer.css";

function Footer({ storeName, address, phone, email }) {
    return (
        <footer>
            <h2>{storeName}</h2>
            <p>{address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </footer>
    );
}

export default Footer;