var Storage = (function () {
	
	clubs = [
        {
            title: 'Kraken Roleplaying Club Newcastle',
            description: `A tabletop roleplaying (RPG) club based in the centre of Newcastle upon Tyne. We meet on
                Tuesday and Thursday nights at 7pm and host a variety of games including Dungeons and Dragons for
                free. Feel free to say hello on Discord or come along to the Bridge Hotel pub where we run on either day.`,
            when : 'Weekly on Tuesday and Thursday at 7pm',
            location: {
                title: 'Bridge Hotel',
                address: 'Castle Square, Newcastle upon Tyne, NE1 1RQ',
                map: 'https://maps.app.goo.gl/zgVPR438U4K8tnBv9'
            },
            links: [
                { title: 'Discord', url: 'https://discord.gg/eFBJCFN' },
                { title: 'Facebook', url: 'https://www.facebook.com/groups/krakenrpg' }
            ],
            logo: 'kraken-logo.jpg',
            cost: 'free',
            tags: ['near metro', 'private room', 'pub']
        },
        {
            title: 'Heaton Games Society',
            description: '',
            when : 'Weekly on Sunday at 4pm',
            location: {
                title: 'Heaton Community Centre',
                address: '61 Trewhitt Rd, Newcastle upon Tyne NE6 5DY',
                map: 'https://goo.gl/maps/uCw1H1A1Lme4C2GD7'
            },
            links: [
                { title: 'Facebook', url: 'https://www.facebook.com/groups/heaton.games.society' }
            ],
            cost: 'paid',
            tags: ['d&amp;d adventurers league', 'private room']
        },
        {
            title: 'Newcastle University Tabletop Society',
            description: `Weekly meetings where fans of role-playing games, card games, and miniature war games can meet and play in a controlled and fun environment.
                We offer 2-3 Magic the Gathering Drafts to our members free of charge, host a long-term shared world campaign for D&D players and Warhammer 40K games.`,
            when : 'Weekly on Wednesday at 1pm',
            location: {
                title: 'Newcastle University Students Union',
                address: 'Kings Walk Newcastle upon Tyne NE1 8QB',
                map: 'https://goo.gl/maps/woFVTYWbcKfdofVD6'
            },
            links: [
                { title: 'Discord', url: 'https://discord.gg/hN4QMnE' },
                { title: 'Facebook', url: 'https://www.facebook.com/groups/6093093358' },
                { title: 'Website', url: 'https://www.nusu.co.uk/getinvolved/societies/society/nerdsoc/' }
            ],
            logo: 'nets-logo.png',
            cost: 'free',
            tags: ['students only', 'private room']
        },
    ];

	return {
		clubs: clubs
	};
})();