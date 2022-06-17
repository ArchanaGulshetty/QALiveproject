$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functinality scenarios",
  "description": "",
  "id": "login-functinality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8275843200,
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
  "duration": 3268101799,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1286054800,
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
  "duration": 1256955400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_successfully_login()"
});
formatter.result({
  "duration": 156362601,
  "status": "passed"
});
formatter.after({
  "duration": 988269900,
  "status": "passed"
});
formatter.before({
  "duration": 2718889100,
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
  "duration": 3265251300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1102143699,
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
  "duration": 1233411501,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_informing_the_User_about_invalid_credentials()"
});
formatter.result({
  "duration": 99617401,
  "status": "passed"
});
formatter.after({
  "duration": 1108800900,
  "status": "passed"
});
formatter.before({
  "duration": 2687731300,
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
  "duration": 3010598700,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1367209201,
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
  "duration": 969427200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_informing_the_User_about_invalid_credentials()"
});
formatter.result({
  "duration": 98011899,
  "status": "passed"
});
formatter.after({
  "duration": 924371500,
  "status": "passed"
});
formatter.before({
  "duration": 3231530900,
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
  "duration": 3005768000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_naviage_to_Account_Login_page()"
});
formatter.result({
  "duration": 1010530900,
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
  "duration": 1615187699,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_that_the_password_reset_details_have_been_sent_to_the_email_address()"
});
formatter.result({
  "duration": 114361300,
  "status": "passed"
});
formatter.after({
  "duration": 1050884300,
  "status": "passed"
});
formatter.uri("FeatureFiles/Orders.feature");
formatter.feature({
  "line": 1,
  "name": "End to end scenarios for placing orders",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2737524599,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether user is able to place an order",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders;verify-whether-user-is-able-to-place-an-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Orders"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add any product to Bag and checkout",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I place an order",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see that the order is placed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Orders.i_login_to_the_application()"
});
formatter.result({
  "duration": 5391883399,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_add_any_product_to_Bag_and_checkout()"
});
formatter.result({
  "duration": 5125523101,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_place_an_order()"
});
formatter.result({
  "duration": 3684835700,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_should_see_that_the_order_is_placed_successfully()"
});
formatter.result({
  "duration": 493324801,
  "status": "passed"
});
formatter.after({
  "duration": 844125601,
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
  "duration": 2958440700,
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
  "duration": 2943790001,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1278232700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1165262700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 180133800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 586522201,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 117515101,
  "status": "passed"
});
formatter.after({
  "duration": 1063971701,
  "status": "passed"
});
formatter.before({
  "duration": 3180737400,
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
  "duration": 3023279700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1344875299,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 549511000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 101217500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_user_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 362319400,
  "status": "passed"
});
formatter.after({
  "duration": 910359300,
  "status": "passed"
});
formatter.before({
  "duration": 2801632900,
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
  "duration": 3095152301,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1168354200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1166167800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 183913200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 193829601,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 611162800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_has_successfully_created()"
});
formatter.result({
  "duration": 129853401,
  "status": "passed"
});
formatter.after({
  "duration": 978167200,
  "status": "passed"
});
formatter.before({
  "duration": 2540562700,
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
  "duration": 3356466501,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 1321542300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details_into_the_fields(DataTable)"
});
formatter.result({
  "duration": 1135769101,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 185210799,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_button()"
});
formatter.result({
  "duration": 664989400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_warning_message_stating_that_the_user_is_already_created()"
});
formatter.result({
  "duration": 64160101,
  "status": "passed"
});
formatter.after({
  "duration": 929672800,
  "status": "passed"
});
formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality scenarios",
  "description": "",
  "id": "search-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2997905100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify whether the User is able to search for products",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-able-to-search-for-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Search"
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
  "name": "I search for a product \"Samsung SyncMaster 941BW\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see the product in the search resultsil address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3397976700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung SyncMaster 941BW",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 1230938599,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_resultsil_address()"
});
formatter.result({
  "duration": 147579999,
  "status": "passed"
});
formatter.after({
  "duration": 1168236900,
  "status": "passed"
});
formatter.before({
  "duration": 2644203400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify whether the User is informed when the product being searched is not available",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-informed-when-the-product-being-searched-is-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Search"
    },
    {
      "line": 8,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for a product \"Apple iPhone\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the page displaying the message \"There is no product that matches the search criteria.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2989958800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 1161750299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is no product that matches the search criteria.",
      "offset": 46
    }
  ],
  "location": "Search.i_should_see_the_page_displaying_the_message(String)"
});
formatter.result({
  "duration": 81455201,
  "status": "passed"
});
formatter.after({
  "duration": 1391401801,
  "status": "passed"
});
});