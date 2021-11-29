const renderHomepage = () => {
    const container = document.querySelector("#content");

    const home = document.createElement('div');
    home.innerHTML = `
    <div id="body">
        <div id="textContainer">
            <h1 id="captionOne">A New Take On Authentic Korean Food</h1>
            <button onclick="changePage()" id="secondMenu" class="btn">See The Menu</button>
            <p></p>
        </div>
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

    container.appendChild(home);
};

export { renderHomepage };