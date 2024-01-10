(function(window, undefined) {
  window.Asc.plugin.init = function(initData) {
    var me = this
    $('#addText').click(function() {
      // 官方提供的回调函数==>所有操作文档的 API 都可以在这里面使用
      me.callCommand(function() {
        try {
		// var oDocument = Api.GetDocument();
  //               var oParagraph = Api.CreateParagraph();
  //               var oImage = Api.CreateImage("https://gzjc-file.ceczy.com/get-file/group1/M00/00/23/rBAAdWSJJRuAKXxFAAAMzQLbvpU491.png", 60 * 36000, 60 * 36000);
  //               oParagraph.AddDrawing(oImage);
  //               oDocument.InsertContent([oParagraph]);

	// 获取文档对象
	// var oDocument = Api.GetDocument();
	// 获取名为 "pic" 的书签的范围
	debugger;
 //        var oRange = oDocument.GetBookmarkRange("pic"); 
 //        console.log(oRange);

	// // 获取段落
 //        var oParagraph =  oRange.GetAllParagraphs(1);
        
 //        // 创建并添加图片
 //        var oImage = Api.CreateImage("https://img1.baidu.com/it/u=541513058,783072912&fm=253&fmt=auto&app=138&f=PNG?w=250&h=250", 40 * 36000, 40 * 36000);
 //        oParagraph[0].AddDrawing(oImage);

         fetch('https://vue.ruoyi.vip/prod-api/captchaImage')
        .then(response => response.json())
        .then(data => {
	  var oDocument = Api.GetDocument();
          var oRange = oDocument.GetBookmarkRange("pic"); // 获取名为 "pic" 的书签的范围
          var oParagraph =  oRange.GetAllParagraphs(1);
          
          // 创建并添加图片
          var oImage = Api.CreateImage('data:image/gif;base64,' + data.img, 30 * 36000, 30 * 36000);
          oParagraph[0].AddDrawing(oImage);
        })
        .catch(error => console.error(error));
		
        } catch (error) {
          console.error(error)
        }
      }, false, true, function () {
        console.log('ok')
      })
    })

    // 在插件 iframe 之外释放鼠标按钮时调用的函数
    window.Asc.plugin.onExternalMouseUp = function() {
      var event = document.createEvent('MouseEvents')
      event.initMouseEvent('mouseup', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null)
      document.dispatchEvent(event)
    }

    window.Asc.plugin.button = function(id) {
      // 被中断或关闭窗口
      if (id === -1) {
        this.executeCommand('close', '')
      }
	  }
  }
})(window, undefined)
