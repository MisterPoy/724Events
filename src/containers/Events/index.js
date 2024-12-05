import { useState, useEffect } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialisation d'un hook useState pour créer une variable d'état qui gère
// les événements filtrés en fonction du type sélectionné, initialitement vide
  const [filteredEvents, setFilteredEvents] = useState();
  useEffect(() => {
    setFilteredEvents(
      // Filtrage des événements par type et pagination en fonction de la page actuelle
      (!type
        ? data?.events ?? [] // si aucun type n'est sélectionné, on prends tous les événements
        : data?.events.filter((event) => event.type === type) || [] // Si un type est sélectionné, on filtre par type
      ).filter((event, index) => {
        if (
          (currentPage - 1) * PER_PAGE <= index &&
          PER_PAGE * currentPage > index
        ) {
          return true;
        }
        return false;
      })
    );
  }, [type, data]);
 
  
  const changeType = (evtType) => {
    setCurrentPage(1);
    setType(evtType);
  };
  const pageNumber = Math.floor((filteredEvents?.length || 0) / PER_PAGE) + 1;
  const typeList = new Set(data?.events.map((event) => event.type));
  return (
    <>
      {error && <div>An error occured</div>}
      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)}
            onChange={(value) => (value ? changeType(value) : changeType(null))}
          />
          <div id="events" className="ListContainer">
            {Array.isArray(filteredEvents) && // ajout d'une condition pour vérifier que filteredEvents est bien initialisé et est bien un tableau
              filteredEvents.map((event) => (
                <Modal key={event.id} Content={<ModalEvent event={event} />}>
                  {({ setIsOpened }) => (
                    <EventCard
                      onClick={() => setIsOpened(true)}
                      imageSrc={event.cover}
                      title={event.title}
                      date={new Date(event.date)}
                      label={event.type}
                    />
                  )}
                </Modal>
              ))}
          </div>
          <div className="Pagination">
            {[...Array(pageNumber || 0)].map((_, n) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
