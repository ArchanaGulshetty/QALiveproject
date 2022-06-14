$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functinality scenarios",
  "description": "",
  "id": "login-functinality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5148709900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to login with valid credentials",
  "description": "",
  "id": "login-functinality-scenarios;verify-whether-the-user-is-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I login to the application using Username \"ravi.kiran1@gmail.com\" and Password \"rkiran\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see that the User is able to successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3077909300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1145037200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran1@gmail.com",
      "offset": 43
    },
    {
      "val": "rkiran",
      "offset": 80
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 984256200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_successfully_login()"
});
formatter.result({
  "duration": 115034200,
  "status": "passed"
});
formatter.after({
  "duration": 874285100,
  "status": "passed"
});
formatter.before({
  "duration": 2274264700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify that the User is not able to login with invalid credentials",
  "description": "",
  "id": "login-functinality-scenarios;verify-that-the-user-is-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Login"
    },
    {
      "line": 9,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I login to the application using Username \"ravi.kiran99@gmail.com\" and Password \"rkiran99\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see an error message informing the User about invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3543513600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 933183800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran99@gmail.com",
      "offset": 43
    },
    {
      "val": "rkiran99",
      "offset": 81
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 844960500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_informing_the_User_about_invalid_credentials()"
});
formatter.result({
  "duration": 71147600,
  "status": "passed"
});
formatter.after({
  "duration": 815131600,
  "status": "passed"
});
formatter.before({
  "duration": 2234899900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify that the User is not able to login without providing credentials",
  "description": "",
  "id": "login-functinality-scenarios;verify-that-the-user-is-not-able-to-login-without-providing-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I login to the application using Username \"\" and Password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see an error message informing the User about invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2994777400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1006141700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 766560900,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_informing_the_User_about_invalid_credentials()"
});
formatter.result({
  "duration": 70790000,
  "status": "passed"
});
formatter.after({
  "duration": 814555500,
  "status": "passed"
});
formatter.before({
  "duration": 2276694600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that the User is able to reset forgotten password",
  "description": "",
  "id": "login-functinality-scenarios;verify-that-the-user-is-able-to-reset-forgotten-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Login"
    },
    {
      "line": 21,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I naviage to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I reset the forgotten password for \"ravi.kiran@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see a message informing that the password reset details have been sent to the email address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3044953600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1018424700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran@gmail.com",
      "offset": 36
    }
  ],
  "location": "Login.i_reset_the_forgotten_password_for(String)"
});
formatter.result({
  "duration": 1505969100,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_that_the_password_reset_details_have_been_sent_to_the_email_address()"
});
formatter.result({
  "duration": 69615800,
  "status": "passed"
});
formatter.after({
  "duration": 806930300,
  "status": "passed"
});
formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registraition functionality scenarios",
  "description": "",
  "id": "registraition-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2245241900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify whether the user is able to register into the application by providing all the fields",
  "description": "",
  "id": "registraition-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-providing-all-the-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Register"
    },
    {
      "line": 2,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 7
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 8
    },
    {
      "cells": [
        "Email",
        "Ravi.kiran2@gmail.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "Telephone",
        "9212345678"
      ],
      "line": 10
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see that the User Account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4146360400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 992628500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1011879700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 151438300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 589840000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 123886000,
  "status": "passed"
});
formatter.after({
  "duration": 818544000,
  "status": "passed"
});
formatter.before({
  "duration": 2282171100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify whether the user is not allowed to register on skipping mandatory fields",
  "description": "",
  "id": "registraition-functionality-scenarios;verify-whether-the-user-is-not-allowed-to-register-on-skipping-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Register"
    },
    {
      "line": 15,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Continue button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see that the User Account is not created",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see the error messages informing the user to fill the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3444597000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1123248400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 512887000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 85222200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_user_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 403212500,
  "status": "passed"
});
formatter.after({
  "duration": 826897500,
  "status": "passed"
});
formatter.before({
  "duration": 2327188500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify whether the user is able to register into the application by opting for Newsletter subscription",
  "description": "",
  "id": "registraition-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-opting-for-newsletter-subscription",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Register"
    },
    {
      "line": 22,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 27
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 28
    },
    {
      "cells": [
        "Email",
        "Ravi.kiran2@gmail.com"
      ],
      "line": 29
    },
    {
      "cells": [
        "Telephone",
        "9212345678"
      ],
      "line": 30
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I subscribe to Newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see that the User Account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2978143000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1172592800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 993597300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 170990300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 165073000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 573622300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 101191800,
  "status": "passed"
});
formatter.after({
  "duration": 812324800,
  "status": "passed"
});
formatter.before({
  "duration": 2323803100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify whether the user is restricted from registring a duplicate account",
  "description": "",
  "id": "registraition-functionality-scenarios;verify-whether-the-user-is-restricted-from-registring-a-duplicate-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Register"
    },
    {
      "line": 36,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I provide the below duplicate details into the fields",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 41
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 42
    },
    {
      "cells": [
        "Email",
        "Ravi.kiran1@gmail.com"
      ],
      "line": 43
    },
    {
      "cells": [
        "Telephone",
        "9212345678"
      ],
      "line": 44
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 45
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should see the warning message stating that the user is already created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3498683900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1124135500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details_into_the_fields(DataTable)"
});
formatter.result({
  "duration": 944266300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 168635100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 598816500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_warning_message_stating_that_the_user_is_already_created()"
});
formatter.result({
  "duration": 57844600,
  "status": "passed"
});
formatter.after({
  "duration": 832267000,
  "status": "passed"
});
});