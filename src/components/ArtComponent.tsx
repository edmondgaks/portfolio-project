import { FC, useRef } from 'react'
import { cn } from '../lib/utils'
import { useNavigate } from 'react-router-dom'

interface ArtComponentProps {
  image?: string,
  desc: string,
  isMain?: boolean
}

const ArtComponent: FC<ArtComponentProps> = ({image, desc, isMain=false}) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/gallery/single-image`, { state: { image } });
    };
    if (!image) return null
  return (
   <div onClick={handleClick} className={cn("h-92 rounded-md bg-white flex cursor-pointer flex-col", {"min-h-72 sm:col-span-2 cursor-pointer sm:row-span-2": isMain})}>
    <div className="h-full">
        <img ref={imgRef} src={image} alt="art" className='h-full w-full object-cover' />
    </div>
    <p className='text-black p-3 font-medium text-xs sm:text-base sm:font-semibold'>{desc}</p>
  </div>
  )
}

export default ArtComponent