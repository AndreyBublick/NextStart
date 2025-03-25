import type {PropsWithChildren, ReactElement} from "react";
import type {NextPage} from "next";
import {Header} from "../Header/Header";


const Layout:NextPage<PropsWithChildren> =({children})=> {


    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    )
}
export const getLayout = (page: ReactElement)=> <Layout>{page}</Layout>;

export default Layout