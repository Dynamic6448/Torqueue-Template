import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { getAllPartsFB } from '../../backend/firebase';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    return {
        statusCode: 200,
        body: JSON.stringify(await getAllPartsFB()),
    };
};
