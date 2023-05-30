
@featureTearDown: testReport

Scenario Outline: Filter select from a list - includes vs excludes
                    Test the filters descriptions labels
                    Test filter "select from a list "

    Given Admin user created the Analyzer Report "testReport" based on "territorySales" file
    And Admin user opened the Analyzer Report "testReport"
    When Admin user filter the report by <FILTER>:
    Then the report table should be
        | Territory	 | Sales     |
        | EMEA	     | 5,008,224 |

    Examples:
        | SCENARIO | FILTER                                                                        |
        | includes | Territory includes EMEA                                                       |
        | excludes | Territory excludes APAC, Japan, NA and Not Available                          |
        | Both     | Territory includes EMEA; Territory excludes APAC, Japan, NA and Not Available |
