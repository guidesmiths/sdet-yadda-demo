# Jobs Functional Test Suite

## tl;dr
```
npm install
npm test
```

## Adding Tests

1. Create or extend a feature file in ```/tests/features/```
2. Reuse, create or extend a step library in ```/tests/steps```
3. Reuse, create or extend a page object in ```/tests/pages```
4. Optionally Reuse, create or extend a custom command in ```/tests/commands```

## Running Tests
Tests are run from nightwatch, using the nightwatch mocha runner. Nightwatch is configured to start the selenium server when running locally, but can be configured to use a selenium-server slave too.

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

