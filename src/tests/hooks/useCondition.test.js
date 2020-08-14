const { renderHook } = require("@testing-library/react-hooks");
const { useCondition } = require("../../hooks/useCondition");

describe('test in useCondition', () => {

    test('getCondition shuould be a function', () => {
        const {result} = renderHook(()=> useCondition());

        expect(typeof result.current[0]).toBe('function');
    })

    test('getCondition should be return nuevo when passed new', () => {
        const {result} = renderHook(()=> useCondition());
        const [getCondition] = result.current;
        const condition = getCondition('new');

        expect(condition).toEqual('nuevo');

    });
    
    test('getCondition should be return usado when passed used ', () => {

        const {result} = renderHook(()=> useCondition());
        const [getCondition] = result.current;
        const condition = getCondition('used');

        expect(condition).toEqual('usado');
        
    });

    test('getCondition should be return empty string when not passed new or used ', () => {

        const {result} = renderHook(()=> useCondition());
        const [getCondition] = result.current;
        const condition = getCondition('test');

        expect(condition).toEqual('');
        
    });
    
});
 