define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
            this.setDefaultUnit(voltmx.flex.DP);
            var Label0f69d0f2de24f42 = new voltmx.ui.Label({
                "id": "Label0f69d0f2de24f42",
                "isVisible": true,
                "left": "118dp",
                "skin": "defLabel",
                "text": "Logged in",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "312dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(Label0f69d0f2de24f42);
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
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