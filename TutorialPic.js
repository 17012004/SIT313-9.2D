import React from 'react';
import './TutorialPic.css'; 
import ArticleName from './articlename';
import ArticleDescription from './articleinfo';
import ArticleContent from './articleauthor';
import { faker } from '@faker-js/faker';

const tutorialData = [
  {
    name: 'How to live ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit',
    author: 'Sussy Baka',
    imageURL: faker.image.image(), 
  },
  {
    name: 'How to die',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
    author: 'Geneva',
    imageURL: faker.image.image(), 
  },
  {
    name: 'How to love',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit',
    author: 'lovetooth',
    img: faker.image.image(),
    imageURL: faker.image.image(), 
  },
  
];

const TutorialPic = () => {
  return (
    <>
      <h2 className="titletext">FEATURED TUTORIALS</h2>
      <div className="tutorialphotos">
        {tutorialData.map((tutorial, index) => (
          <div key={index} className="imagedesc">
            <img src={tutorial.imageURL} alt={tutorial.name} className="photo" />
            <ArticleName name={tutorial.name} />
            <ArticleDescription description={tutorial.description} />
            <ArticleContent author={tutorial.author} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TutorialPic;