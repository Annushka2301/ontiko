const eventsListItem = document.querySelector('.main__events');

async function getEventsList() {
  return fetch(`https://conf.ontico.ru/api/conferences/forCalendar.json`).then(res => res.json()).then(res => {

    for (let event = 0; res.result.length > event; event++) {

      const eventItem = res.result[event];

      const eventCard = document.createElement('div');
      const eventDates = document.createElement('p');
      const eventLogo = document.createElement('img');
      const eventName = document.createElement('h2');
      const eventDescr = document.createElement('p');
      const eventBottom = document.createElement('div');
      const eventLocation = document.createElement('a');
      const eventLink = document.createElement('a');
      const buyTicket = document.createElement('button');
      const eventDetails = document.createElement('a');

      eventCard.classList.add('main__event');
      eventDates.textContent = eventItem.date_range;
      eventDates.classList.add('main__dates');
      eventLogo.src = eventItem.logo;
      eventLogo.alt = eventItem.name;
      eventLogo.classList.add('main__logo');
      eventName.textContent = eventItem.name;
      eventName.classList.add('main__name');
      eventDescr.textContent = eventItem.brief;
      eventDescr.classList.add('main__descr');
      eventBottom.classList.add('main__bottom');
      eventLocation.textContent = eventItem.location;
      eventLocation.classList.add('main__location');
      eventLink.textContent = eventItem.uri;
      eventLink.classList.add('main__link');
      eventLink.setAttribute('href', eventItem.uri);
      eventLink.setAttribute('target', '_blank');
      buyTicket.textContent = 'Купить билет';
      buyTicket.classList.add('main__buy-btn');
      eventDetails.textContent = 'Подробнее';
      eventDetails.classList.add('main__details');

      eventCard.append(eventDates);
      eventCard.append(eventLogo);
      eventCard.append(eventName);
      eventCard.append(eventDescr);
      eventCard.append(eventBottom);
      eventBottom.append(eventLocation);
      eventBottom.append(eventLink);
      eventBottom.append(buyTicket);
      eventBottom.append(eventDetails);
      eventsListItem.append(eventCard);

    };
  });
};


