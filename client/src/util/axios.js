import axios from "axios";
import { reactive } from "vue";

// const apiHost = "http://localhost:8080"


// const awaitApi = async (_config, headerOptions) => {
//     if (headerOptions !== undefined) {
//         _config.headers = mergeHeaderOptions(headerOptions, _config.headers);
//     }

//     try {
//         return {
//             success: true,
//             result: (await authInstance(_config)).data,
//             error: false
//         }
//     } catch (e) {
//         return {
//             success: false,
//             result: null,
//             error: e
//         };
//     }
// }

// const mergeHeaderOptions = (
//     {tenantId = undefined, tenantCode = undefined, companyId = undefined, databaseId = undefined, ...otherOptions},
//     headers = {}
// ) => {

//     const mergeHeaders = {
//         ...headers,
//         ...otherOptions
//     }

//     if (tenantId !== undefined) {
//         mergeHeaders["X-TENANT-ID"] = tenantId;
//     }

//     if (tenantCode !== undefined) {
//         mergeHeaders["X-TENANT-CODE"] = tenantCode;
//     }

//     if (companyId !== undefined) {
//         mergeHeaders["X-COMPANY-ID"] = companyId;
//     }

//     if (databaseId !== undefined) {
//         mergeHeaders["X-DATABASE-ID"] = databaseId;
//     }

//     return mergeHeaders;

// }


// export const authInstance = axios.create({
//     baseURL: apiHost,
//     withCredentials:true,
//     headers: {
//         "Content-Type": "application/json",
//     }
// });

// const request = {
//     test: {
//         getName: () => {
//             const config = {
//                 method: 'GET',
//                 url: `/axios/test`
//             }

//             return awaitApi(config);
//         }
//     }
// }

// export const apiRequest = {
//     test: {
//         getName: request.test.getName
//     }
// }


// const axiosServices = axios.create();

// axiosServices.interceptors.response.use(
//     (response) => response,
//     (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
// );

// export default axiosServices;



