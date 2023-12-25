import people from "./people";

export default function ListItem() {
  return (
    <>
      {people.map((person) => (
        <div key={person.id}>
          <ul>
            <li>{person.userName}</li>
            <li>{person.age}</li>
            {person.hobbies.map((hobby) => (
              <li>{hobby}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
