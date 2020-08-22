import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import bio from '../assets/images/bio.jpg';
import '../index.css';


function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <center>
            <img src={bio} alt="bio" className="bio"/>
            </center>
            <Hero subTitle={props.subTitle} />

            <Content>
                <p>
                    Hello! My name is Matt Moncayo and I've lived in Southern California my whole life. I'm originally from the city
                    of Oxnard just South of Santa Barbara and went to UC San Diego for my undergrad so needless to say I am really content with the
                    mild climate, clear skies, and on average 75 degree weather year round we get.
          </p>
                <p>
                    I currently work in Telecom as an RF Engineer designing and creating coverage solutions for the major carriers for the last 7 years, and
                    for most people, I say I'm like the guy in those old Verizon commercials that said, "Can you hear me now? Good."
                    As we approach the era of 5G, my hope is that when I master becoming a full stack web developer I can combine these skills with
                    my current background to approach the high-end stakes that this new revolution of technology will reach from both a software and hardware perspective.
          </p>
                <br />
                <p>
                    I've been in San Diego for a bit over 10 years now and still enjoy every minute of it. In my downtime I
                    like to go running and generally be outdoors- or you'd find me building puzzles to pass the time. I am a big fan of IPAs and love social hangouts.
                    A little fun fact about me is that I'm born on Cinco de Mayo and being raised in a Mexican household has led me to have the ultimate celebration on May 5th
                    every year.
          </p>
                <br />
                <p>
                    If you're interested in learning more about me or have any general questions to ask me, please feel free to reach out and I'd be happy to connect some time!
          </p>
            </Content>

        </div>
    )

}

export default HomePage;