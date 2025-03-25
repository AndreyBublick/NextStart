import {API} from "../../assets/api/api";
import type {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {getLayout} from "../../components/Layout/Layout";



export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters();
    return {
        props: {
            characters,
        }
    };
};

type Props = {
characters: ResponseType<CharacterType>;
};


const Characters = ({characters}:Props) => {
    const charactersList = characters.results.map(character => <CharacterCard   key={character.id} character={character} />
    )

    return  <PageWrapper>{charactersList && charactersList}</PageWrapper>

};
Characters.getLayout = getLayout;

export default Characters;