export const validate = (email, password, name) => {
  const Email = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  const Name = /([a-zA-Z0-9_\s]+)/.test(name);

  if (!Email) {
    return "Invalid email address";
  }
  if (!Password) {
    return "Invalid password";
  }
  if (name != null && !Name) {
    return "Invalid name";
  }
  return null;
};
