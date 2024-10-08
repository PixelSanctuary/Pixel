import Link from 'next/link';
import PropTypes from 'prop-types';

export default function AnchorButton({ type = 'primary', link, text }) {
  // Dynamically assign a CSS class based on the button type
  let buttonClass = '';
  switch (type) {
    case 'secondary':
      buttonClass = 'secondary-style text-primary border-2 border-primary shadow-glow hover:shadow-primary'; // Example class for secondary type
      break;
    default:
      buttonClass = 'primary-style bg-primary border-2 border-primary text-black font-semibold shadow-glow hover:shadow-primary'; // Example class for primary type
  }

  return (
    <Link href={link} className={`${buttonClass} rounded-md px-4 py-2 text-lg smooth`}>
      {text}
    </Link>
  );
}

// Prop types to ensure proper usage
AnchorButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

AnchorButton.defaultProps = {
  type: 'primary',
};
