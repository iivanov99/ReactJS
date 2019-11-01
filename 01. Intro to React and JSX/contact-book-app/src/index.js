import React from 'react';
import ReactDOM from 'react-dom';
import contacts from './contacts.json';
import './index.css';
import './App.css';

let selectedContactIndex = 0;

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

const handleContactClick = (contactIndex) => {
  selectedContactIndex = contactIndex;
  renderApp();
};

const Header = () => <header>&#9993; Contact Book</header>;

const Footer = () => <footer>Contact Book SPA &copy; 2017</footer>;

const Contact = (props) => {
  return (
    <div className="contact" data-id="id" onClick={() => handleContactClick(props.index)}>
      <span className="avatar small">&#9787;</span>
      <span className="title">{`${props.firstName} ${props.lastName}`}</span>
    </div>
  );
};

const Contacts = () => {
  return (
    <div id="list">
      <h1>Contacts</h1>
      <div className="content">
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            index={index}
            firstName={contact.firstName}
            lastName={contact.lastName}
          />
        ))}
      </div>
    </div>
  );
};

const Details = (props) => {
  return (
    <div id="details">
      <h1>Details</h1>
      <div className="content">
        <div className="info">
          <div className="col">
            <span className="avatar">&#9787;</span>
          </div>
          <div className="col">
            <span className="name">{contacts[props.index].firstName}</span>
            <span className="name">{contacts[props.index].lastName}</span>
          </div>
        </div>
        <div className="info">
          <span className="info-line">&phone; {contacts[props.index].phone}</span>
          <span className="info-line">&#9993; {contacts[props.index].email}</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <div id="book">
        <Contacts />
        <Details index={selectedContactIndex} />
      </div>
      <Footer />
    </div>
  );
};

renderApp();