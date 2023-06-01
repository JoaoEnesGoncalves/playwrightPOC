import { EnumClauses } from "./EnumClauses"


export type FilterTextType = {
    column: string,
    clause: string,
    values: string[]
}


export class FilterTextClass {

    constructor() { }

    /**
     * note: Return FilterTextType object with empty values if the filter does contains an EnumClauses
     * @param expression expression to filter a text type
     * @returns FilterTextType object
     */
    parseTextFilter(expression: string): FilterTextType {

        const textFilter: FilterTextType = {
            column: "",
            clause: "",
            values: []
        }

        for (let element in EnumClauses) {

            const clause: string = EnumClauses[element as keyof typeof EnumClauses]
            const parts = expression.split(clause)

            if (parts.length > 1) {
                textFilter.column = parts[0].trim()
                textFilter.clause = clause
                textFilter.values = parts[1].trim().split(/,\s| and /)
            }
        }
        return textFilter
    }
}
