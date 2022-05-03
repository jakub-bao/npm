import datimApi from "../index";
import {testCredentials} from "./testCredentials.const";
import fetch from "node-fetch"
// @ts-ignore
global.fetch = fetch

test(`1 > getJson`,async ()=>{
    datimApi.registerTest(testCredentials.url,testCredentials.username,testCredentials.auth);
    let response:{id:string} = await datimApi.getJson(`/me`);
    expect(response.id.length).toBe(11);
})