import { StaticImageData } from "next/image";

export interface ResponsiveImageProps {
    imageSource: StaticImageData;
  }
  
  export interface MilletCardProps {
    imageSource: StaticImageData;
    title: string;
    description: string;
    isComingSoon: boolean;
    slug: string;
  }