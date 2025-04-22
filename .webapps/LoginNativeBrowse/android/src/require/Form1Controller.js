define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d80e3bbc30d0432faa1d1958634eb580: function AS_Button_d80e3bbc30d0432faa1d1958634eb580(eventobject) {
        var self = this;

        function SHOW_ALERT_dedf621dde714b78857a0f0bf8cb024b_True() {}

        function INVOKE_IDENTITY_SERVICE_db3cff9432d14f9ebb0b2b0342ca3be1_Success(response) {
            if (self.view.defaultBrowserWidgetForOauth2) {
                self.view.remove(self.view.defaultBrowserWidgetForOauth2);
            }

            function SHOW_ALERT_b41910c6de1145098bf6d9f043235447_Callback() {
                SHOW_ALERT_b41910c6de1145098bf6d9f043235447_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "You have successfully logged in.",
                "alertHandler": SHOW_ALERT_b41910c6de1145098bf6d9f043235447_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function INVOKE_IDENTITY_SERVICE_db3cff9432d14f9ebb0b2b0342ca3be1_Failure(error) {
            if (self.view.defaultBrowserWidgetForOauth2) {
                self.view.remove(self.view.defaultBrowserWidgetForOauth2);
            }

            function SHOW_ALERT_dedf621dde714b78857a0f0bf8cb024b_Callback() {
                SHOW_ALERT_dedf621dde714b78857a0f0bf8cb024b_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_dedf621dde714b78857a0f0bf8cb024b_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_b41910c6de1145098bf6d9f043235447_True() {}
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "TestB2COauth$login";
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
        TestB2COauth$login = mfidentityserviceinvoker("TestB2COauth", login_inputparam, INVOKE_IDENTITY_SERVICE_db3cff9432d14f9ebb0b2b0342ca3be1_Success, INVOKE_IDENTITY_SERVICE_db3cff9432d14f9ebb0b2b0342ca3be1_Failure);
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
