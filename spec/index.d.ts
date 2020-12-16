// tslint:disable-next-line no-type-definitions-outside-types-modules
declare namespace jasmine {
    interface Matchers<T> {
        toEqualScamon(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toBeCloseToTyped(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toEqualLines(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toEqualWhitespaceAgnostic(expected: T, negate?: boolean, message?: string): CustomMatcherResult

        toBeCloseToArray(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toBeArrayWithDeepCloseContents(expected: T, precision?: number, message?: string): CustomMatcherResult

        toBeCloseToObject(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toBeCloseSoFar(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult

        toBeArrayWithDeepEqualContents(expected: T, message?: string): CustomMatcherResult

        toBeSameCombinationsAs(expected: T, message?: string): CustomMatcherResult

        toBeSameDistributionsAs(expected: T, message?: string): CustomMatcherResult

        toBeArrayIncludingDeepEqual(expected: T, message?: string): CustomMatcherResult

        toBeArrayIncludingCombinations(expected: T, message?: string): CustomMatcherResult
    }
}
