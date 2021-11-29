const renderContactpage = () => {
    const container = document.querySelector("#content");

    const contact = document.createElement('div');
    contact.innerHTML = `
    <div id="contactBody">
        <h2>Contact Us</h2>
        <p id="contactInfoforpage">
            <u>Email</u><br>
            bipbap@gmail.com<br>
            <u>Fax</u><br>
            333-333-333
        </p>
        <p id="followInfoforpage">
            <u>Follow Us</u><br>
            Instagram<br>
            FaceBook<br>
            Twitter<br>
        </p>
    </div>
    <div id="footer">
        <p id="contactInfo">
            <u>Contact Us</u><br>
            bipbap@gmail.com<br>
            333-333-333
        </p>
        <p id="followInfo">
            <u>Follow Us</u><br>
            Instagram<br>
            FaceBook<br>
            Twitter<br>
        </p>
    </div>`;

    container.appendChild(contact);
};

export { renderContactpage };