// closures function for create user counter
function createCounter(userCounter)
{   
    return {
        increment: function()
        {
            userCounter ++;
            console.log(`Variable ${userCounter - 1} was use increment`);
        },

        decrement: function()
        {
            userCounter --;
            console.log(`Variable ${userCounter + 1} was use decrement`);
        },

        getCount: function()
        {
            return userCounter;
        }
    };
}

// main function for start the program
function main()
{
    let counter = createCounter(5);
    counter.increment();
    console.log(counter.getCount());
    
    counter.decrement();
    counter.decrement();
    console.log(counter.getCount());
}
main();