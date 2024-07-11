export interface IExternalApi{
    post(url:string, params:object, headers:object):object

    getWithQuery(url:string, params:object, headers:object):object

    getWithParams(url:string, params:object, headers:object):object

    patch(url:string, params:object, headers:object):object

    put(url:string, params:object, headers:object):object
}