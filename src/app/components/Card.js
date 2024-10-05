import PropTypes from 'prop-types';
import Link from 'next/link';

const Card = ({ heading, description, link }) => {
  return (
    <div className="card-item border border-primary bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      <p className="mt-3 text-white/80">{description}</p>
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
};

Card.defaultProps = {
  link: '', // No link by default
};

export default Card;
