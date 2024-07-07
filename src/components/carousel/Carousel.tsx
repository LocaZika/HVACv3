'use client'
import Image from "next/image";
import Slider from 'react-slick';
import carouselStyle from './carousel.module.scss';

interface ICarousel {
  items: {_id: string; path: string}[],
  backdrop?: boolean,
  dots?: boolean,
  speed?: number,
}

export default function Carousel({items, backdrop, dots, speed}: ICarousel) {
  return (
    <Slider
      dots={dots ?? true}
      infinite={true}
      lazyLoad="ondemand"
      speed={speed ?? 1000}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={speed ?? 1000}
      arrows={false}
      className={!backdrop ? carouselStyle['container'] : `${carouselStyle['container']} ${carouselStyle['backdrop']}`}
    >
      {
        items.map(({_id, path}) => (
          <div key={_id} className={carouselStyle['slide']}>
            <Image src={`/imgs/cars/${path}`} alt='car image' priority fill sizes="100vw" />
           </div>
        ))
      }
    </Slider>
  )
}
