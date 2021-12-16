import React from 'react'

const PageNotFound = () => {


    return (
        <div>
            <body>
                <title>File Not Found</title>
                <div style={{ margin: "177px auto 0 auto", maxWidth: "1170px", padding: "0 15px 0" }} class="container text-center" id="error">
                    <svg height="100" width="100">
                        <polygon points="50,25 17,80 82,80" stroke-linejoin="round" style={{ fill: "none", stroke: "#ff8a00", strokeWidth: 8 }} />
                        <text x="42" y="74" fill="#ff8a00" font-family="sans-serif" font-weight="900" font-size="42px">!</text>
                    </svg>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-icon text-warning"><span class="uxicon uxicon-alert"></span></div>
                            <h1 style={{ fontSize: "48px", fontWeight: "300px", margin: "0 0 20px 0" }}>File not found (404 error)</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div style={{ marginLeft: "25%", width: "50%" }} class="col-md-6 col-md-push-3">
                            <p style={{ margin: "0 0 10px", fontSize: "21px", fontWeight: "200", marginBottom: "20px" }} class="lead">If you think what you're looking for should be here, please contact the site owner.</p>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    )
}

export default PageNotFound
