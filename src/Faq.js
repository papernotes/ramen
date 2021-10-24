import React from 'react';
import { Link } from "react-router-dom";

function Faq() {
    return(
        <div>
            <br/>
            <p>As a heads up, I do like strong/rich broths. A good egg will help.</p>
            <p>I usually check things out like: broth &gt; noodles &gt; chashu &gt; egg &gt; rest</p>
            <hr style={{width: '50vw', margin: 'auto'}}/>
            <br/>
            <h3>What does "aite" mean?</h3>
            <p>It's good, it's alright, but I won't seek it out. I won't mind eating here though</p>
            <h3>What does "yes" mean?</h3>
            <p>I'll say yes to going there every time</p>
            <h3>What does "try it" mean?</h3>
            <p>Try it out. There's something here that I liked. I won't mind eating here too.</p>
            <h3>What does "nah" mean?</h3>
            <p>I'd prefer eating some place else.</p>
            <h3>Should I never eat at the "Nah" section?</h3>
            <p>No, you should still try it all. I'd be willing to eat at these places eventually</p>
            <h3>How can you put RAMEN_PLACE in CATEGORY?!?</h3>
            <p>My bad, ignore that one</p>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default Faq;