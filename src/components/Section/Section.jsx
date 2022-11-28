import PropTypes from 'prop-types';
import './Section.css';
const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className="Title">{title}</h1>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
