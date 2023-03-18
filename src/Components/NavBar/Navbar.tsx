export default function NavBarVue() {
    return (
        <>
            <div className={"navbar-left"}>
                <div className="navbar-left__header">
                    <h1>FlashCard</h1>
                </div>
                <div className="navbar-left__body">
                    <ul>
                        <li><a href="/stats">Statistics</a></li>
                        <li><a href="/groups">Groups</a></li>
                        <li><a href="/cards">Cards</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}