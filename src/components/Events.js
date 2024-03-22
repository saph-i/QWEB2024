export default function Events() {
    return(
        <div>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
        <style dangerouslySetInnerHTML={{__html: "\n      ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n\n      li {\n        float: left;\n      }\n\n      li a {\n        font-family: Montserrat, sans-serif;\n        display: block;\n        color: black;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n\n      li a:hover {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      .active {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      #grad1 {\n        position:absolute;\n        padding:0;\n        margin:0;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 350px;\n        background-color: #C2E2FF; /* For browsers that do not support gradients */\n        background-image: linear-gradient(to right, #C2E2FF , #F6F7F8);\n      }\n\n      .grid-container {\n        display: grid;\n        grid-template-columns: auto auto auto;\n        column-gap: 150px;\n        row-gap: 50px;\n        justify-content: center;\n      }\n      .grid-item {\n        font-size: 30px;\n        font-family: Montserrat, sans-serif;\n        border-radius: 15px;\n        background-color: rgba(235, 235, 235, 0.75);\n        width:400px;\n      }\n      " }} />
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" />
        <div id="grad1">
          <ul style={{paddingBottom: '40px'}}>
            <li><a href="/">Who Are We?</a></li>
            <li><a href="/team">Meet The Team</a></li>
            <li><a className="active" href="/events">Events</a></li>
            <li><a href="/jobboard">Job Opportunities</a></li>
          </ul>
          <div style={{fontSize: '64px', paddingTop: '20px', paddingLeft: '10px', fontFamily: 'Montserrat, sans-serif'}}>Upcoming</div>
          <div style={{fontSize: '64px', paddingLeft: '10px', fontFamily: 'Montserrat, sans-serif'}}>Events!</div>
          <div className="grid-container" style={{paddingTop: '150px'}}>
            <div className="grid-item">
              <div style={{paddingLeft: '20px', paddingTop: '30px', fontWeight: 'bold'}}>QUIZ &amp; CUISINE</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '15px'}}>[TRIVIA AND NIGERIAN FOOD]</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '30px'}}>Get ready to test your trivia skills and indulge in a night of fun, food, and fantastic prizes with us!</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '40px'}}>Location</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '5px', fontWeight: 'bold'}}>CASLAB (Goodwin Hall)</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '30px'}}>Hours</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '30px', fontWeight: 'bold'}}>7PM</div>
            </div>
            <div className="grid-item">
              <div style={{paddingLeft: '20px', paddingTop: '30px', fontWeight: 'bold'}}>QUIZ &amp; CUISINE</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '15px'}}>[TRIVIA AND NIGERIAN FOOD]</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '30px'}}>Get ready to test your trivia skills and indulge in a night of fun, food, and fantastic prizes with us!</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '40px'}}>Location</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '5px', fontWeight: 'bold'}}>CASLAB (Goodwin Hall)</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '30px'}}>Hours</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '30px', fontWeight: 'bold'}}>7PM</div>
            </div>
            <div className="grid-item">
              <div style={{paddingLeft: '20px', paddingTop: '30px', fontWeight: 'bold'}}>STAY TUNED</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '15px'}}>[MORE EVENTS SOON]</div>
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '30px'}} />
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '40px'}} />
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '5px', fontWeight: 'bold'}} />
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '30px'}} />
              <div style={{fontSize: '20px', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '30px', fontWeight: 'bold'}} />
            </div>
          </div>
          <div style={{padding: '20px'}} />
        </div>
      </div>
    )
}