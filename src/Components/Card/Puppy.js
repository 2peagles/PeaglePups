import React from 'react';
import './Puppy.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// import breezy from '../../Image/breezy.jpg';
// import Bailey from '../../Image/Bailey.jpg';
// import rocky from '../../Image/rocky.jpg';
// import frankie from '../../Image/frankie.jpg';
// import reese from '../../Image/reese.jpg';
// import charlie from '../../Image/charlie.jpg';


const slideImages =[ 
{
image: '../../Image/breezy.jpg',
  caption:'Slide 1'
},
  {
    url: 'https://i.scdn.co/image/ab6761610000e5eb80c7323d8b64397c278f86df',
    caption:'Slide 2'
  },
  {
    url:'../../Image/rocky.jpg',
    caption:'Slide 3'
  },
  {
    url: 'images/frankie.jpg',
    caption:'Slide 4'
  },
  {
    url: 'images/reese.jpg',
    caption:'Slide 5'
  },
  {
    url: '../../Images/charlie.jpg',
    caption:'Slide 6'
  },
];

export const Puppy = () => {
  return (
    <div className='slide-container' id='puppies'>
      <Slide>
        {slideImages.map((slideImage, index)=>(
          <div className='each-slide' key={index}>
              <div style={{ 'backgroundImage': `url(${slideImage.url} )` } }>
                <span>{slideImage.caption}</span>
              </div>
          </div>
      ))}
      </Slide>
    </div>
  )
}
