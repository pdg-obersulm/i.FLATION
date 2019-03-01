/*
	Imports text for a specific agent/scenario into the database
	usage: node ./importInflationData --path="path/to/texts/" --db="mongodb://user:password@localhost/database"
	in the path folder, each agent needs its own folder named correspondingly containing all scenarios as *.md files, also named correspondingly
	you can also pass the database via the env variable "DB"
*/

const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const path = require('path');

const importText = () => {
	try {
		const dir = argv.path;
		const config = JSON.parse(fs.readFileSync(path.resolve(dir, 'config.json'), 'utf8'));
		
		const scenarios = config.scenarios.filter((scenario) => fs.lstatSync(getScenarioPath(scenario, dir)).isDirectory());

		const data = [];

		for (const scenario of scenarios) {
			const scenarioPath = getScenarioPath(scenario, dir);
			const agents = config.agents.filter((agent) => fs.lstatSync(path.resolve(scenarioPath, getAgentName(agent) + '.md')).isFile());

			console.info(`Checking following ${agents.length} agents of ${scenario.name}:`, agents.map((agent) => getAgentName(agent)));

			const judgement = readIfExists(scenarioPath, '_judgement.md');
			const description = readIfExists(scenarioPath, '_description.md');

			const scenarioIndex = data.push({
				...scenario,
				slug: scenario.slug || scenario.name.toLowerCase(),
				agents: [],
				description,
				judgement
			}) - 1;

			for (const agent of agents) {
				const agentName = getAgentName(agent);
				const text = fs.readFileSync(path.resolve(scenarioPath, agentName + '.md'), 'utf8').trim();

				if (typeof(agent) === 'string') {
					data[scenarioIndex].agents.push({ name: agent, slug: agentName, text });
				}
				else {
					data[scenarioIndex].agents.push({ ...agent, text });
				}
			}
		}

		fs.writeFileSync(path.resolve(__dirname, 'scenarios.json'), JSON.stringify(data), 'utf8');
	}
	catch (e) {
		console.error(e);
	}
};

const getScenarioPath = (scenario, dir) => path.resolve(dir, scenario.slug || scenario.name.toLowerCase());
const getAgentName = (agent) => (typeof(agent) === 'string' ? agent.toLowerCase() : agent.slug || agent.name.toLowerCase());
const readIfExists = (...file) => fs.existsSync(path.resolve(...file)) ? fs.readFileSync(path.resolve(...file), 'utf8').trim() : undefined;

importText();