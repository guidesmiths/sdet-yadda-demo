# Jobs Functional Test Suite

## tl;dr
```
npm install
npm test
```

## What Tests Are Appropriate

Functional tests are the most expensive tests you can write. Then are slow to write, slow to run and tend to be brittle. Before adding a test please consider...

* If the feature under test of NOT high importance (e.g. a premium job advert), then you probably shouldn't test it here
* If you can adequately test the feature in a service level test, then you definitely shouldn't test it here
* If the feature isn't likely to be accidentally broken by an unrelated change and is easy to test manually then you probably shouldn't test it here

## About

The jobs functional testsuite stack is comprised of [Yadda](github.com/acuminous/yadda) for BDD and [Nightwatch](http://nightwatchjs.org) for driving selenium. Tests are configured to run against https://www.tes-dev.com one minute after any of the following projects are deployed to development

* app-job-details
* app-job-hubs
* app-job-search
* app-employer-profile
* service-msl-adapter
* service-jobs-api
* service-jobs-search

*The configuration for the above jenkins jobs inconsistent since app-job-* are deployed as part of their build step whereas service-* are promoted post build*

## Adding Tests

1. Create or extend a feature file in ```/tests/features/```
2. Reuse, create or extend a step library in ```/tests/steps```
3. Reuse, create or extend a page object in ```/tests/pages```
4. Optionally Reuse, create or extend a custom command in ```/tests/commands```

## Running Tests
Tests are run from nightwatch, using the nightwatch mocha runner. Nightwatch is configured to start the selenium server when running locally, but will use the selenium-server slave running on ```jenkins.tescloud.com:4444``` when run with ```nightwatch --env jenkins```

To run an individual test annotate the feature or scenario with ```@Only```, e.g.

```
Feature: Jobs Home Page

Background:
    Enable beta

@Only
Scenario: Browse to hub page

    When I view the jobs home page
    And I browse Nursery jobs
    Then I see the Nursery Teaching and Lecturing hubs page
    And the Teaching and Lecturing position should be highlighted
    And the Nursery workplace should be highlighted
```

You can also skip features and scenarios with the ```@Pending``` annotation, e.g.

```
Feature: Jobs Home Page

Background:
    Enable beta

@Pending
Scenario: Browse to hub page

    When I view the jobs home page
    And I browse Nursery jobs
    Then I see the Nursery Teaching and Lecturing hubs page
    And the Teaching and Lecturing position should be highlighted
    And the Nursery workplace should be highlighted
```

## Debugging Jenkins test failures

1. The jenkins server runs tests against a selenium server running on jenkins.tescloud.com:4444. You can run tests locally, using this server by typing ```node_modules/.bin/nightwatch --env jenkins```
2. The selenium server is running x11vnc so you can see whats going on while you run your tests. You can connect to it with a good VNC client (e.g. Chicken of the VNC). The client will prompt for a password, but none is required.
3. Nightwatch is configured to take screenshots on failure and these should be archived by each build.
4. If all else fails restart the selenium server

