import React from 'react';
import { useSelector } from "react-redux"
import ResultBody from '../component/ResultBody';
import ResultHeader from '../component/ResultHeader';
import useGoogle from '../component/useGoogle';


function ResultPage() {
    const { name } = useSelector((state) => state.search);
    const { data } = useGoogle(name);
    return (
        <>
            <ResultHeader />
            <ResultBody data={data} />
        </>
    )
}

export default ResultPage