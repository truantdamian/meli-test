const { renderHook } = require("@testing-library/react-hooks");
const { default: useNumber } = require("../../hooks/useNumber");

describe('test in useNumber', () => {
    test('getFormatNumber should be a function', () => {
        const {result} = renderHook(()=> useNumber());

        expect(typeof result.current[0]).toBe('function');
    })
    
    test('getFormatNumber to be array ["21","12"] when pass 21.12 and 2 decimals', () => {
        const {result} = renderHook(()=> useNumber());
        const [getFormatNumber] = result.current;

        const res = getFormatNumber('21.12',2);

        expect(res[0]).toEqual("21");
        expect(res[1]).toEqual("12");
        
    });

    test('getFormatNumber to be array ["21","00"] when pass "21" and 2 decimals', () => {
        const {result} = renderHook(()=> useNumber());
        const [getFormatNumber] = result.current;

        const res = getFormatNumber('21',2);

        expect(res[0]).toEqual("21");
        expect(res[1]).toEqual("00");
        
    });

    test('getFormatNumber to be array ["21","00"] when pass "21" and 0 decimals', () => {
        const {result} = renderHook(()=> useNumber());
        const [getFormatNumber] = result.current;

        const res = getFormatNumber('21',0);

        expect(res[0]).toEqual("21");
        expect(res[1]).toEqual("");
        
    });

    test('getFormatNumber to be array ["1.000",""] when pass "1000"', () => {
        const {result} = renderHook(()=> useNumber());
        const [getFormatNumber] = result.current;

        const res = getFormatNumber('1000',0);

        expect(res[0]).toEqual("1.000");
        
    });

    test('getFormatNumber to be array ["",""] when pass "" and 2 decimals', () => {
        const {result} = renderHook(()=> useNumber());
        const [getFormatNumber] = result.current;

        const res = getFormatNumber('',2);

        expect(res[0]).toEqual("");
        expect(res[1]).toEqual("");
        
    });

});
