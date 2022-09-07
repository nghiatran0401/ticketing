## Abstract Classes

- Cannot be instantiated (cannot say 'new CustomError')
- Used to setup requirements for subclasses
- Create a class when translated to JS meaning that we can use it in 'instanceof' checks -> that's why we use this method instead of defining an interface check in each subclass (by 'implements [interface]')

## Static methods in Class

- Are methods that we can access without create an instance of a class
- Opposed to instance methods
