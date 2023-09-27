const Karl = () => {
    return(
        <>
            <div>
            <h2>Karl-Aleksander Vask</h2>
            <text>Minu huvid:</text>
            <ol>
                <li>Karate</li>
                <li>Programmeerimine</li>
                <li>Jõusaal</li>
                <li>Anime</li>
                <li>Arvutimängud</li>
                <li>Legod</li>
                <li>Purjetamine</li>
                <li>Sulepead</li>
                <li>Ajalugu</li>
                <li>Linux</li>
                <li>Kirjutamine</li>
                <li>Võitluskunstid</li>
            </ol>
            <form>
                <label htmlFor="Name">Nimi </label>
                <input id="Name"/>
                <label htmlFor="Email">E-mail </label>
                <input type="email" id="Email"/>
                <br/>
                <label htmlFor="Message">Sõnum</label>
                <textarea id="Message" rows="5" cols="50"/>
                <input type="Submit" value="Submit"/>
            </form>
            <div>
                <button>Click here!</button>
            </div>
            </div>
        </>
    )
}

export default Karl