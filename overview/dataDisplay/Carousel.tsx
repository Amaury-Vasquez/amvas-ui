import { Carousel } from '@/components';

const images: string[] = [
  'https://i.imgur.com/RTKfmvx.png',
  'https://i.imgur.com/PBdg8dB.png',
  'https://i.imgur.com/r9uzjUf.png',
];

export const CarouselOverview = () => <Carousel images={images} />;
