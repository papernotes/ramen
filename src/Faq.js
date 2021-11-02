import React, { useEffect } from 'react';
import { Link} from "react-router-dom";
import ReactGA from 'react-ga';

function Faq() {
    useEffect(() => {
        ReactGA.initialize('UA-210961017-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, [])

    return(
        <div>
            <p>As a heads up, I do like strong/rich broths. A good egg will help.</p>
            <p>I usually check things out like: broth &gt; noodles &gt; chashu &gt; egg &gt; rest</p>
            <hr style={{width: '50vw', margin: 'auto'}}/>
            <br/>
            <div style={{margin: 'auto', width: '50%', textAlign: 'left'}}>
                <h4>Why are the reviews so vague/short?</h4>
                <p>I'm really bad at explaining flavors/food. A lot of these are quick notes I saved during the meal.</p>
                <h4>What does "yes" mean?</h4>
                <p>I'll say yes if you ask me to go there every time.</p>
                <h4>What does "try it" mean?</h4>
                <p>Try it out. There's something here that I liked . I wouldn't mind eating here, too.</p>
                <h4>What does "aite" mean?</h4>
                <p>It's good, it's alright, but I won't seek it out. I wouldn't mind eating here, though.</p>
                <h4>What does "nah" mean?</h4>
                <p>I'd prefer eating some place else.</p>
                <h4>Should I never eat at the "Nah" section?</h4>
                <p>No, you should still try it all. I'd be willing to go back to these places eventually.</p>
                <h4>How can you put RAMEN_PLACE in CATEGORY?!?</h4>
                <p>My bad, ignore that one.</p>
            </div>
            <Link to='/ramen'>home</Link>
        </div>
    )
}

export default Faq;