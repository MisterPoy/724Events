/* eslint-disable react/require-default-props */
// rajout d'un commentaires pour désactiver la règle esLint
// react/require-default-props
import PropTypes from "prop-types";

import "./style.scss";

// Les valeurs par défaut ont été déplacées des `defaultProps` vers les paramètres de la fonction
const ServiceCard = ({ imageSrc, imageAlt = "image", children }) => (
  <div className="ServiceCard">
    <div className="ServiceCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
    </div>
    <div className="ServiceCard__textContainer">{children}</div>
  </div>
);

ServiceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ServiceCard;
