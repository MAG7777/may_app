export const validatePassword = (password:string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};


export const checkPasswordMatch = (password:string, confirmPassword:string)=>{
         return password === confirmPassword;
}

export const checkRequiredFields = (fields: string[]): boolean => {
  return fields.every((field) => field.trim() !== "");
}



// export const checkRequiredFields = <T>(fields: T[]): boolean => {
//   return fields.every((field) => String(field).trim() !== "");
// };

// interface Trimable {
//   trim(): string;
// }

// export const checkRequiredFields = <T extends Trimable>(fields: T[]): boolean => {
//   return fields.every((field) => field.trim() !== "");
// };