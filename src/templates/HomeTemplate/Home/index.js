import React from "react";
import Banner from "../components/Banner";
import HomeTool from "../components/HomeTool";
import Postcards from "../Postcards"

export default function Home() {
    return ( 
        <div style={{backgroundColor: 'black', height: '100px'}}>
            <HomeTool /> 
            <Banner/>
            <Postcards />
        </div>
    )
}