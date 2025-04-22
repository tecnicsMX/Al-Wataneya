define("frmLoginAzure", function() {
    return function(controller) {
        function addWidgetsfrmLoginAzure() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flexlogin = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "500dp",
                "id": "flexlogin",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "LoginNativeBrowse"
            }, {
                "paddingInPixel": false
            }, {});
            flexlogin.setDefaultUnit(voltmx.flex.DP);
            var imgLogin = new voltmx.ui.Image2({
                "bottom": "65dp",
                "centerX": "50%",
                "height": "150dp",
                "id": "imgLogin",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "login_logo.png",
                "top": "0dp",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnLOGIN = new voltmx.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "defDataPanelLoginBtnActive",
                "height": "60dp",
                "id": "btnLOGIN",
                "isVisible": true,
                "onClick": controller.AS_Button_af727c18c1404fee9feace8adf762a21,
                "skin": "defDataPanelLoginBtnNormal",
                "text": "LOGIN",
                "top": "50dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexlogin.add(imgLogin, btnLOGIN);
            this.add(flexlogin);
        };
        return [{
            "addWidgets": addWidgetsfrmLoginAzure,
            "enabledForIdleTimeout": false,
            "id": "frmLoginAzure",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "LoginNativeBrowse"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});