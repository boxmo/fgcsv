(function(){$(function(){var e,t;return e=null,t=function(t){var n;n=void 0;if(window.find){n=window.find(t);if(!n){n=window.find(t,0,1),console.log(n);while(window.find(t,0,1))continue}}else if(navigator.appName.indexOf("Microsoft")!==-1){e!==null&&(e.collapse(!1),n=e.findText(t),n&&e.select());if(e===null||n===0)e=window.document.body.createTextRange(),n=e.findText(t),n&&e.select()}if(!n)return alert("Texto '"+t+"' não encontrado!")},$("#f1").on("submit",function(e){var n;return e.preventDefault(),n=$("#t1").val(),t(n)})})}).call(this);