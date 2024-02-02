import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface SingleImagePageProps {
}

const SingleImage: FC<SingleImagePageProps> = () => {
    const location = useLocation();
    const imageSrc = location.state?.image;
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h2>Single Image Page</h2>
      <div className="max-h-[80vh]">
        {imageSrc && <img src={imageSrc} alt="Single Image" className="w-full h-[100%]" />}
      </div>
    </div>
  );
};

export default SingleImage;