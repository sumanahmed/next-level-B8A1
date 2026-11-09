# Access Modifiers in TypeScript: public, private, protected and readonly

## Introduction

In object-oriented programming, we should not let every part of the code change every property of a class. TypeScript gives us access modifiers to control who can read or change class members. They help us write safer and cleaner code.

## The Modifiers

public: is the default. Anyone can access the member from anywhere.

private: means only the class itself can use the member. Outside code gets a compile error.

protected: is like private, but child classes can also use it.

readonly: means the value can be set once (in the declaration or constructor) and never changed after that.


class BankAccount {
  public owner: string;
  private balance: number;
  protected accountType = "savings";
  readonly id: number;

  constructor(owner: string, balance: number, id: number) {
    this.owner = owner;
    this.balance = balance;
    this.id = id;
  }

  deposit(amount: number) {
    this.balance += amount;   // OK: inside the class
  }
}

const acc = new BankAccount("Rahim", 500, 1);
acc.owner = "Karim";   // OK
acc.balance = 0;  // Error: 'balance' is private
acc.id = 2;   // Error: 'id' is readonly


A child class can use protected members:


class Premium extends BankAccount {
  show() {
    return this.accountType;  // OK: protected
  }
}


## Conclusion

Access modifiers protect your data and make your intent clear. Use `private` for internal details, `protected` for things children need, and `readonly` for values that must not change. One important note: these checks exist only at compile time, so they disappear in the final JavaScript.
