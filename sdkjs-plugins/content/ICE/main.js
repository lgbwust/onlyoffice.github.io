// 假设你要查找的书签的名字是"myBookmark"
var bookmarkName = "myBookmark";

// 假设你的REST接口的URL是"https://my-api.com/image"
var imageUrl = "https://my-api.com/image";

window.Asc.plugin.init = function () {
    document.getElementById("insertImage").addEventListener("click", function () {
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                var reader = new FileReader();
                reader.onload = function () {
                    var base64Image = reader.result;
                    window.Asc.plugin.executeMethod("AddImageUrl", [bookmarkName, base64Image]);
                };
                reader.readAsDataURL(blob);
            })
            .catch(error => console.error(error));
    });
};

window.Asc.plugin.onMethodReturn = function (returnValue) {
    if (returnValue.methodName == "AddImageUrl") {
        this.executeCommand("close", "");
    }
};

window.Asc.plugin.button = function (id) {
    this.executeCommand("close", "");
};