require.config({
  enforceDefine:true,
  urlArgs:function(id, url){
    var args = '';
    if (url.indexOf('code.jquery.com/jquery-2.2.4.min') !== -1) {
      args = 'integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="&crossorigin="anonymous"';
    }
    return (url.indexOf('?') === -1 ? '?' : '&') + args;
  },
  paths:{
    jquery: [
      'https://code.jquery.com/jquery-2.2.4.min',
      'jquery.min'
    ]
  }
});
require(['mansioning_ul_li']);
