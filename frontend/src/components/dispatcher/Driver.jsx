export default function Driver({ driver }) {
  const { first_name, last_name, email, phone_number } = driver;
  return (
    <tr>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
      <td>{phone_number}</td>
    </tr>
  );
}
