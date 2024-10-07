import { birthdays } from "./data.js";
import months from "./months.js";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import PropTypes from "prop-types";
import { useState } from "react";

function Birthday(props) {
  return (
    <div className="birthdayCard">
      <img src={props.image} alt={props.name} />
      <div className="birthdayDetails">
        <h3>{props.name}</h3>
        <p className="birthday">{props.birthday}</p>
        <p className="jobTitle">
          <span>Due : </span> {props.job}
        </p>
        <p className="birthday">
          <span>Payout : </span> {props.payout}
        </p>
        <p className="jobTitle">
          <span>Birthday In : </span> {props.days} days
        </p>
      </div>
    </div>
  );
}
Birthday.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  payout: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
};

const MyApp = () => {
  const [myBirthdays, setMyBirthdays] = useState(birthdays);

  const selectMonth = (month) => {
    const myBirthdays = birthdays.filter((birth) => birth.birth === month);
    setMyBirthdays(myBirthdays);
  };

  return (
    <>
      <div className="card-container">
        <Header />
        <div className="months">
          <Button
            isSelected={myBirthdays === "JAN"}
            onSelect={() => selectMonth("JAN")}
            month={months[0]}
          />
          <Button
            isSelected={myBirthdays === "FEB"}
            onSelect={() => selectMonth("FEB")}
            month={months[1]}
          />
          <Button
            isSelected={myBirthdays === "MAR"}
            onSelect={() => selectMonth("MAR")}
            month={months[2]}
          />
          <Button
            isSelected={myBirthdays === "APR"}
            onSelect={() => selectMonth("APR")}
            month={months[3]}
          />
          <Button
            isSelected={myBirthdays === "MAY"}
            onSelect={() => selectMonth("MAY")}
            month={months[4]}
          />
          <Button
            isSelected={myBirthdays === "JUN"}
            onSelect={() => selectMonth("JUN")}
            month={months[5]}
          />
          <Button
            isSelected={myBirthdays === "JUL"}
            onSelect={() => selectMonth("JUL")}
            month={months[6]}
          />
          <Button
            isSelected={myBirthdays === "AUG"}
            onSelect={() => selectMonth("AUG")}
            month={months[7]}
          />
          <Button
            isSelected={myBirthdays === "SEPT"}
            onSelect={() => selectMonth("SEPT")}
            month={months[8]}
          />
          <Button
            isSelected={myBirthdays === "OCT"}
            onSelect={() => selectMonth("OCT")}
            month={months[9]}
          />
          <Button
            isSelected={myBirthdays === "NOV"}
            onSelect={() => selectMonth("NOV")}
            month={months[10]}
          />
          <Button
            isSelected={myBirthdays === "DEC"}
            onSelect={() => selectMonth("DEC")}
            month={months[11]}
          />
        </div>

        {myBirthdays.map((birth, index) => (
          <Birthday
            key={index}
            image={birth.image}
            name={birth.name}
            birthday={birth.birthday}
            job={birth.job}
            payout={birth.payout}
            days={birth.days}
          />
        ))}
      </div>
    </>
  );
};

export default MyApp;
