groupChunks = function() {
     var cfg = db.getSisterDB("config")
     return cfg.chunks.group( { key : { shard : 1 } , initial : { count : 0 } , reduce : function(obj,prev){ prev.count++; } } );
}

