(function(window, undefined) {
  window.Asc.plugin.init = function(initData) {
    var me = this
    $('#addText').click(function() {
      // 官方提供的回调函数，所有操作文档的 API 都可以在这里面使用
      me.callCommand(function() {
        try {
		var oDocument = Api.GetDocument();
                var oParagraph = Api.CreateParagraph();
                var oImage = Api.CreateImage("https://gzjc-file.ceczy.com/get-file/group1/M00/00/23/rBAAdWSJJRuAKXxFAAAMzQLbvpU491.png", 60 * 36000, 60 * 36000);
                oParagraph.AddDrawing(oImage);
                oDocument.InsertContent([oParagraph]);
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
