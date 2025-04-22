//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "LoginNativeBrows",
    appName: "LoginNativeBrowse",
    appVersion: "1.0.0",
    isturlbase: "https://tecnics.hclvoltmx.net/services",
    isDebug: true,
    isMFApp: true,
    appKey: "3bc332c794a902531422a0d400691d22",
    appSecret: "577ed961df5cccd211f60182e6a8aac4",
    serviceUrl: "https://100000114.auth.hclvoltmx.net/appconfig",
    svcDoc: {
        "identity_meta": {
            "TestB2COauth": {
                "success_url": "allow_any"
            },
            "GoogleLoginIdentityWeb": {
                "success_url": "allow_any"
            },
            "GoogleLoginIdentity": {
                "success_url": "allow_any"
            },
            "DevAzureB2C": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "baseId": "c4d770de-6cc2-47bb-918f-c3f9d2dd913d",
        "app_default_version": "1.0",
        "login": [{
            "mandatory_fields": [],
            "provider_type": "oauth2",
            "alias": "TestB2COauth",
            "type": "basic",
            "prov": "TestB2COauth",
            "url": "https://100000114.auth.hclvoltmx.net"
        }, {
            "provider_type": "oauth2",
            "enable_identity_pkce": false,
            "alias": "GoogleLoginIdentityWeb",
            "type": "oauth2",
            "prov": "GoogleLoginIdentityWeb",
            "url": "https://100000114.auth.hclvoltmx.net"
        }, {
            "provider_type": "oauth2",
            "enable_identity_pkce": false,
            "alias": "GoogleLoginIdentity",
            "type": "oauth2",
            "prov": "GoogleLoginIdentity",
            "url": "https://100000114.auth.hclvoltmx.net"
        }, {
            "provider_type": "oauth2",
            "enable_identity_pkce": true,
            "alias": "DevAzureB2C",
            "type": "oauth2",
            "prov": "DevAzureB2C",
            "url": "https://100000114.auth.hclvoltmx.net"
        }],
        "services_meta": {},
        "selflink": "https://100000114.auth.hclvoltmx.net/appconfig",
        "integsvc": {
            "_internal_logout": "https://tecnics.hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "00000196587C8E00",
        "appId": "9f1cb74a-88c9-4dd1-9ea4-9fe2bbcfe611",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "LoginNativeBrowse",
        "reportingsvc": {
            "session": "https://tecnics.hclvoltmx.net/services/IST",
            "custom": "https://tecnics.hclvoltmx.net/services/CMS"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 9500,
        isCompositeApp: false
    });
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    voltmx.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        appservice: function(eventObject) {
            handleDeeplinkCallback(eventObject);
        },
        postappinit: function(eventObj) {
            return applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new voltmx.mvc.Navigation("Form1").navigate();
        }
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    globalhttpheaders = {};
    voltmx.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    voltmx.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;