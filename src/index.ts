#!/usr/bin/env node

import Generator from './generator';

const generator = new Generator('./template.json');

generator.generateJSON('./output.json');



