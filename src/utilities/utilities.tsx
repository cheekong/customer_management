export const generateId = ():string => {
    return 't_' + Math.random().toString();
}

export const copySimpleObject = (data: any):any => {
    return JSON.parse(JSON.stringify(data));
}