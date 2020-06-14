export const filterUsers = (users, search) => {
  const reqex = new RegExp(`^${search}`, 'gi');
  return (
    users !== null &&
    users.filter(
      (user) => typeof user.name === 'string' && user.name.match(reqex)
    )
  );
};
