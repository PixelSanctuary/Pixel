import PropTypes from 'prop-types';
import Link from 'next/link';

const Card = ({ heading, description, link, invertStyle }) => {
  return (
    <div className={`card-item flex flex-col border outline outline-2 outline-primary border-primary dark:bg-black rounded-lg shadow-lg shadow-black overflow-hidden ${invertStyle ? '' : '' }`}>
      <h2 className={`text-2xl font-semibold p-3 sm:px-6 ${invertStyle ? 'bg-black text-primary' : 'bg-primary text-black' }`}>{heading}</h2>
      <p className={ `p-4 sm:p-6 min-w-full grow ${invertStyle ? 'bg-primary text-black/80' : 'text-black/80 dark:text-white/80' }`}>{description}</p>
      {link && (
        <Link href={link} className="mt-4 inline-block text-primary hover:underline">
          Learn More
        </Link>
      )}
    </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string, // Optional link
  invertStyle: PropTypes.bool
};

Card.defaultProps = {
  link: '', // No link by default
  invertStyle: false
};

export default Card;
