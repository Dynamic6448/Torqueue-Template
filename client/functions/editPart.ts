import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { setPartFB } from '../../backend/firebase';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    console.log(event);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'placeholder' }),
    };
};
