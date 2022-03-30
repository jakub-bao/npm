import React, {useState} from "react";
import {render} from "@testing-library/react";
import {noText, text, textWait} from "../../modules/text.utils";
import {toAsyncFail} from "../shared/shared.testService";

const pageDelay = 500;
const textContent = 'content delivered';

function Page(){
    let [content,setContent] = useState(false);
    if (!content) setTimeout(()=>setContent(true),pageDelay);
    if (!content) return <>Waiting for content</>
    else return <>{textContent}</>
}

test(`5 > Text wait`, async ()=>{
    render(<Page/>);
    text('Waiting for content');
    noText(textContent);
    await textWait(textContent)
    text(textContent);
})

test(`5 > Text wait should fail`, async ()=>{
    render(<Page/>);
    text('Waiting for content');
    await toAsyncFail(async ()=>await textWait('unexpected content'));
})