export default function Team() {
    return(
        <>
            <div>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        {/*
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        {/*
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    */}
        <title>React App</title>
        <style dangerouslySetInnerHTML={{__html: "\n      ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n\n      li {\n        float: left;\n      }\n\n      li a {\n        font-family: Montserrat, sans-serif;\n        display: block;\n        color: black;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n\n      li a:hover {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      .active {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      #block {\n        position:absolute;\n        width:100%;\n        padding:0;\n        margin:0;\n        top:0;\n        left:0;\n      }\n\n      .grid-container {\n        display: grid;\n        grid-template-columns: auto auto auto auto;\n        padding-left: 100px;\n        padding-right: 100px;\n        column-gap: 150px;\n        row-gap: 50px;\n      }\n      .grid-item {\n        font-size: 30px;\n        font-family: Montserrat, sans-serif;\n      }\n      " }} />
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" />
        <div id="block">
          <ul style={{paddingBottom: '40px'}}>
            <li><a href="/">Who Are We?</a></li>
            <li><a className="active" href="/team">Meet The Team</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#job opportunities">Job Opportunities</a></li>
          </ul>
          <div style={{fontSize: '36px', padding: '20px 10px', fontFamily: 'Montserrat, sans-serif', backgroundColor: '#C2E2FF'}}>Meet The Team</div>
          <div style={{padding: '5px'}} />
          <div style={{position: 'absolute', right: '0px', width: '40%', padding: '15px', backgroundColor: '#C2E2FF'}} />
          <div className="grid-container" style={{paddingTop: '100px'}}>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Grace Odunga</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Co-chair</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Al-Barr Ajiboye</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Co-chair</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Rahel Efrem</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Marketing Director</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Jordan Harpe</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Marketing Coordinator</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Salma Snur</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Finance Coordinator</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Danne Mohamed</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Logistics Coordinator</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Zen Kingsley</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Marketing Coordinator</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Somto Agbodjan</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>Marketing Coordinator</div>
            </div>
            <div className="grid-item">
              <div style={{borderRadius: '15px', backgroundColor: 'rgba(235, 235, 235, 1)', height: '150px'}} />
              <div style={{paddingTop: '10px'}}>Daniel Popoola</div>
              <div style={{fontSize: '20px', paddingTop: '5px'}}>First Year Rep</div>
            </div>
          </div>
          <div style={{padding: '20px'}} />
        </div>
      </div>
        </>
    )
}