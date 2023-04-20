import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import pro from './assets/images/icon-pro.svg';

export const plans = [
  {
    id: 0,
    type: 'Arcade',
    img: arcade,
    monthPrice: 9,
    yearPrice: 90,
  },
  {
    id: 1,
    type: 'Advanced',
    img: advanced,
    monthPrice: 12,
    yearPrice: 120,
  },
  {
    id: 2,
    type: 'Pro',
    img: pro,
    monthPrice: 15,
    yearPrice: 150,
  },
];

export const allServices = [
  {
    id: 0,
    name: 'Online Services',
    description: 'Access to multiplayer games',
    monthPrice: 1,
    yearPrice: 10,
    isChecked: false,
  },
  {
    id: 1,
    name: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    monthPrice: 2,
    yearPrice: 20,
    isChecked: false,
  },
  {
    id: 2,
    name: 'Customizable Profile',
    description: 'Custom theme on you profile',
    monthPrice: 2,
    yearPrice: 20,
    isChecked: false,
  },
];
