import uuidv4 from 'uuid/v4';
import hotelResort from 'static/images/projects/hotel_resort_250.jpg';
import lambdaRestaurant from 'static/images/projects/lambda_restaurant_250.jpg';
import mishka from 'static/images/projects/mishka_250.jpg';
import nightiesStore from 'static/images/projects/nighties_store_250.jpg';
import restourantWhiteFish from 'static/images/projects/restourant_whiteFish_250.jpg';
import technomart from 'static/images/projects/technomart_250.jpg';
import todoListVue from 'static/images/projects/todo_list_vuejs_250.png';
import sunFoods from 'static/images/projects/sun_foods_250.jpg';
import hematologyUniversity from 'static/images/projects/hematology_university_250.png';
import chatSocketIo from 'static/images/projects/chat_socket_io_250.png';
import gymExercises from 'static/images/projects/gym_exercises_250.png';
import dotsGame from 'static/images/projects/dotsGame.jpg';

const data = [
  {
    id: uuidv4(),
    title: 'University of Hematology',
    description:
      'Created using React, React Router, Styled Components. Design is not mine.',
    imgSrc: hematologyUniversity,
    href: 'http://igt.in.ua/'
  },
  {
    id: uuidv4(),
    title: 'Dots Game',
    description: 'Created using React, Redux, Material-UI, Axios.',
    imgSrc: dotsGame,
    href: 'https://frayz17.github.io/dots-game/'
  },
  {
    id: uuidv4(),
    title: 'Hotel Resort',
    description:
      'Creating using react, react hooks, useContext, React Router libraries.',
    imgSrc: hotelResort,
    href: 'https://frayz17.github.io/hotel-resort/'
  },
  {
    id: uuidv4(),
    title: 'Nighties Store',
    description:
      'Online Store of pajamas and nighties wear. Written in WooCommerce.',
    imgSrc: nightiesStore,
    href: 'https://nighties.com.ua/'
  },
  {
    id: uuidv4(),
    title: 'Chat With socket.io',
    description:
      'Created using React, React Router, Material-UI, Express, Socket.io.',
    imgSrc: chatSocketIo,
    href: 'https://frayz17.github.io/chat-socket-io/#/'
  },
  {
    id: uuidv4(),
    title: 'Gym Exercises',
    description: 'Created using React (with hooks), Material-UI.',
    imgSrc: gymExercises,
    href: 'https://frayz17.github.io/gym-exercises/'
  },
  {
    id: uuidv4(),
    title: 'ToDo List',
    description:
      'Created using Vuejs, axios as http client and JSONPlaceholder API for data manipulation.',
    imgSrc: todoListVue,
    href: 'https://frayz17.github.io/todo-vue/'
  },
  {
    id: uuidv4(),
    title: 'Lambda Restourant',
    description:
      'HTML and CSS markup of this website was developed by me. The design was made by Oxygenna, designer agency from Crete, Greece.',
    imgSrc: lambdaRestaurant,
    href: 'https://frayz17.github.io/lambdaRestaurant/index.html'
  },
  {
    id: uuidv4(),
    title: 'White Fish Restorant',
    description:
      'HTML and CSS markup of this website was developed by me. The design was made by Michael Descharles, designer from Montreal, Canada',
    imgSrc: restourantWhiteFish,
    href: 'https://frayz17.github.io/Restaurant-White-Fish/'
  },
  {
    id: uuidv4(),
    title: 'Sun Foods',
    description:
      'HTML and CSS markup of this website was developed by me. Designed by makebecool web studio.',
    imgSrc: sunFoods,
    href: 'https://frayz17.github.io/sun-foods/'
  },
  {
    id: uuidv4(),
    title: 'Mishka',
    description:
      'HTML and CSS markup of this website was developed by me. The design was made by HTML Academy',
    imgSrc: mishka,
    href: 'https://frayz17.github.io/Mishka-magazine-htmlAcademy/'
  },
  {
    id: uuidv4(),
    title: 'Technomart',
    description:
      'HTML and CSS markup of this website was developed by me. The design was made by HTML Academy',
    imgSrc: technomart,
    href: 'https://frayz17.github.io/Technomart-magazine-htmlAcademy/'
  }
];

export default data;
