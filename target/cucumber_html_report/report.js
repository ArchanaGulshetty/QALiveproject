$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registraition functionality scenarios",
  "description": "",
  "id": "registraition-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5842001700,
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
  "duration": 4224550300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1041594700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1021898900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 162657000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 605493400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 99452900,
  "status": "passed"
});
formatter.after({
  "duration": 876900800,
  "status": "passed"
});
formatter.before({
  "duration": 3721777600,
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
  "duration": 3140607700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1029936900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 605684700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 87843100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_user_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 368714700,
  "status": "passed"
});
formatter.after({
  "duration": 791904000,
  "status": "passed"
});
formatter.before({
  "duration": 2475512700,
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
  "duration": 3314500800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 930010300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1022972500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 182739800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 160094900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 583357200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 100235900,
  "status": "passed"
});
formatter.after({
  "duration": 809305000,
  "status": "passed"
});
formatter.before({
  "duration": 3073307000,
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
  "duration": 4073835000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1093652900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details_into_the_fields(DataTable)"
});
formatter.result({
  "duration": 1470475700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 195420800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 505466700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_warning_message_stating_that_the_user_is_already_created()"
});
formatter.result({
  "duration": 81370200,
  "status": "passed"
});
formatter.after({
  "duration": 826960400,
  "status": "passed"
});
});