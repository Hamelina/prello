import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {

    caption: 'Manage yours projects with ease',
    header: 'Create, add and manage your team'
  },
  {
    caption: 'It maintains you updated on your cards',
    header: 'Download our mobile app'
  },
  {
    caption: 'And with the best services',
    header: 'It\'s all free'
  }
  
];

const FeaturesInfo = () => <UncontrolledCarousel ride={10} items={items} />;

export default FeaturesInfo;
