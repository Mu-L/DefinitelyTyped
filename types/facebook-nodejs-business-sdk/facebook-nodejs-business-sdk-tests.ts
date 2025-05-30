import {
    AdAccount,
    Content,
    CustomData,
    EventRequest,
    FacebookAdsApi,
    ServerEvent,
    UserData,
    IGUser,
    InstagramInsightsResult,
    AppData,
    ExtendedDeviceInfo,
    AbstractCrudObject,
    AdSet,
    Campaign,
    AdsPixel,
    AdCreative,
    Ad
} from 'facebook-nodejs-business-sdk';
import { FacebookRequestError } from 'facebook-nodejs-business-sdk/src/exceptions';
import TEventRequest from "facebook-nodejs-business-sdk/src/objects/serverside/event-request";
import BusinessDataApiUserData from "facebook-nodejs-business-sdk/src/objects/serverside/user-data";
import AttributionData from "facebook-nodejs-business-sdk/src/objects/serverside/attribution-data";

async function testGetAdsFetchFirstPageFalse(): Promise<Array<Record<string, string>>> {
    const ads = [];

    const fbAdsApi = new FacebookAdsApi('TOKEN');
    fbAdsApi.setDebug(true);

    const fbAdAccount = new AdAccount(`act_ID`, {}, undefined, fbAdsApi);
    const cursor = await fbAdAccount.getAds(['id', 'name'], { limit: 10 }, false);

    while (cursor.hasNext()) {
        await cursor.next();

        for (const response of cursor) {
            ads.push({
                id: response.id,
                name: response.name,
            });
        }
    }

    return ads;
}

async function testGetAdsFetchFirstPageDefault(): Promise<Array<Record<string, string>>> {
    const ads = [];

    const fbAdsApi = new FacebookAdsApi('TOKEN');
    fbAdsApi.setDebug(true);

    const fbAdAccount = new AdAccount(`act_ID`, {}, undefined, fbAdsApi);
    const cursor = await fbAdAccount.getAds(['id', 'name'], { limit: 10 });

    while (true) {
        for (const response of cursor) {
            ads.push({
                id: response.id,
                name: response.name,
            });
        }

        if (cursor.hasNext()) {
            await cursor.next();
        } else {
            break;
        }
    }

    return ads;
}

async function testGetAdsFetchFirstPageBoolean(): Promise<Array<Record<string, string>>> {
    const ads = [];

    const fbAdsApi = new FacebookAdsApi('TOKEN');
    fbAdsApi.setDebug(true);

    const fbAdAccount = new AdAccount(`act_ID`, {}, undefined, fbAdsApi);
    const fetchFirstPage = Math.random() > 0.5;
    const cursorOrPromise = fbAdAccount.getAds(['id', 'name'], { limit: 10 }, fetchFirstPage);
    const cursor = cursorOrPromise instanceof Promise ? await cursorOrPromise : cursorOrPromise;

    while (true) {
        if (!fetchFirstPage) {
            await cursor.next();
        }

        for (const response of cursor) {
            ads.push({
                id: response.id,
                name: response.name,
            });
        }

        if (cursor.hasNext()) {
            await cursor.next();
        } else {
            break;
        }
    }

    return ads;
}

async function checkType() {
    const fbAdsApi: FacebookAdsApi = new FacebookAdsApi('TOKEN');
    const fbAdAccount: AdAccount = new AdAccount(`act_ID`, {}, undefined, fbAdsApi);
}

async function testConversionEvent(): Promise<TEventRequest> {
    const userData = (new UserData())
        .setEmails(['joe@eg.com'])
        .setPhones(['12345678901', '14251234567']);

    const content = new Content();

    const customData = (new CustomData())
        .setContents([content]);
    const extendedDeviceInfo = new ExtendedDeviceInfo();
    const appData = new AppData();

    const serverEvent = (new ServerEvent())
        .setEventName('Purchase')
        .setEventTime(123)
        .setUserData(userData)
        .setCustomData(customData);

    const eventsData = [serverEvent];
    const eventRequest = (new EventRequest('access_token', 'pixel_id'))
        .setEvents(eventsData);
    return eventRequest;
}

throw new FacebookRequestError({}, 'GET', 'url', 'data');

async function checkStaticFields() {
    const fields = [IGUser.Fields.biography, IGUser.Fields.follows_count];
    const metrics = [InstagramInsightsResult.Metric.reach, InstagramInsightsResult.Metric.shares];
}

export function testAbstractCrudObjectClassConstructor () {
    const abstractCrudObject =  new AbstractCrudObject();
    const abstractCrudObject2 =  new AbstractCrudObject('some-id');
}

export function testDeleteFunctionInAbstractCrudObjects(){
    const deleteAdSetFunction = new AdSet().delete;
    const deleteCampaignFunction = new Campaign().delete;
    const deleteAdAccountFunction = new AdAccount().delete;
    const deletePixelFunction = new AdsPixel().delete;
    const deleteAdCreativeFunction = new AdCreative().delete;
    const deleteAdFunction = new Ad().delete;
}

export function testBusinessDataApiUserDataConstructor() {
    const businessDataApiUserData = new BusinessDataApiUserData();
}

export function testAttributionDataConstructor() {
    const attributionData = new AttributionData();
}
