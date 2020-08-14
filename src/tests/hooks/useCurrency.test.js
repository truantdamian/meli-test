const { renderHook } = require("@testing-library/react-hooks");
const { default: useCurrency } = require("../../hooks/useCurrency");

describe('test in useCurrency', () => {
    test('getCurrencySimbol shuould be a function', () => {
        const {result} = renderHook(()=>useCurrency());
        expect(typeof result.current[0]).toBe('function');
        
    });

    test('getCurrencySimbol should be return $ when passed ARS', () => {
        const {result} = renderHook(()=> useCurrency());
        const [getCurrencySimbol] = result.current;
        const currency = getCurrencySimbol('ARS');

        expect(currency).toEqual('$');

    });

    test('getCurrencySimbol should be return U$S when passed USD', () => {

        const {result} = renderHook(()=> useCurrency());
        const [getCurrencySimbol] = result.current;
        const currency = getCurrencySimbol('USD');

        expect(currency).toEqual('U$S');
        
    });

    test('getCurrencySimbol should be return $ when not passed ARS or USD', () => {

        const {result} = renderHook(()=> useCurrency());
        const [getCurrencySimbol] = result.current;
        const currency = getCurrencySimbol('--');

        expect(currency).toEqual('$');
        
    });
    
});
