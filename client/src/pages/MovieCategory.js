import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Movies";
import { FaArrowCircleLeft } from "react-icons/fa";

function MovieCategory() {
  const [state, setState] = useState([]);
  useEffect(() => {
    API.getAllGenres()
      .then((res) =>
        setState(
          res.data.genres.map((res) => ({
            id: res.id,
            name: res.name,
            image:
              "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg",
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);
  function renderCategories() {
    return state.map((item) => {
      switch (item.name) {
        case "Action":
          item.image =
            "https://i0.wp.com/geekshizzle.com/wp-content/uploads/2013/09/desperado-explosion.jpg";
          break;
        case "Adventure":
          item.image =
            "https://img.redbull.com/images/c_crop,x_0,y_130,h_1878,w_2816/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2018/04/18/3defc76b-795c-4cfa-a005-c2fabd43f6fb/adventure-travel-cliff";
          break;
        case "Animation":
          item.image =
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e18a2828465323.55c16ef604e61.jpg";
          break;
        case "Comedy":
          item.image =
            "https://i1.wp.com/regroove.ca/brainlitter/wp-content/uploads/sites/2/2020/04/Simpsons.jpg?ssl=1";
          break;
        case "Crime":
          item.image =
            "https://cropper.watch.aetnd.com/images.history.com/images/media/video/history_weeds_omerta_sf_1153426/History_Weeds_Omerta_SF_still_624x352.jpg?w=1440";
          break;
        case "Documentary":
          item.image =
            "https://cdn.wallpaperhub.app/cloudcache/6/4/c/6/d/f/64c6dfbcd372ba06797c801be51c2546d9fa74c8.jpg";
          break;
        case "Drama":
          item.image = "https://i.ytimg.com/vi/HyDayfgkIw4/maxresdefault.jpg";
          break;
        case "Family":
          item.image =
            "https://essexchase.com/wp-content/uploads/2018/07/family.jpg";
          break;
        case "Fantasy":
          item.image =
            "https://theryanlanz.files.wordpress.com/2017/03/castle-2189498_640.jpg";
          break;
        case "History":
          item.image =
            "https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTU3ODc4NjAwMzAyMTQzMTk5/image-placeholder-title.jpg";
          break;
        case "Horror":
          item.image =
            "https://cutewallpaper.org/21/horror-movie-background/Backgrounds-Horror-Wallpaper-Cave.jpg";
          break;
        case "Music":
          item.image =
            "https://societyofrock.com/wp-content/uploads/2015/07/led-zeppelin-kashmir-live--735x413.jpg";
          break;
        case "Mystery":
          item.image =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/BigComboTrailer.jpg/300px-BigComboTrailer.jpg";
          break;
        case "Romance":
          item.image =
            "https://www.tasteofcinema.com/wp-content/uploads/2018/03/21HOBERMAN1-master1050-v2.jpg";
          break;
        case "Science Fiction":
          item.image =
            "https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2017/04/steele.jpg";
          break;
        case "TV Movie":
          item.image =
            "https://si.wsj.net/public/resources/images/BN-IW519_FAMILY_P_20150611124202.jpg";
          break;
        case "Thriller":
          item.image =
            "https://qph.fs.quoracdn.net/main-qimg-554e1464386010494eb30960dc6556df";
          break;
        case "War":
          item.image =
            "https://m.media-amazon.com/images/M/MV5BNGU0ZmYwNmUtMzc2Mi00ZjYxLWE2MjctY2Q1NjE1NmZiOTJiXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_CR0,28,540,304_AL_UX477_CR0,0,477,268_AL_.jpg";
          break;
        case "Western":
          item.image =
            "https://cdn.pixabay.com/photo/2019/05/23/09/29/western-4223481_960_720.jpg";
          break;
        default:
          item.image =
            "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
      }
      return (
        <CategoryCard
          key={item.id}
          name={item.name}
          image={item.image}
          link={"/moviecategory/" + item.id}
        />
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div
          className="jumbotron container"
          style={{
            backgroundColor: "white",
            paddingBottom: 0,
            marginBottom: 0,
          }}
        >
          <div className="mr-3 zoom1 mt-3" style={{ float: "left" }}>
            <Link style={{ color: "#f54c4c" }} to="/profile">
              <FaArrowCircleLeft size={40} />
            </Link>
          </div>
          <h1
            className="display-4"
            style={{ color: "#f54c4c", fontWeight: "bold" }}
          >
            Movie Genres
          </h1>
          <hr className="my-4" />
        </div>
      </div>
      <div className="col-sm-2"></div>
      <div className="row">{renderCategories()}</div>
    </div>
  );
}
export default MovieCategory;
