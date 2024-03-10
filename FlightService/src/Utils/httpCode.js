const ClientSideErrorCode= Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORIZE:401
,   NOT_FOUND:404
})
const ServerSideErrorCode= Object.freeze({
    INTERNAL_SERVER_ERROR=500,
    NOT_SUPPORTED=505
})

    const successCode=Object.freeze({
        OK:200,
        CREATED:201
    })



    module.exports={
        ClientSideErrorCode,
        ServerSideErrorCode,
        successCode
    }