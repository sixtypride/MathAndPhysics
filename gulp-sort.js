////////////////////////////////////////////////////////////////////////////////
//
//  NHN Technology Services
//  Copyright NHN Technology Services.
//  All Rights Reserved.
//
//  �� ������ NHN Technology Services�� ���� �ڻ��̹Ƿ� NHN Technology Services�� ���� ���� �� ������	�ٸ� �뵵��
//  ���� �����Ͽ� ����� �� �����ϴ�. NHN Technology Services�� �� ������ ���ϵ� ������ ��������
//  ��Ȯ���� �����ϱ� ���� ����Ͽ�����, �߻��� �� �ִ� ������� ������ ������
//  ���ؼ��� å������ �ʽ��ϴ�. ���� �� ������ ����̳� ������� ���� å����
//  �������� ����ڿ��� ������, NHN Technology Services�� �̿� ���� ����� Ȥ�� ���������� ���
//  ���������� �ʽ��ϴ�. NHN Technology Services�� �� ������ ������ ���� ���� ������ �� �ֽ��ϴ�.
//
//  File name : gulp-sort
//  Author: ������(kim.jinhoon@nhn.com)
//  First created: 2015-11-04, ������(kim.jinhoon@nhn.com)
//  Last revised: 2015-11-04., ������(kim.jinhoon@nhn.com)
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