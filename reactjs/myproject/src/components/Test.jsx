import { useState, useEffect } from "react"
import '../assets/style.css'
function Test() {
    const [Film, setFilm] = useState([]);


    useEffect(() => {
        fetch("http://localhost/webapp/reactjs/restapi/rest.php")
            .then((res) => {
                // console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setFilm(data);
            });
    }, []);
    return (
        <div>
            {/* film data */}
            {/* ใช้ css grid ในการแสดงผลข้อมูล */}
            <div className="grid-container"> 
                {
                    Film.map((data, index) => (
                        <div className="grid-item">
                            {/* ดึงข้อมูลจาก Data มาแสดงผล */}
                        <ul key={index}>
                            <h2>{data.Title}</h2>
                            <p><strong>Year : </strong>  {data.Year}</p>
                            <p><strong>Directer : </strong>  {data.Director}</p>
                            <p><strong>Actors : </strong>  {data.Actors}</p>
                            <p><strong>Plot : </strong>  {data.Plot}</p>
                            <br></br>
                            <img src={data.Images[0]} width="300" height="200" />

                        </ul>
                        </div>
                    )
                    )

                }
            </div>
        </div>
    );
};

export default Test;
