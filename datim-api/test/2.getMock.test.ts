import {datimApi} from "../index";

test(`2 > Get Mock`, async ()=>{
    datimApi.registerTest(`test`,'test','test');
    datimApi.mock.get(`/users/test`,{name: 'test'});
    let response = await datimApi.getJson(`/users/test`);
    expect(response).toStrictEqual({name: 'test'});
})