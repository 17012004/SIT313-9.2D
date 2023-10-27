import React from 'react';
import './ArticlePic.css';
import ArticleAuthor from './articleauthor';
import ArticleInfo from './articleinfo';
import ArticleName from './articlename';
import { faker } from '@faker-js/faker'; 


const Data = [
  {
    name: 'Junior',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit. ',
    author: 'Justin Bieber',
    imageURL: faker.image.image() 
  },
  {
    name: 'Senior',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
    author: 'Taylor Swift',
    imageURL: faker.image.image() 
  },
  {
    name: 'Original Gangster',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
    author: 'The Weeknd',
    imageURL: faker.image.image() 
  },
];

const ArticlePic = () => {
  
  return (
    <>
      <div className="articlephotos">
        {Data.map((article, index) => (
          <div key={index} className="imagedesc1">
            <img src={article.imageURL} alt={article.name} className="photo" />
            <ArticleName name={article.name} />
            <ArticleInfo description={article.description} />
            <ArticleAuthor author={article.author} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlePic;
