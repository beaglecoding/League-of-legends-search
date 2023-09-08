document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'RGAPI-f80442e8-be16-4ca4-ad6f-c523d131781c';

    const fetchSummonerInfo = async () => {
        const summonerName = document.getElementById('summonerName').value;
        const summonerInfoElement = document.getElementById('fetchSummonerInfo');
        const summonerInfo = document.getElementById("summonerInfo");

        try {
            const response = await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`);
            const data = await response.json();

            summonerInfo.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Summoner Level: ${data.summonerLevel}</p>
                <p>Profile Icon ID: ${data.profileIconId}</p>
                <p>Account ID: ${data.accountId}</p>
                <p>Summoner ID: ${data.id}</p>
                <p>PUUID: ${data.puuid}</p>
                <p>Revision Date: ${new Date(data.revisionDate)}</p>
            `;
        } catch (error) {
            console.error('Error buscando summoner info:', error);
            summonerInfo.innerHTML = '<p>Error Buscando el  summoner. Intenta nuevamente.</p>';
        }
    };

    document.getElementById('fetchSummonerInfo').addEventListener('click', fetchSummonerInfo);
});


// https://developer.riotgames.com/apis#summoner-v4 aca esta de donde saco la data 