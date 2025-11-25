import './CardSkeleton.css';

const CardSkeleton = () => {
    return (
        <div className="card-skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;