import { useContext, useEffect, useState } from "react";
import * as rezepteService from '../../services/rezepteService';
import RezepteListItem from "./Rezepte-list-item/RezepteListItem";
import AuthContext from "../../context/authContext";

export default function RezepteListMy() {
  const { userId } = useContext(AuthContext);
  const [rezeptePosts, setRezeptePosts] = useState([]);
  useEffect(() => {
    rezepteService.getAllMyRezepte(userId)
      .then(result => setRezeptePosts(result));
  }, []);

  return (
    <><>
      {/* ##### Breadcumb Area Start ##### */}
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>Recipes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Breadcumb Area End ##### */}
      <>
        <section className="best-receipe-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">

                </div>
              </div>
            </div>
            <div className="row">

              {rezeptePosts.map(rezepte => (
                <RezepteListItem key={rezepte.id} {...rezepte} />
              ))}
            </div>
          </div>
        </section>
      </>

      {/* <!-- Display paragraph: If there is no posts  --> */}
      {rezeptePosts.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}

    </>
    </>
  )
}