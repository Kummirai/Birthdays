import { birthdays } from "./data.js";
import months from "./months.js";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";

const selectMonth = (month) => {
  console.log(month);
};

function Birthday({ image, name, birthday, job }) {
  return (
    <div className="birthdayCard">
      <img src={image} alt={name} />
      <div className="birthdayDetails">
        <h3>{name}</h3>
        <p className="birthday">{birthday}</p>
        <p className="jobTitle">{job}</p>
      </div>
    </div>
  );
}

const MyApp = () => {
  return (
    <div className="card-container">
      <Header />
      <div className="months">
        <Button onSelect={() => selectMonth("JAN")} month={months[0]} />
        <Button onSelect={() => selectMonth("FEB")} month={months[1]} />
        <Button onSelect={() => selectMonth("MAR")} month={months[2]} />
        <Button onSelect={() => selectMonth("APR")} month={months[3]} />
        <Button onSelect={() => selectMonth("MAY")} month={months[4]} />
        <Button onSelect={() => selectMonth("JUN")} month={months[5]} />
        <Button onSelect={() => selectMonth("JUL")} month={months[6]} />
        <Button onSelect={() => selectMonth("AUG")} month={months[7]} />
        <Button onSelect={() => selectMonth("SEPT")} month={months[8]} />
        <Button onSelect={() => selectMonth("OCT")} month={months[9]} />
        <Button onSelect={() => selectMonth("NOV")} month={months[10]} />
        <Button onSelect={() => selectMonth("DEC")} month={months[11]} />
      </div>

      {birthdays.map((birth, index) => (
        <Birthday
          key={index}
          image={birth.image}
          name={birth.name}
          birthday={birth.birthday}
          job={birth.job}
        />
      ))}
    </div>
  );
};

export default MyApp;
