class UserFnx {

    static Create = async ( Data ) => {
        console.log(Data);
        return {
            'messgae' : 'hey',
        };
    };
};

module.exports = { UserFnx };