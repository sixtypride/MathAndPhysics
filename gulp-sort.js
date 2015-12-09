////////////////////////////////////////////////////////////////////////////////
//
//  NHN Technology Services
//  Copyright NHN Technology Services.
//  All Rights Reserved.
//
//  이 문서는 NHN Technology Services의 지적 자산이므로 NHN Technology Services의 승인 없이 이 문서를	다른 용도로
//  임의 변경하여 사용할 수 없습니다. NHN Technology Services는 이 문서에 수록된 정보의 완전성과
//  정확성을 검증하기 위해 노력하였으나, 발생할 수 있는 내용상의 오류나 누락에
//  대해서는 책임지지 않습니다. 따라서 이 문서의 사용이나 사용결과에 따른 책임은
//  전적으로 사용자에게 있으며, NHN Technology Services는 이에 대해 명시적 혹은 묵시적으로 어떠한
//  보증도하지 않습니다. NHN Technology Services는 이 문서의 내용을 예고 없이 변경할 수 있습니다.
//
//  File name : gulp-sort
//  Author: 김진훈(kim.jinhoon@nhn.com)
//  First created: 2015-11-04, 김진훈(kim.jinhoon@nhn.com)
//  Last revised: 2015-11-04., 김진훈(kim.jinhoon@nhn.com)
//  Version: v.1.0
//
////////////////////////////////////////////////////////////////////////////////

var through = require( "through2" );
var gutil = require("gulp-util");
var PluginError = gutil.PluginError;

const PLUGIN_NAME = "gulp-sort";

function sort(){

    var a = [];
    var pattern = new RegExp( /\-p\:\d+\-/g );
    var number = new RegExp( /\d+/g );

    var stream = through.obj( function( file, enc, cb ){

        if( file.isStream()){
            this.emit( "error", new PluginError( PLUGIN_NAME, "Streams are not supported" ) );
            return cb();
        }

        var priority = -1;

        if( file.isBuffer() ){

            var s = file.contents.toString().match( pattern );
            priority = s ? Number( s[0].match( number ) ) : -1;
        }

        for( var i = 0, len = a.length; i < len; i++ )
        {
            if( priority < a[i].priority ) continue;

            a.splice( i, 0, { priority: priority, file: file } );
            break;
        }

        if( len >= a.length ) a.push( { priority: priority, file: file } );

        cb();
    })

    stream.once( "prefinish", function(){
        for( var i = 0; i < a.length; i++ ){
            stream.push( a[i].file );
        }
    })

    stream._events[ "prefinish"].unshift( stream._events[ "prefinish"].pop() );

    return stream;
}

module.exports = sort;