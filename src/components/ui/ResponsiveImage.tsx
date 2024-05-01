import { ResponsiveImageProps } from '@/types/Types';
import Image from 'next/image'

export default function ResponsiveImage({imageSource} : ResponsiveImageProps) {
    // Style for the card
    const cardStyle = {
      maxWidth: '100%',  // Maximum width of the card
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',  // Optional: some shadow for better visibility
      borderRadius: '8px'  // Optional: rounded corners for aesthetics
    };
  
    return (
      <div style={cardStyle}>
        <Image
          alt="Mountains"
          src={imageSource}
          layout="responsive"
          width={16}
          height={9}
        />
      </div>
    )
  }