#!/usr/bin/env node

const program = require('commander');

/*
 * Creates a new project based on the provided template.
 * If no template is provided, it uses a basic shell template.
 */
function init(template) {
	console.log(template);
}

/**
 * Generates the admin GUI and backend.
 */
function generateAdmin() {
	console.log('generateAdmin');
}

// Initialize the commander instance
program.version('0.0.2').description('GooeyUI CLI');

// Configure the init command
program.command('init [template]')
	.alias('i')
	.description('Create a new GooeyUI project from a template.')
	.action((template) => {
		initProject(template);
	});

// Configure the generate command
program.command('generateAdmin')
	.alias('g')
	.description('Generate the admin GUI and backend.')
	.action(generateAdmin);

program.parse(process.argv);
