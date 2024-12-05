export const MONTHS = {
  // Modification des clés dans les paires clé/valeur en commençant à 0
  // afin que l'index de MONTHS corresponde bien aux mois et s'affiche correctement dans les cartes d'événements.
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];
