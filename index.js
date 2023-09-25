import { program } from "commander";
import * as contactService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const contactsList = await contactService.getContactsList();
        return console.table(contactsList);
      case "get":
        const contactById = await contactService.getContactById(id);
        return console.table(contactById);
      case "add":
        const newContact = await contactService.setNewContact({
          name,
          email,
          phone,
        });
        return console.table(newContact);

      case "remove":
        const removeContact = await contactService.getRemoveContact(id);
        return console.table(removeContact);

      default:
        console.warn("\x1b[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
