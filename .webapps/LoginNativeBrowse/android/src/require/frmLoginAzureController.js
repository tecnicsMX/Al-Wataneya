define("userfrmLoginAzureController", {
    //Type your controller code here 
});
define("frmLoginAzureControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_af727c18c1404fee9feace8adf762a21: function AS_Button_af727c18c1404fee9feace8adf762a21(eventobject) {
        var self = this;

        function SHOW_ALERT_c554093b0eec4d61b956f40118f7c1ac_True() {}

        function INVOKE_IDENTITY_SERVICE_fa40d47ab5a34c9fbf4f2be56011b98c_Success(response) {
            if (self.view.defaultBrowserWidgetForOauth2) {
                self.view.remove(self.view.defaultBrowserWidgetForOauth2);
            }
            var ntf = new voltmx.mvc.Navigation({
                "appName": "LoginNativeBrowse",
                "friendlyName": "Form2"
            });
            ntf.navigate({
                "_meta_": {
                    "eventName": "onClick",
                    "widgetId": ""
                }
            });

            function SHOW_ALERT_d302f1b973c84b9bb4063dc476f5650b_Callback() {
                SHOW_ALERT_d302f1b973c84b9bb4063dc476f5650b_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "You have successfully logged in.",
                "alertHandler": SHOW_ALERT_d302f1b973c84b9bb4063dc476f5650b_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function INVOKE_IDENTITY_SERVICE_fa40d47ab5a34c9fbf4f2be56011b98c_Failure(error) {
            if (self.view.defaultBrowserWidgetForOauth2) {
                self.view.remove(self.view.defaultBrowserWidgetForOauth2);
            }

            function SHOW_ALERT_c554093b0eec4d61b956f40118f7c1ac_Callback() {
                SHOW_ALERT_c554093b0eec4d61b956f40118f7c1ac_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_c554093b0eec4d61b956f40118f7c1ac_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_d302f1b973c84b9bb4063dc476f5650b_True() {}
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "DevAzureB2C$login";
        login_inputparam["operation"] = "login";
        if (!self.view.defaultBrowserWidgetForOauth2) {
            self.view.add(new voltmx.ui.Browser({
                "id": "defaultBrowserWidgetForOauth2",
                "left": "0dp",
                "top": "0dp",
                "width": "100%",
                "height": "100%"
            }, {}, {}));
        }
        login_inputparam["browserWidget"] = self.view.defaultBrowserWidgetForOauth2;
        DevAzureB2C$login = mfidentityserviceinvoker("DevAzureB2C", login_inputparam, INVOKE_IDENTITY_SERVICE_fa40d47ab5a34c9fbf4f2be56011b98c_Success, INVOKE_IDENTITY_SERVICE_fa40d47ab5a34c9fbf4f2be56011b98c_Failure);
    }
});
define("frmLoginAzureController", ["userfrmLoginAzureController", "frmLoginAzureControllerActions"], function() {
    var controller = require("userfrmLoginAzureController");
    var controllerActions = ["frmLoginAzureControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
