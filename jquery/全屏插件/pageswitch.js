/**
 * Created by coderpwh on 2017/12/12.
 */
(function ($) {
    var privateFun = function () {
        //
    }
    
    
    var PageSwitch = (function () {
        function PageSwith (element,options) {
          this.settings = $.extend(true,$.fn.PageSwithch.default,options||{});
          this.element = element;
          this.init();
        }
        PageSwith.prototype = {

            init:function () {
                var me = this;
                me.selectors = me.settings.selectors;
                me.selectors = me.selectors.sections;
                me.section = me.selectors.section;
                me.direction = me.settings.direction == "vertical"? true:false;
                me.pagesCount = me.pagesCount();
                me.index = (me.settings.index>=0 && me.settings.index<pagesCount)?me.settings.index:0;
                if(!me.direction){
                    me._initLayout();
                }
                if(me.settings.pagination){
                    me._initPaging();
                }
                me._initEvent();

            },
            pageCount :function () {
                 return this.sections.length;
            },
             /** 说明:获取滑动的宽度(横屏滑动)或者高度(竖屏滑动) */
            switchLength:function () {
                return this.direction?this.element.height():this.element.width();
             },

             /** 说明:主要针对横屏情况进行页面布局 */
            _initLayout :function () {
                var me = this;
                var width = (me.pageScount*100)+"%",
                    cellWidth = (100/me.pagesCount).toFixed(2)+"%";
                 me.sections.width(width);
                 me.section.width(cellWidth).css("float","left");
            },
            /** 说明:实现分页的dom结构及css样式 */
            _initPaging :function () {
              var me = this;
              pageClass = me.selectors.page.substring(1);
              activeClass = me.selectors.active.substring(1);

              var pageHtml = "<ul class='+pagesClass+'>"
               for(var i=0;i<me.pagesCount;i++){
                  pageHtml +="<li></li>";
               }
               me.element.append(pageHtml);
                var pages = me.element.find(me.selectors.page);
                me.pageItem = pages.find("li");
                me.pageItem.eq(me.index).addClass(me.activeClass);

                if(me.direction){
                    pages.addClass("vertical");
                }else{
                    pages.addClass("horizontal");
                }

            },
            _initEvent:function (){}

        };
        return PageSwith;
    })(jQuery)

    $.fn.PageSwithch = function () {
        return this.each(function () {
            var me = $(this),
                instance = me.date("PageSwitch");
            if(!instance){
                instance = new PageSwitch(me,options);
                me.date("PageSwitch",instance);
            }
            if($.type(options)=="string") return instance[options]();
            $("div").PageSwithch("init");

        });
    }
    $.fn.PageSwithch.default = {
        selectors :{
            sections:".sections",
            section: ".section",
            page:".pages",
            active: ".active"
        },
        index:0,
        easing:"ease",
        duration:500,
        loop:false,
        pagination:true,
        keyboard:"vertical",  // herizontal
        callback:""
    }
    $(function () {
        $("[data-PageSwitch]").PageSwithch();
    })

})(jQuery)
