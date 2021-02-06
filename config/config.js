// om namah shivay

// requires
const _ = require('lodash');

// module variables
const config = require('./config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gConfig = finalConfig;
global.gConfig.database = process.env.MONGODB_URI || global.gConfig.database
global.gConfig.node_port = process.env.NODE_PORT  || global.gConfig.node_port


global.secret = process.env.SECRET_APP  || global.gConfig.secret
global.clientID = config.clientID;
global.AWS_region = config.AWS.region;
global.AWS_source = config.AWS.source;
// log global.gConfig
// console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
