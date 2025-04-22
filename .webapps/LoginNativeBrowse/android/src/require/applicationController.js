define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("Form1", {
            "viewName": "Form1",
            "controllerName": "Form1Controller"
        });
        voltmx.mvc.registry.add("Form2", {
            "viewName": "Form2",
            "controllerName": "Form2Controller"
        });
        voltmx.mvc.registry.add("frmLoginAzure", {
            "viewName": "frmLoginAzure",
            "controllerName": "frmLoginAzureController"
        });
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("Form1").navigate();
    }
});