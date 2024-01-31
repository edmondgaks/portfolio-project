import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import ArtComponent from './ArtComponent';

interface ArtsProps {
    images: string[]
}

const Arts: FC<ArtsProps> = ({images}) => {
    return <MaxWidthWrapper className="">
        {images.map((image, i) => <ArtComponent image={image} desc='4th-Dimension no.1' isMain={i === 3 || i === 10} />)}
    </MaxWidthWrapper>
}

export default Arts