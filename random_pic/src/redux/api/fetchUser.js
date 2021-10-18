export const fetchUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const result = await response.json();
  if (result) {
    result.results[0].status = false;
    let newUser = result.results.map((user) => ({
      name: `${user.name.first}`,
      last: `${user.name.last}`,
      img: `${user.picture.large}`,
      status: `${user.status}`,
    }));
    return newUser;
  }
};
