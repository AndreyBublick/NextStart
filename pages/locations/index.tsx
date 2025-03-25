import React from 'react';
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {dehydrate, useQuery} from "@tanstack/react-query";
import type {LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {QueryClient} from "@tanstack/query-core";
import {getLayout} from "../../components/Layout/Layout";


const getLocations =  () =>{
    return fetch(`https://rickandmortyapi.com/api/location`,{
        method:'GET'
    }).then(response => response.json());
};


export const getStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.fetchQuery(['location'],getLocations);

    return {
        props: {
                dehydratedState:dehydrate(queryClient)
        }
    };
};


const Locations = () => {

    const {data:locations} = useQuery<ResponseType<LocationType>>(['locations'],getLocations);

    if(!locations) return null
    const locationsList = locations.results.map(location => <div key={location.id}>
        {location.name}
    </div>)

    return  <PageWrapper>

        {locationsList && locationsList}
    </PageWrapper>
};


Locations.getLayout = getLayout;

export default Locations;