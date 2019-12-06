var Storage = (function () {
	
	clubs = [
        {
            title: 'Kraken Roleplaying Club Newcastle',
            description: 'A tabletop roleplaying (RPG) club based in the centre of Newcastle upon Tyne. We meet on '
                + 'Tuesday and Thursday nights at 7pm and host a variety of games including Dungeons and Dragons for '
                + 'free. Feel free to say hello on Discord or come along to the Bridge Hotel pub where we run on either day.',
            when : 'Weekly on Tuesday and Thursday at 7pm',
            location: {
                title: 'Bridge Hotel',
                address: 'Castle Square, Newcastle upon Tyne, NE1 1RQ',
                map: 'https://maps.app.goo.gl/zgVPR438U4K8tnBv9'
            },
            links: [
                { title: 'Discord', url: 'https://discord.gg/eFBJCFN' },
                { title: 'Facebook', url: 'https://www.facebook.com/groups/krakenrpg' }
            ]
        }
    ];

	return {
		clubs: clubs
	};
})();