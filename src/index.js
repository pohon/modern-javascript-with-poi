import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import moment from 'moment';
import './styles/styles.scss';

const now = moment().format('dd MM YYYY');
const tomorrow = moment().add(1, 'd').format('dd MM YYYY');

// const content = `<div class="box"><p>Hari ini: ${now}, besok: ${tomorrow}</p></div>`;
// document.getElementById('app').innerHTML = content;


ReactDOM.render(
    <App now = {now} tomorrow = {tomorrow} />,
    document.getElementById('app')
);