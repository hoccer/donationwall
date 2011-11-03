// HYPE.documents["football"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "football_Resources";
	var documentName = "football";
	var documentLoaderFilename = "football_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"ReflectionDepth":"FractionalValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","BorderWidthRight":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Height":"PixelValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","BorderColorLeft":"ColorValueTransformer","TextShadowColor":"ColorValueTransformer","Width":"PixelValueTransformer","ReflectionOffset":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","Left":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","BorderColorRight":"ColorValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"onSceneLoadAction":{"type":0},"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"1.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":1.0666667222976685,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":0},{"startValue":"723px","isRelative":true,"endValue":"473px","identifier":"Left","duration":1.0666667222976685,"timingFunction":"linear","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":0},{"startValue":"770px","isRelative":true,"endValue":"209px","identifier":"Top","duration":1.0666667222976685,"timingFunction":"linear","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":0},{"startValue":"478px","isRelative":true,"endValue":"71px","identifier":"Height","duration":1.0666667222976685,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":0},{"startValue":"445px","isRelative":true,"endValue":"66px","identifier":"Width","duration":1.0666667222976685,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":0},{"startValue":"1.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":1.0666667222976685,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":0},{"startValue":"1024px","isRelative":true,"endValue":"397px","identifier":"Left","duration":1.0666667222976685,"timingFunction":"linear","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":0},{"startValue":"222px","isRelative":true,"endValue":"219px","identifier":"Top","duration":1.0666667222976685,"timingFunction":"linear","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":0},{"startValue":"311px","isRelative":true,"endValue":"311px","identifier":"Height","duration":1.0666667222976685,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":0},{"startValue":"240px","isRelative":true,"endValue":"240px","identifier":"Width","duration":1.0666667222976685,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":0},{"startValue":"209px","isRelative":false,"endValue":"223px","identifier":"Top","duration":0.29999995231628418,"timingFunction":"linear","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.0666667222976685},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.29999995231628418,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.0666667222976685},{"startValue":"473px","isRelative":false,"endValue":"302px","identifier":"Left","duration":0.29999995231628418,"timingFunction":"linear","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.0666667222976685},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.29999995231628418,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.0666667222976685},{"startValue":"66px","isRelative":false,"endValue":"66px","identifier":"Width","duration":0.29999995231628418,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.0666667222976685},{"startValue":"71px","isRelative":false,"endValue":"71px","identifier":"Height","duration":0.29999995231628418,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.0666667222976685},{"startValue":"311px","isRelative":false,"endValue":"311px","identifier":"Height","duration":0.29999995231628418,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.0666667222976685},{"startValue":"397px","isRelative":false,"endValue":"222px","identifier":"Left","duration":0.29999995231628418,"timingFunction":"linear","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.0666667222976685},{"startValue":"240px","isRelative":false,"endValue":"240px","identifier":"Width","duration":0.29999995231628418,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.0666667222976685},{"startValue":"219px","isRelative":false,"endValue":"233px","identifier":"Top","duration":0.29999995231628418,"timingFunction":"linear","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.0666667222976685},{"startValue":"71px","isRelative":false,"endValue":"71px","identifier":"Height","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.3666666746139526},{"startValue":"240px","isRelative":false,"endValue":"240px","identifier":"Width","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.3666666746139526},{"startValue":"66px","isRelative":false,"endValue":"66px","identifier":"Width","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.3666666746139526},{"startValue":"311px","isRelative":false,"endValue":"311px","identifier":"Height","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.3666666746139526},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.3666666746139526},{"startValue":"223px","isRelative":false,"endValue":"223px","identifier":"Top","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.3666666746139526},{"startValue":"302px","isRelative":false,"endValue":"302px","identifier":"Left","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.3666666746139526},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569","startTime":1.3666666746139526},{"startValue":"233px","isRelative":false,"endValue":"233px","identifier":"Top","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.3666666746139526},{"startValue":"222px","isRelative":false,"endValue":"222px","identifier":"Left","duration":0.066666722297668457,"timingFunction":"easeinout","type":0,"oid":"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148","startTime":1.3666666746139526}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":1.4333333969116211}},"onSceneKeyPressAction":{"type":0},"id":"C0C36534-FCF1-4C84-9198-49A2988E6EBF-7354-0000A7D9D31E9F4C","sceneIndex":0,"perspective":"600px","oid":"C0C36534-FCF1-4C84-9198-49A2988E6EBF-7354-0000A7D9D31E9F4C","initialValues":{"140DB641-67D4-4BA7-A226-B53A1A913EEC-7354-0000A82D1FD24569":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"723px","BackgroundImage":"football.png","Height":"478px","Overflow":"visible","Width":"445px","ZIndex":"4","BackgroundSize":"100% 100%","Top":"770px","Opacity":"1.000000","TagName":"div"},"532CEB31-1D08-4BB9-A2F9-700F0D9053F2-7354-0000A82EF2AEC148":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"1024px","BackgroundImage":"player_blur.png","Height":"311px","Overflow":"visible","Width":"240px","ZIndex":"3","BackgroundSize":"100% 100%","Top":"222px","Opacity":"1.000000","TagName":"div"}},"name":"football","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {"EAC0EB1D-A82A-4573-B138-A9409D15B001-7354-0000AAB3D6E69A5A":"untitledFunction"};


	
	var Custom = (function() {
	return {

untitledFunction : function(hypeDocument, element) {
	/*	
		hypeDocument - access to the hype document API:
						METHODS:
						hypeDocument.documentName()
						hypeDocument.sceneNames()
						hypeDocument.currentSceneName()
						hypeDocument.showSceneNamed(sceneName, optionalTransition)
						hypeDocument.showNextScene(optionalTransition)
						hypeDocument.showPreviousScene(optionalTransition)
						hypeDocument.playTimelineNamed(timelineName)

						MORE INFO:
						http://tumultco.com/hype/documentation/javascript/
	
		element - DOMHTMLElement that triggered this function being called
	*/
	
	
}
	};

}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "football_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = false;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

