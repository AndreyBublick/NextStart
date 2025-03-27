import {API} from "../../assets/api/api";
import type {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";
import {getLayout} from "../../components/Layout/Layout";
import type {GetStaticProps} from "next";

export const getServerSideProps:GetStaticProps = async ({ }) => {




    const episodes = await API.rickAndMorty.getEpisodes();
    if(!episodes){
       return  {
           notFound:true
       }
    }
    return {
        props: {
            episodes,
        }
    };
};

type Props = {
episodes: ResponseType<CharacterType>;
};


const Episodes = ({episodes}:Props) => {
    const episodesList = episodes.results.map(character => <Card name={character.name} key={character.id} />)

    return  <PageWrapper>

        {episodesList && episodesList}
    </PageWrapper>
};

Episodes.getLayout = getLayout;

export default Episodes;