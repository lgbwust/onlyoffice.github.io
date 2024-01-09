(function(window, undefined) {
    window.Asc.plugin.init = function(initData) {
      var me = this
    //   $('#addText').click(function() {
    //     // 官方提供的回调函数，所有操作文档的 API 都可以在这里面使用
    //     me.callCommand(function() {
    //       try {
    //         // 获取文档对象
    //         var oDocument = Api.GetDocument()
    //         // 生成一个新的段落对象
    //         var oParagraph = Api.CreateParagraph()
    //         // 往段落里面添加一个字符串文本
    //         oParagraph.AddText('Hello world')
    //         // 最后往文档里面添加一个段落对象
    //         oDocument.Push(oParagraph)
    //       } catch (error) {
    //         console.error(error)
    //       }
    //     }, false, true, function () {
    //       console.log('ok')
    //     })
    //   })

    this.button = document.createElement("button");
    this.button.innerText = "Insert Image";
    this.button.onclick = function() {
        var imageUrl = "https://gzjc-file.ceczy.com/get-file/group1/M00/00/23/rBAAdWSJJRuAKXxFAAAMzQLbvpU491.png"; // 替换为您的图片 URL
        window.Asc.plugin.executeMethod("AddImage", [imageUrl]);
    };

    this.executeCommand("service:asc.gui.app.showButton", [true]);
    document.body.appendChild(this.button);

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
