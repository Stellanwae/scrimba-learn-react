//write your first paragraph
// ReactDOM.render(
//     <h1>The first react line on my own</h1>, document.getElementById("root")
// )

//write a multiple line in react

// ReactDOM.render(
//     <ul>
//         <li>One</li>
//         <li>Two</li>
//         <li>Three</li>
//     </ul>,
//     document.getElementById("root")
// )

// writing a clear code in react using function

function NavBar() {
    return(
        <div className="nav-bar">
            <div className="logo-letter">
                <h1>GoOn</h1>
            </div>
            <ul className="ul-el">
                <li className="li-el">Home</li>
                <li className="li-el">About Us</li>
                <li className="li-el">Register</li>
            </ul>
        </div>
    )
}

function BodyArea() {
    return(
    <div className="main">
        <h1>Learning React</h1>
        <p>React is one of the frameworks of JS.
            So far, it seems really easy to grasp the concepts.
        </p>
        <h6>And to many years of React!</h6>
    </div>
    )
}


ReactDOM.render(
    <div>
        <NavBar />
        <BodyArea />
    </div>
    , document.getElementById("root")
)