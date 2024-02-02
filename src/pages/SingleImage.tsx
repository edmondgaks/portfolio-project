import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface SingleImagePageProps {
}

const SingleImage: FC<SingleImagePageProps> = () => {
    const location = useLocation();
    const imageSrc = location.state?.image;

    useEffect(() => {
        // Do any additional setup or fetch data based on the imageSrc if needed
      }, [imageSrc]);
  return (
    <div>
      <h2>Single Image Page</h2>
      {imageSrc && <img src={imageSrc} alt="Single Image" />}
    </div>
  );
};

export default SingleImage;