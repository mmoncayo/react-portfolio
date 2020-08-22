import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Matt Moncayo",
      headerLinks: [
        { title: "Home", path: '/' },
        { title: "Portfolio", path: '/portfolio' },
        { title: "Contact", path: '/contact' }
      ],
      home: {
        title: "Hey there, I'm Matt.",
        subTitle: "A bit about me:"
      },
      portfolio: {
        title: "Check these out.",
        subTitle: "Some of the projects I've been working on:"
      },
      contact: {
        title: "Let's chat."
      }
    }
  }

  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border bottom" bg="transparent" expand="lg">
            <Navbar.Brand className="nav-link" to="/">M. Moncayo</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render= {() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
          <Route path="/about" render= {() => <About title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
          <Route path="/portfolio" render= {() => <Portfolio title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} />} />
          <Route path="/contact" render= {() => <Contact title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );

  }

}

export default App;
