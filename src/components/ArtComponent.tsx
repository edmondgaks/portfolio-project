import { FC, useRef } from 'react'
import { cn } from '../lib/utils'

interface ArtComponentProps {
  image?: string,
  desc: string,
  isMain?: boolean
}

const ArtComponent: FC<ArtComponentProps> = ({image, desc, isMain=false}) => {
    const imgRef = useRef<HTMLImageElement | null>(null)

    if (!image) return null
  return <div className={cn("h-92 rounded-md bg-white flex flex-col", {"min-h-72 sm:col-span-2 sm:row-span-2": isMain})}>
    <div className="h-full">
        <img ref={imgRef} src={image} alt="art" className='h-full w-full object-cover' />
    </div>
        
    <p className='text-black p-3 font-medium text-xs sm:text-base sm:font-semibold'>{desc}</p>
  </div>
}

export default ArtComponent