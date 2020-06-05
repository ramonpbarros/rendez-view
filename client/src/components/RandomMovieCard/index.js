import React, { useState, useEffect } from "react";
import API from "../../utils/API/Movies";

function RandomMovieCard(props) {
  const [trailer, setTrailer] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

  function fetchTrailer() {
    setShowModal(true);
    API.getMovieTrailer(props.id).then((res) => {
      setTrailer(`https://www.youtube.com/embed/${res.data.results[0].key}?autoplay=1&origin=http://localhost:3001`);
    });
  }

  return (
    <React.Fragment>
      <div className="col mb-4 mt-5">
        <div className="card h-100 border-dark">
          <img src={props.poster} className="card-img-top" alt="mealImg" />
          <div className="card-body">
            <h5 className="card-title">
              <strong>{props.title}</strong>
            </h5>
            <hr />
            <p>
              <strong>Plot:</strong>
            </p>
            <p>{props.plot}</p>
            <div className="col text-center">
              <button
                type="button"
                className="btn btn-custom btn-sm"
                onClick={fetchTrailer}
              >
                Trailer
              </button>
            </div>
            {showModal && (
              <React.Fragment>
                <div
                  className="modal show"
                  style={{ display: "block" }}
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                          {props.title}
                        </h5>
                        <button
                          type="button"
                          className="close"
                          onClick={() => {
                            setShowModal(false);
                          }}
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <iframe
                          id="ytplayer"
                          type="text/html"
                          width="100%"
                          height="300"
                          src={trailer}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-overlay"></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RandomMovieCard;
