import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./movie-details.module.css";
import noMovieImg from "../../img/no-poster-available.jpg";
import { getPersonDetails } from "../../shared/services/api";

const CastDetails = () => {
    const { castId } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getData = async () => {
        try {
          setLoading(true);
          const data = await getPersonDetails(castId);

          console.log(data)

          setData(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      getData();
    }, [castId]);
  
  
    const location = useLocation();
  
    const cameBack = location.state?.from ?? "/";
    
  
    return (
        <>
      <Link className={css.btn} to={cameBack}>
        Go Back
      </Link>
      {loading ? (
        "Loading..."
      ) : (
        <>
            <div className={css.imgWrap}>
                {data.profile_path ? (
                <img
                    className={css.img}
                    alt={data.name}
                    src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                />
                ) : (
                <img className={css.img} src={noMovieImg} alt="not available" />
                )}

                <div className={css.descrWrap}>
                <h1>
                    {data.name}
                </h1>
                <p className={css.descrTitle}>Biography</p>
                <p>{data.biography}</p>
                </div>
            </div>
        </>
    )}
    </>
    )
}

export default CastDetails;