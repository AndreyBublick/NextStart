import {API} from "../../assets/api/api";
import type {CharacterType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {getLayout} from "../../components/Layout/Layout";

import type {GetStaticProps} from "next";
import {useRouter} from "next/router";

export const getStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters();

    const paths = results.map(path => ({
        params: {id: (path.id).toString()},
    }))

    return {
        paths,
        fallback: true,/*false*//*blocking*//*true*/
    }

};
export const getStaticProps: GetStaticProps = async ({params}) => {

    const id = params?.id;
    const character = await API.rickAndMorty.getCharacter(id as string);


    if (!character) return {notFound: true}

    return {
        props: {character}
    }


    /* const {id} = params || {};

     const character = await API.rickAndMorty.getCharacter(id as string)

     if(!character) return {notFound: true}

     return {
         props:{
             character
         }
     }*/

};

type Props = {
    character: CharacterType;
};


const Character = ({character}: Props) => {

    const router = useRouter();
    /*if (!character) return null*/
    if (router.isFallback) return <h1 style={{fontSize:'100px',color:'red'}}>loading...</h1>

    const onClickHandler = () => {
        router.push(`/characters`);
    };

    return <PageWrapper>
        <div>ID:{router.query.id}</div>
        {character && <CharacterCard character={character}/>}
        <button onClick={onClickHandler}>GO</button>
    </PageWrapper>

};
Character.getLayout = getLayout;

export default Character;