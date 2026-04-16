import { AboutCards } from "./AboutCards";

function AboutCard({ resName, description, cusine, price, dinningLimt, dietary}) {

    return (
        <div>
            <h3 className="text-xl font-bold mb-2">Experience {resName}</h3>
            <p>{description}</p>

            <AboutCards cusine={cusine} price={price} dinningLimit={dinningLimt} dietary={dietary} />
        </div>
    );
}

export default AboutCard;