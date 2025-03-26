import React from 'react';
import {getLayout} from "../../components/Layout/Layout";

type Props = {
    title:string,
};
const getStatickProps = ()=>{

const getParsedData = async () => {

};

        const title = '123';
        return {props:{title}}
};

 const Test= ({title}:Props) => {
    return (
        <div>
            {title}
        </div>
    );
};

Test.getLayout = getLayout;

export default Test;