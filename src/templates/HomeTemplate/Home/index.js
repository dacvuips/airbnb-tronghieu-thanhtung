import React from "react";
import Banner from "../components/Banner";
import HomeTool from "../components/HomeTool";

export default function Home() {
    return ( 
        <div style={{backgroundColor: 'black', height: '100px'}}>
            <HomeTool /> 
            <Banner/>
        </div>
    )
}