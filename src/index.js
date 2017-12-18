import moment from 'moment';

const now = moment().format('dd MM YYYY');
const tomorrow = moment().add(1, 'd').format('dd MM YYYY');
const content = `<p>Hari ini: ${now}, besok: ${tomorrow}</p>`;

document.getElementById('app').innerHTML = content;