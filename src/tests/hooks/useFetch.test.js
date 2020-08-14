const { renderHook } = require("@testing-library/react-hooks");
const { default: useFetch } = require("../../hooks/useFetch");

describe('test in useFetch', () => {
   
    test('sendRequest shuould be a function', () => {
        const {result} = renderHook(()=> useFetch());

        expect(typeof result.current.sendRequest).toBe('function');
    })

    test('sendRequest shuould data do not be null', async() => {
        const {result} = renderHook(()=> useFetch());

        const {sendRequest} = result.current;

        const data = await sendRequest('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).not.toBeNull();


    });

    test('sendRequest shuould data do be null when error', async() => {
        const {result} = renderHook(()=> useFetch());

        const {sendRequest} = result.current;

        const data = await sendRequest('https://jsonplaceholder.typicode.com/todos/1-----');

        expect(data).toBeNull();

    });

});
