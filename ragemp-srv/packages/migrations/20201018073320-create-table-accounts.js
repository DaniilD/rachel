'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('accounts',{
    id: {type:'int', primaryKey:true},
    login:'string',
    email: 'string',
    password: 'string',
    ip: 'string',
    socialclub: 'string',
    character1: 'int',
    character2: 'int',
    character3: 'int'
      });
};

exports.down = function(db) {
  return db.dropTable('accounts');
};

exports._meta = {
  "version": 1
};
