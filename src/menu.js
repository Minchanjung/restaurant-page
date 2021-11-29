const renderMenupage = () => {
    const container = document.querySelector("#content");

    const menu = document.createElement('div');
    menu.innerHTML = 
    `
    <div id="menuBody">
        <div id="itemOne">
            <h3>BibimBap</h3>
            <p>Bibimbap is served as a bowl of warm white rice topped with namul or kimchi and gochujang</p>
        </div>
        <div id="itemTwo">
            <h3>Ttoekboekki</h3>
            <p>tteokbokki-tteok, Eomuk, boiled eggs, and scallions</p>
        </div>
        <div id="itemThree">
            <h3>Bulgogi</h3>
            <p>thin, marinated slices of beef or pork grilled on a barbecue or on a stove-top griddle</p>
        </div>
        <div id="itemFour">
            <h3>SoonDubu</h3>
            <p>Stew made with freshly curdled soft tofu, vegetables, mushrooms, onion, and optional seafood</p>
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

    container.appendChild(menu);
};

export { renderMenupage };