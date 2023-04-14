let banksDb = require("./db");
//Bank Model
class BankModel {
  constructor({ name, location, branch, phone, address, accountNumber }) {
    this.name = name;
    this.location = location;
    this.branch = branch;
    this.phone = phone;
    this.address = address;
    this.accountNumber = accountNumber;
  }
  static all() {
    return banksDb;
  }
  static update(updateInfo) {
    banksDb = banksDb.map((bank) => {
      if (bank.name === updateInfo.name) {
        return { ...bank, ...updateInfo };
      }
      return bank;
    });
  }
  static delete({ name }) {
    let deletedBanks = null;
    banksDb = banksDb.filter((bank) => {
      if (bank.name !== name) {
        return true;
      }
      deletedBanks = bank;
      return false;
    });
  }
  save() {
    banksDb.push(this);
    return this;
  }

  static update(user){

    const newDb=banksDb.map((item)=>{
      if (item.phone == user.phone) {
        return user
      }
    })

    banksDb=newDb
    return banksDb
  }

}

module.exports = BankModel;
