/* eslint-disable react/require-default-props */
// rajout d'un commentaires pour désactiver la règle esLint
// react/require-default-props
import PropTypes from "prop-types";

import "./style.scss";

// Les valeurs par défaut ont été déplacées des `defaultProps` vers les paramètres de la fonction
const PeopleCard = ({ imageSrc, imageAlt = "", position, name }) => (
  <div className="PeopleCard">
    <div className="PeopleCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
    </div>
    <div className="PeopleCard__descriptionContainer">
      <div className="PeopleCard__name">{name}</div>
      <div className="PeopleCard__position">{position}</div>
    </div>
  </div>
);

PeopleCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default PeopleCard;
