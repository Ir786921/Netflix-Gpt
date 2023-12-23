export function validation(email, pwd, name) {
  const emailVal =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/.test(email);

  const pwdVal =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd
    );
  const fnameVal = /^[A-Z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/.test(name);

  if (!emailVal) return "Enter a correct email";

  if (!pwdVal) {
    return "Enter Strong Password";
  }

//   if (!fnameVal) {
//     return "Name should have 5 character";
//   }
 
  return " ";
  
}
