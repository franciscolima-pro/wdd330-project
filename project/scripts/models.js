export default class Registration {
    constructor({ fullName, email, phone, chosenEventCode, chosenEventTitle, chosenEventDate, date }) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.chosenEventCode = chosenEventCode;
        this.chosenEventTitle = chosenEventTitle;
        this.chosenEventDate = chosenEventDate;
        this.date = date;
    }
  }