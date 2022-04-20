import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData={
    UserPoolId: "us-east-1_ndEhdlKb6",
    ClientId: "63o94t8dj6a9lnhjnkecdkd79d"
}

export default new CognitoUserPool(poolData);