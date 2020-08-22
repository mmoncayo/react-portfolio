import React from 'react';
import vault from '../assets/images/vault.png';
import planner from '../assets/images/planner.png';
import quiz from '../assets/images/quiz.png';
import job from '../assets/images/job.png';
import burger from '../assets/images/burger.png';
import loo from '../assets/images/loo.png';

import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Password Generator",
                    subTitle: "Randomized password generator",
                    imgSrc: vault,
                    link: "https://mmoncayo.github.io/PasswordGenerator/",
                    githubLink: 'https://github.com/mmoncayo/PasswordGenerator',
                    selected: false
                },
                {
                    id: 1,
                    title: "Work Day Planner",
                    subTitle: "9a-5p daily planner",
                    imgSrc: planner,
                    link: "https://mmoncayo.github.io/WorkDayPlanner/",
                    githubLink: 'https://github.com/mmoncayo/WorkDayPlanner',
                    selected: false
                },
                {
                    id: 2,
                    title: "Trivia Quiz",
                    subTitle: "Fun trivia quiz to test your knowledge",
                    imgSrc: quiz,
                    link: "https://mmoncayo.github.io/TriviaQuiz/",
                    githubLink: 'https://github.com/mmoncayo/TriviaQuiz',
                    selected: false
                },
                {
                    id: 3,
                    title: "New Job, New City",
                    subTitle: "Job & Weather search engine",
                    imgSrc: job,
                    link: "https://mmoncayo.github.io/Project1/jobcitysearch.html",
                    githubLink: 'https://github.com/mmoncayo/Project1',
                    selected: false
                },
                {
                    id: 4,
                    title: "Eat-Da-Burger!",
                    subTitle: "Customized burger menu",
                    imgSrc: burger,
                    link: "https://aqueous-forest-98399.herokuapp.com/",
                    githubLink: 'https://github.com/mmoncayo/burger',
                    selected: false
                },
                {
                    id: 5,
                    title: "Skip to the Loo!",
                    subTitle: "Bathroom locator when you're on the go",
                    imgSrc: loo,
                    link: "https://skip-to-the-loo.herokuapp.com/",
                    githubLink: 'https://github.com/alexastef/loo',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            )
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }

}

export default Carousel;