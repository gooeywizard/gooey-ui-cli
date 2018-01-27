#!/usr/bin/env node

const program = require('commander');

function help() {
	console.log('Help');
}

function generate(one, two, three) {
	console.log('generate ' + one + two + three);
}

program
	.version('0.0.1')
	.description('Test CLI');

program
	.command('help')
	.alias('h')
	.description('Get help')
	.action(help);

program
	.command('generate <one> <two> <three>')
	.alias('g')
	.description('Generate something')
	.action((one, two, three) => {
		generate(one, two, three);
	});

program.parse(process.argv);
