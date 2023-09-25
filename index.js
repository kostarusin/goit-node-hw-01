import * as contactService from "./contacts.js";

// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const contactList = await contactService.listContacts();
        return console.table(contactList);
      case "get":
        const contactById = await contactService.getContactById(id);
        return console.table(contactById);
      case "add":
        const newContact = await contactService.addContact({
          name,
          email,
          phone,
        });
        return console.table(newContact);

      case "remove":
        const deletedContact = await contactService.removeContact(id);
        return console.table(deletedContact);

      default:
        console.warn("\x1b[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "vza2RIzNGIwutCVCs4mCL" });
// invokeAction({
//   action: "add",
//   name: "Rosie Simpson",
//   email: "rosie@simpson.com",
//   phone: "123-456-678",
// });
invokeAction({ action: "remove", id: "MmU1-n12D1Pzrw3-kfsU8" });
