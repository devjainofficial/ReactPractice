function Employee({ userName, age = 222 }) {
  return (
    <h2>
      {userName} + {age}
    </h2>
  );
}
export default Employee;
