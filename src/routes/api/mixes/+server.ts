import type { RequestHandler } from './$types';

export const prerender = false;

export async function GET({ params }) {
    console.log(`${params}`);
    // return new Response(JSON.stringify(params), {});
    return new Response(JSON.stringify(await loadMixes()), {});
}

async function loadMixes() {
    let currentOffset = 0;
    let numTracks = 0;
    let tracks: any = { collection: [] };
    while (numTracks < 100) {
        let newTracks: any = await getFeed(currentOffset, 100);
        console.log(`got ${newTracks.collection.length} tracks`);
        // filter out tracks that are less than 30 minutes long
        newTracks.collection = newTracks.collection.filter((track: any) => track?.track?.duration > 1800000);
        console.log(`filtered to ${newTracks.collection.length} tracks`);
        numTracks += newTracks.collection.length;
        tracks.collection = tracks.collection.concat(newTracks.collection);
        currentOffset += 100;
        console.log(`added ${newTracks.collection.length} tracks, total ${numTracks}`);
    }
    return tracks;
};

async function getFeed(offset: number, limit: number) {
    console.log('initiating service call');
    const data = await fetch(`https://us-central1-my-web-site-27a15.cloudfunctions.net/getSCStream?offset=${offset}&limit=${limit}`);
    const json = await data.json();
    const response = new Response(JSON.stringify(json), {
        headers: {
            'content-type': 'application/json'
        }
    });
    return response.json();
}
