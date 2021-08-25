function User({ user }) {
  return (
    <>
      {Object.entries(user).map(([key, value]) => (
        <p key={key}>
          {key}: {JSON.stringify(value)}
        </p>
      ))}
      {/* <p>{user.name}</p> */}
      {/* <p>{user.email}</p> */}
    </>
  );
}

export default User;
