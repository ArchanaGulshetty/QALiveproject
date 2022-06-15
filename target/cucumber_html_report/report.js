$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality scenarios",
  "description": "",
  "id": "search-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5295957400,
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
  "duration": 3068031800,
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
  "duration": 1331881000,
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
  "duration": 82677900,
  "status": "passed"
});
formatter.after({
  "duration": 968063100,
  "status": "passed"
});
});