import React from 'react'
import "./Widgets.css"
//fb widget is just an iframe from fb 
//An iFrame is an inline frame used inside a webpage to load another HTML document inside it
//its like a different webpage in the current page

function Widget() {
    return (
        <div className="widgets">          
            <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCodingTreeFoundation&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="100%"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media">     
            </iframe>
        </div>
    )
}

export default Widget
