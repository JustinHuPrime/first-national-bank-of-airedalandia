/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
