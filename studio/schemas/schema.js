import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import projectSchema from './src/project.js';
import eduSchema from './src/edu.js';

console.log(projectSchema);

export default createSchema({
  name: 'Shape',
  types: schemaTypes.concat([projectSchema, eduSchema]),
});
