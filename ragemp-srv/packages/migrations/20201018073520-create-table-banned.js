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
 return  db.createTable('banned', {
    id: {type:'int', primaryKey:true},
    title: 'string',
    account_id: {
      type:'int',
      notNull: true,
      foreignKey:{
        name:'banned_account_id_fk',
        table:'accounts',
        rules:{
          onDelete:'CASCADE'
        },
        mapping:{
          account_id: 'id'
        }
      }
    },
    time: 'time',
    date: 'date',
  });
};

exports.down = function(db) {
  return db.dropTable('banned');
};

exports._meta = {
  "version": 1
};
