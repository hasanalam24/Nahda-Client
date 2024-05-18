import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Ratings = () => {
    return (
        <div>
            <Rating
                style={{ maxWidth: 180 }}
                value={3}
                readOnly
            />
        </div>
    );
};

export default Ratings;