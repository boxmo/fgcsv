(function(){var e,t;e=function(){function e(){this.year=$(".years li"),this.currentYear=$(".year.current"),this.yearContent=$(".year-content"),this.nextYear=$(".next-year"),this.prevYear=$(".prev-year"),this.apply_handlers(),this.align_years(),this.dot_list=$(".dot-list")}return e.prototype.apply_handlers=function(){var e;return e=this,this.year.click(function(){var t;t=$(this).attr("data-year"),e.year.removeClass("opaque"),e.year.not(this).addClass("opaque"),e.year.removeClass("current"),e.yearContent.removeClass("current"),$(this).addClass("current"),$("#"+t).addClass("current")}),this.nextYear.click(function(){var t;t=$(".year.current").next("li"),t.trigger("click"),t.length&&e.select_dot(String(t.data("year")).substring(0,4))}),this.prevYear.click(function(){var t;t=$(".year.current").prev("li"),t.trigger("click"),t.length&&e.select_dot(String(t.data("year")).substring(0,4))})},e.prototype.align_years=function(){var e,t,n,r,i,s,o,u,a,f;t={},a=this.year;for(o=0,u=a.length;o<u;o++)s=a[o],n=String($(s).data("year")).substring(0,4),$(s).attr("id","pin-"+$(s).data("year")),t[n]?t[n].push($(s).attr("id")):(t[n]=[],t[n].push($(s).attr("id")));f=[];for(n in t)i=t[n],f.push(function(){var t,n,s;s=[];for(t=0,n=i.length;t<n;t++)r=i[t],e=$("#"+r),r===i[0]?e.css({marginLeft:"20px",marginRight:"-13px"}):(e.css({marginLeft:"-13px",marginRight:"-13px"}),e.find(".year-tag").css({opacity:0})),s.push(e.find("img").css({width:"65%"}));return s}());return f},e.prototype.select_dot=function(e){return this.dot_list.find("li").removeClass("active"),this.dot_list.find("[data-year~="+e+"]").addClass("active")},e}(),t=new e}).call(this);