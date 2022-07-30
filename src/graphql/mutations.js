/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      accounts {
        items {
          id
          balance
          createdAt
          updatedAt
          userAccountsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      accounts {
        items {
          id
          balance
          createdAt
          updatedAt
          userAccountsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      accounts {
        items {
          id
          balance
          createdAt
          updatedAt
          userAccountsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      balance
      owner {
        id
        email
        accounts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userAccountsId
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      balance
      owner {
        id
        email
        accounts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userAccountsId
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      balance
      owner {
        id
        email
        accounts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userAccountsId
    }
  }
`;
